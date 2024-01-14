import { NotFoundPage } from '~/components/common';
import { FreeLayout, MainLayout } from '~/layouts';
import { About, Home, LoginAdmin, LoginUser } from '~/pages';

// Router && Path
export const adminRoute = {
  base: '/admin',
  login: '/login',
};

export const userRoute = {
  base: '/',
  login: '/login',
  home: '/home',
  about: '/about',
};

export const publicRoutesAdmin = [
  {
    path: '*',
    component: NotFoundPage,
    layout: FreeLayout,
  },
  {
    path: `${adminRoute.base}`,
    component: LoginAdmin,
    layout: FreeLayout,
  },
  {
    path: `${adminRoute.base}${userRoute.login}`,
    component: LoginAdmin,
    layout: FreeLayout,
  },
];

export const publicRoutesUser = [
  {
    path: '*',
    component: NotFoundPage,
    layout: FreeLayout,
  },
  {
    path: `${userRoute.base}`,
    component: Home,
    layout: MainLayout,
  },
  {
    path: `${userRoute.base}${userRoute.login}`,
    component: LoginUser,
    layout: FreeLayout,
  },
  {
    path: `${userRoute.base}${userRoute.home}`,
    component: Home,
    layout: MainLayout,
  },
  {
    path: `${userRoute.base}${userRoute.about}`,
    component: About,
    layout: MainLayout,
  },
];

export const publicRoutes = [...publicRoutesAdmin, ...publicRoutesUser];

export const privateRoutes = [];
