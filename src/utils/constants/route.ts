import { NotFoundPage } from '~/components';
import { AboutUser, DashboardAdmin, HomeUser, LoginAdmin, LoginUser } from '~/pages';
import { IRouteModel } from '../interface/common';

// Router && Path
export const adminRoute = {
  base: '/admin',
  login: '/login',
  dashboard: '/dashboard',
};

export const userRoute = {
  base: '/',
  login: '/login',
  home: '/home',
  about: '/about',
};

//#region Admin Routes
export const publicRoutesAdmin: IRouteModel[] = [
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: `${adminRoute.base}${adminRoute.login}`,
    component: LoginAdmin,
  },
];

export const privateAdminRoutes: IRouteModel[] = [
  {
    path: `${adminRoute.base}${adminRoute.dashboard}`,
    component: DashboardAdmin,
    name: 'Dashboard',
  },
];
//#endregion Admin Routes

//#region Patient Routes
export const publicUserRoutes: IRouteModel[] = [
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: userRoute.login,
    component: LoginUser,
  },
];

export const privateUserRoutes: IRouteModel[] = [
  {
    path: userRoute.home,
    component: HomeUser,
  },
  {
    path: userRoute.about,
    component: AboutUser,
  },
];
//#endregion Patient Routes

export const publicRoutes = [...publicRoutesAdmin, ...publicUserRoutes];

export const privateRoutes = [];

export const adminRouteAbsolute = {
  dashboard: `${adminRoute.base}${adminRoute.dashboard}`,
};
