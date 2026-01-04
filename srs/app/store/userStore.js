import { create } from "zustand";

export const useUserStore = create(() => ({
  currentUser: {
    id: "me",
    name: "Mr. Rendie",
    username: "@rendie",
    bio: "Создатель MR Messenger",
  },

  users: {
    "user-1": {
      id: "user-1",
      name: "Alex",
      status: "online",
    },
  },
}));
