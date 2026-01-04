import { Message } from '../store/messageStore';

export const mockUsers = [
  {
    id: '1',
    name: 'Александр Петров',
    username: '@alex_petrov',
    email: 'alex@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    status: 'online',
    lastSeen: new Date(),
    bio: 'Frontend разработчик',
  },
  // ... more users
];

export const mockChats = [
  {
    id: '1',
    name: 'Общий чат',
    type: 'group',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Group1',
    members: ['1', '2', '3'],
    isPinned: true,
    isMuted: false,
    isEncrypted: true,
    isSilent: false,
    autoDelete: null,
    preventScreenshot: false,
    preventForwarding: false,
    background: 'default',
    lastMessage: 'Привет всем!',
    lastMessageTime: '10:30',
    unreadCount: 3,
  },
  // ... more chats
];

export const mockMessages: Message[] = [
  {
    id: '1',
    chatId: '1',
    senderId: '1',
    type: 'text',
    content: 'Привет всем! Как дела?',
    timestamp: new Date(Date.now() - 3600000),
    status: 'read',
    reactions: { '👍': ['2', '3'] },
  },
  {
    id: '2',
    chatId: '1',
    senderId: '2',
    type: 'text',
    content: 'Всё отлично!',
    timestamp: new Date(Date.now() - 1800000),
    status: 'read',
    reactions: {},
    replyTo: '1',
  },
  // ... more messages
];

export const mockPosts = [
  {
    id: '1',
    author: mockUsers[0],
    content: 'Сегодня прекрасный день для кодинга! 🚀',
    image: 'https://picsum.photos/600/400?random=1',
    timestamp: new Date(Date.now() - 86400000),
    likes: 42,
    comments: 12,
    shares: 5,
    isLiked: false,
    isShared: false,
  },
  // ... more posts
];