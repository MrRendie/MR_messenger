import { create } from "zustand";

export const useUIStore = create((set) => ({
  rightPanelView: "none", // none | chat-info | profile-preview

  activeChatId: null,
  activeUserId: null,

  openChatInfo: (chatId) =>
    set({
      rightPanelView: "chat-info",
      activeChatId: chatId,
    }),

  openProfilePreview: (userId) =>
    set({
      rightPanelView: "profile-preview",
      activeUserId: userId,
    }),

  closeRightPanel: () =>
    set({
      rightPanelView: "none",
      activeChatId: null,
      activeUserId: null,
    }),
}));
