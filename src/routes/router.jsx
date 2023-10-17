import { publicRoute, privateRoute } from "./routeType";
import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {publicRoute.map((element, index) => {
        return (
          <Route
            path={element.path}
            key={index}
            element={<PublicRoutes Component={element.Component} />}
          />
        );
      })}

      {privateRoute.map((element, index) => {
        return (
          <Route
            path={element.path}
            key={index}
            element={<PrivateRoutes Component={element.Component} />}
          />
        );
      })}
    </Routes>
  );
};

export { Routing };
