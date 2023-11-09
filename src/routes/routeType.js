import { PAGE_URLS } from "../constant";
import { PartnerLanding, SignUp,AddResturent } from "../pages";

const publicRoute = [
    { path: PAGE_URLS.Signup, Component: SignUp },
    { path: PAGE_URLS.PARTNERS_LANDING_PAGE, Component: PartnerLanding }
];

const privateRoute = [
    { path: PAGE_URLS.PARTNERS_LANDING_PAGE, Component: PartnerLanding },
    {path:PAGE_URLS.ADD_RESTURENT, Component:AddResturent},
    {path:PAGE_URLS.ADD_RESTURENT_WITH_ID, Component:AddResturent}
  
];

export { publicRoute, privateRoute };
