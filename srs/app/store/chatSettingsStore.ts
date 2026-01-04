import { create } from "zustand";

export const useChatSettingsStore = create((set) => ({
  activeChatId: null,

  pinned: {},
  muted: {},
  encrypted: {},

  openChatSettings: (chatId) =>
    set({ activeChatId: chatId }),

  togglePin: (chatId) =>
    set((s) => ({
      pinned: {
        ...s.pinned,
        [chatId]: !s.pinned[chatId],
      },
    })),

  toggleMute: (chatId) =>
    set((s) => ({
      muted: {
        ...s.muted,
        [chatId]: !s.muted[chatId],
      },
    })),

  toggleEncryption: (chatId) =>
    set((s) => ({
      encrypted: {
        ...s.encrypted,
        [chatId]: !s.encrypted[chatId],
      },
    })),
}));
