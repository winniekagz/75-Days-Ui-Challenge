


import UserOnboarding from "./pages/userOnboarding/UserOnboarding";
import WebLayout from "./layouts/WebLayout";
import LandingPage from "./pages/webLandingPage";
export const routes = [
  {
    path:'/',
    element:<WebLayout>
      <LandingPage/>
    </WebLayout>
  },
  {
    path: "/onboarding",
    element: (
      <UserOnboarding/>
    ),
  },
 
];
