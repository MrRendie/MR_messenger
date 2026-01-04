import { create } from "zustand";

export type UserRole = "user" | "admin";

export type User = {
  id: string;
  username: string;
  avatar?: string;
  role: UserRole;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;

  loginMock: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true, // ⚠️ mock, потом будет false
  user: {
    id: "1",
    username: "MrRendie",
    role: "admin",
  },

  loginMock: () =>
    set({
      isAuthenticated: true,
      user: {
        id: "1",
        username: "MrRendie",
        role: "admin",
      },
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
