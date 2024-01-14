import { NotFoundPage } from '~/components/common';
import { FreeLayout, MainLayout } from '~/layouts';
import { About, Home } from '~/pages';

// Router && Path
export const RouterPaths = {
  MAIN: '/',
  LOGIN: 'login',
  ADMIN: 'admin',
  PUBLIC: {
    GROUP: 'public/groups',
    TABLE: 'public/tables',
  },
};

export const ExactPath = {
  main: `/${RouterPaths?.ADMIN}`,
  auth: {
    login: `/${RouterPaths.LOGIN}`,
  },
};

export const publicRoutes = [
  {
    path: '*',
    component: NotFoundPage,
    layout: FreeLayout,
  },
  {
    path: '/',
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/about',
    component: About,
    layout: MainLayout,
  },
];
