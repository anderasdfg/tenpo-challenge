import { AUTH_STORAGE_KEY } from '@/config/routes.config';

export const authService = {
  login: async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const response = {
      status: 200,
      data: {
        token: `fake-jwt-token-${Math.random().toString(36).substring(2, 15)}`,
        user: {
          email,
          name: 'Test User',
        },
      },
    };

    authService.setToken(response.data.token);

    return response;
  },

  setToken: (token: string) => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, token);
  },

  getToken: (): string | null => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!authService.getToken();
  },

  logout: () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  },
};
