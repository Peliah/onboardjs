import { create } from 'zustand';

type AuthDialogType = 'login' | 'signup' | null;

interface AuthStore {
  // Dialog state
  activeDialog: AuthDialogType;
  openLogin: () => void;
  openSignup: () => void;
  closeDialog: () => void;
  switchToLogin: () => void;
  switchToSignup: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  activeDialog: null,

  openLogin: () => set({ activeDialog: 'login' }),
  openSignup: () => set({ activeDialog: 'signup' }),
  closeDialog: () => set({ activeDialog: null }),
  switchToLogin: () => set({ activeDialog: 'login' }),
  switchToSignup: () => set({ activeDialog: 'signup' }),
}));
