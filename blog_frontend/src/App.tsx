import Reblend from "reblendjs";
import Router, { Route } from "reblend-router";
import Notfound from "./pages/Notfound";
import ErrorHandler from "./layouts/ErrorHandler";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Notfound />
      <Router />
      {Object.entries(routes).map(([path, Component]) => (
        <Route
          element={
            <ErrorHandler>
              <Component />
            </ErrorHandler>
          }
          path={path}
        />
      ))}
    </>
  );
}

export default App;
