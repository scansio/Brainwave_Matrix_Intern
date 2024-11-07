import Reblend, { SharedConfig } from "reblendjs";
import Router, { Route } from "reblend-router";
import Notfound from "./pages/Notfound";
import ErrorHandler from "./layouts/ErrorHandler";
import { routes } from "./routes";
import { UID } from "./scripts/config/contants";
import { rand } from "./scripts/md5";

function App() {
  if (!SharedConfig.getLocalData(UID)) {
    SharedConfig.setLocalData(
      UID,
      (crypto && crypto.randomUUID && crypto.randomUUID()) ||
        rand(0x9988aac, 0xfffffff)
    );
  }

  return (
    <>
      <style>
        {`a {
            text-decoration: none !important;
          }`}
      </style>
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
