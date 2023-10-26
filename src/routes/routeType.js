import { Url } from "../constant";
import { PartnerLanding, SignUp } from "../pages";

const publicRoute = [{ path: Url.Signup, Component: SignUp },
{ path: Url.PARTNERS_LANDING_PAGE, Component: PartnerLanding }];

const privateRoute = [{ path: Url.PARTNERS_LANDING_PAGE, Component: PartnerLanding }];

export { publicRoute, privateRoute };
