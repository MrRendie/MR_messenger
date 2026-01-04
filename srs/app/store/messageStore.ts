import { create } from 'zustand';
import { mockMessages } from '../data/mockData';

export type MessageType = 'text' | 'image' | 'file' | 'voice';
export type MessageStatus = 'pending' | 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  status: MessageStatus;
  reactions: Record<string, string[]>;
  replyTo?: string;
  isEdited?: boolean;
  isDeleted?: boolean;
  autoDelete?: number; // seconds
}

interface MessageStore {
  messages: Message[];
  sendMessage: (message: Omit<Message, 'id' | 'timestamp' | 'status' | 'reactions'>) => void;
  updateMessageStatus: (messageId: string, status: MessageStatus) => void;
  addReaction: (messageId: string, emoji: string, userId: string) => void;
  editMessage: (messageId: string, content: string) => void;
  deleteMessage: (messageId: string, forEveryone?: boolean) => void;
  setAutoDelete: (messageId: string, seconds: number) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: mockMessages,
  
  sendMessage: (message) => {
    const newMessage: Message = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date(),
      status: 'pending',
      reactions: {},
    };
    
    set((state) => ({
      messages: [...state.messages, newMessage]
    }));
    
    // Simulate sending
    setTimeout(() => {
      useMessageStore.getState().updateMessageStatus(newMessage.id, 'sent');
      setTimeout(() => {
        useMessageStore.getState().updateMessageStatus(newMessage.id, 'delivered');
        setTimeout(() => {
          useMessageStore.getState().updateMessageStatus(newMessage.id, 'read');
        }, 1000);
      }, 500);
    }, 300);
  },
  
  updateMessageStatus: (messageId, status) =>
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === messageId ? { ...msg, status } : msg
      ),
    })),
    
  addReaction: (messageId, emoji, userId) =>
    set((state) => ({
      messages: state.messages.map(msg => {
        if (msg.id === messageId) {
          const reactions = { ...msg.reactions };
          if (!reactions[emoji]) reactions[emoji] = [];
          if (!reactions[emoji].includes(userId)) {
            reactions[emoji].push(userId);
          }
          return { ...msg, reactions };
        }
        return msg;
      }),
    })),
    
  editMessage: (messageId, content) =>
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === messageId ? { ...msg, content, isEdited: true } : msg
      ),
    })),
    
  deleteMessage: (messageId, forEveryone = false) =>
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === messageId 
          ? { ...msg, content: forEveryone ? 'Сообщение удалено' : 'Вы удалили это сообщение', isDeleted: true }
          : msg
      ),
    })),
    
  setAutoDelete: (messageId, seconds) => {
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === messageId ? { ...msg, autoDelete: seconds } : msg
      ),
    }));
    
    // Simulate auto-delete
    setTimeout(() => {
      useMessageStore.getState().deleteMessage(messageId, true);
    }, seconds * 1000);
  },
}));