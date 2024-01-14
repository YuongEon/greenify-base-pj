import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './utils/constants/route';

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
