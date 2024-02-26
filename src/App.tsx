import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { adminRoute, privateAdminRoutes, privateUserRoutes, publicRoutes, userRoute } from './utils/constants/route';
import { FreeLayout, HeaderLayout, MainLayout } from './layouts';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={userRoute.base} element={<Navigate to={userRoute.login} />}></Route>
        <Route path={adminRoute.base} element={<Navigate to={`${adminRoute.base}${adminRoute.login}`} />}></Route>

        <Route element={<FreeLayout />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>

        <Route path={userRoute.base} element={<HeaderLayout />}>
          {privateUserRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>

        <Route path={adminRoute.base} element={<MainLayout />}>
          {privateAdminRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
