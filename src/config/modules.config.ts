import { ROUTES } from '@/config/routes.config';
import type { RouteDefinition } from '@/types/navigation';

export const MODULES = {
  // Public modules
  AUTH: {
    name: 'Authentication',
    routes: {
      LOGIN: {
        name: 'Login',
        path: ROUTES.LOGIN,
        isPublic: true,
        showInNavigation: false,
      } as RouteDefinition,
      REGISTER: {
        name: 'Register',
        path: ROUTES.REGISTER,
        isPublic: true,
        showInNavigation: false,
      } as RouteDefinition,
      RESET_PASSWORD: {
        name: 'Reset Password',
        path: ROUTES.RESET_PASSWORD,
        isPublic: true,
        showInNavigation: false,
      } as RouteDefinition,
      FORGOT_PASSWORD: {
        name: 'Forgot Password',
        path: ROUTES.FORGOT_PASSWORD,
        isPublic: true,
        showInNavigation: false,
      } as RouteDefinition,
    },
  },

  // Private modules
  DASHBOARD: {
    name: 'Dashboard',
    routes: {
      HOME: {
        name: 'Home',
        path: ROUTES.HOME,
        isPublic: false,
        showInNavigation: true,
        icon: 'home',
      } as RouteDefinition,
    },
  },
};

export const getPublicRoutes = () => {
  return Object.values(MODULES)
    .flatMap((module) => Object.values(module.routes))
    .filter((route): route is RouteDefinition => route.isPublic)
    .map((route) => route.path);
};

export const getPrivateRoutes = () => {
  return Object.values(MODULES)
    .flatMap((module) => Object.values(module.routes))
    .filter((route): route is RouteDefinition => !route.isPublic)
    .map((route) => route.path);
};

export const getNavigationItems = () => {
  return Object.values(MODULES)
    .flatMap((module) => Object.values(module.routes))
    .filter((route): route is RouteDefinition => route.showInNavigation)
    .map((route) => ({
      name: route.name,
      path: route.path,
      icon: route.icon,
    }));
};
