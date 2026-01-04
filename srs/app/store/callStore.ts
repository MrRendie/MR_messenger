import { create } from "zustand";

export const useCallStore = create((set) => ({
  call: null, // { chatId, type, status, startedAt }

  startCall: (chatId, type = "audio") =>
    set({
      call: {
        chatId,
        type, // audio | video
        status: "calling", // calling | incoming | active | ended
        startedAt: Date.now(),
        muted: false,
        cameraOff: false,
      },
    }),

  incomingCall: (chatId, type = "audio") =>
    set({
      call: {
        chatId,
        type,
        status: "incoming",
        startedAt: Date.now(),
        muted: false,
        cameraOff: false,
      },
    }),

  acceptCall: () =>
    set((state) => ({
      call: state.call
        ? { ...state.call, status: "active" }
        : null,
    })),

  endCall: () => set({ call: null }),

  toggleMute: () =>
    set((state) => ({
      call: { ...state.call, muted: !state.call.muted },
    })),

  toggleCamera: () =>
    set((state) => ({
      call: { ...state.call, cameraOff: !state.call.cameraOff },
    })),
}));
