import { create } from "zustand";

export type Chat = {
  id: string;
  title: string;
  lastMessage: string;
  unread: number;
  pinned?: boolean;
  muted?: boolean;
  online?: boolean;
};

type ChatsState = {
  chats: Chat[];
  activeChatId: string | null;
  selectChat: (id: string) => void;
};

export const useChatsStore = create<ChatsState>((set) => ({
  chats: [
    {
      id: "1",
      title: "Alex",
      lastMessage: "Ты где?",
      unread: 2,
      online: true,
      pinned: true,
    },
    {
      id: "2",
      title: "MR Dev Team",
      lastMessage: "Залил билд",
      unread: 0,
      muted: true,
    },
    {
      id: "3",
      title: "Design",
      lastMessage: "Глянь макет",
      unread: 5,
    },
  ],
  activeChatId: null,
  selectChat: (id) => set({ activeChatId: id }),
}));