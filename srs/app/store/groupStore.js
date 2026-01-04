import { create } from "zustand";

export const useGroupStore = create(() => ({
  groups: [
    {
      id: "g-1",
      name: "Private Dev",
      closed: true,
      members: 5,
    },
    {
      id: "g-2",
      name: "News Channel",
      closed: false,
      members: 1200,
    },
  ],
}));
