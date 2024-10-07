import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import LandingPage from "./Pages/Home/";

export const routes = createBrowserRouter([{
  path: "/",
  element: (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  ),
}]);
