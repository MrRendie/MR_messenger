import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'dark' | 'light' | 'milk' | 'neon' | 'space' | 'red-glitch' | 'star';
export type ActiveTab = 'feed' | 'messages' | 'profile';

interface UIStore {
  theme: Theme;
  activeTab: ActiveTab;
  isAuthModalOpen: boolean;
  isChatSettingsOpen: boolean;
  isCallOverlayOpen: boolean;
  callType: 'audio' | 'video' | null;
  isIncomingCall: boolean;
  selectedChatId: string | null;
  
  // Actions
  setTheme: (theme: Theme) => void;
  setActiveTab: (tab: ActiveTab) => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  toggleChatSettings: () => void;
  startCall: (type: 'audio' | 'video') => void;
  endCall: () => void;
  setSelectedChat: (chatId: string | null) => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      activeTab: 'feed',
      isAuthModalOpen: true, // Initially open for auth
      isChatSettingsOpen: false,
      isCallOverlayOpen: false,
      callType: null,
      isIncomingCall: false,
      selectedChatId: null,
      
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
      
      setActiveTab: (tab) => set({ activeTab: tab }),
      
      openAuthModal: () => set({ isAuthModalOpen: true }),
      closeAuthModal: () => set({ isAuthModalOpen: false }),
      
      toggleChatSettings: () => set((state) => ({ 
        isChatSettingsOpen: !state.isChatSettingsOpen 
      })),
      
      startCall: (type) => set({ 
        isCallOverlayOpen: true, 
        callType: type,
        isIncomingCall: false 
      }),
      
      endCall: () => set({ 
        isCallOverlayOpen: false, 
        callType: null 
      }),
      
      setSelectedChat: (chatId) => set({ selectedChatId: chatId }),
    }),
    {
      name: 'ui-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.setAttribute('data-theme', state.theme);
        }
      },
    }
  )
);
