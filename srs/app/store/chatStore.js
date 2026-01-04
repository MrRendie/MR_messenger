import { create } from "zustand";

export const useChatStore = create(() => ({
  chats: [
    {
      id: "1",
      type: "private",
      title: "Alex",
      lastMessage: "Привет",
      unread: 2,
    },
    {
      id: "2",
      type: "group",
      title: "Dev Group",
      lastMessage: "Деплой готов",
      unread: 0,
      closed: true,
    },
  ],

  getChatById: (id) =>
    id
      ? useChatStore.getState().chats.find((c) => c.id === id)
      : null,
}));
