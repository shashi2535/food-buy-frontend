import { MODAL } from "../constant"
import { EmailLogin, PhoneLogin, SignUpBody } from "../pages"
export const getCurrentModal = (currentModal) => {
    switch (currentModal) {
        case MODAL.LOGIN_EMAIL: return { title: "Login", Component: <EmailLogin /> };
        case MODAL.SIGN_UP: return { title: "SignUp", Component: <SignUpBody /> };
        default: return { title: "Login", Component: <PhoneLogin /> }
    }
}