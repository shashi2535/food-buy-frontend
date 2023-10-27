import { PAGE_URLS } from "../constant";
import { PartnerLanding, SignUp } from "../pages";

const publicRoute = [{ path: PAGE_URLS.Signup, Component: SignUp },
{ path: PAGE_URLS.PARTNERS_LANDING_PAGE, Component: PartnerLanding }];

const privateRoute = [{ path: PAGE_URLS.PARTNERS_LANDING_PAGE, Component: PartnerLanding }];

export { publicRoute, privateRoute };
