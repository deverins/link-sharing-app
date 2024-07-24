import create from 'zustand';

interface AuthState {
  email: string;
  password: string;
  confirmPassword:string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setconfirmPassword: (confirmPassword: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  confirmPassword: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setconfirmPassword: (confirmPassword: string) => set({confirmPassword})

}));
