import { MODAL } from "../constant"
import { EmailLogin, OtpModal, PhoneLogin, SignUp } from "../pages";

export const getCurrentModal = (currentModal) => {
    switch (currentModal) {
        case MODAL.LOGIN_EMAIL: return { title: "Login", Component: <EmailLogin /> };
        case MODAL.SIGN_UP: return { title: "SignUp", Component: <SignUp /> };
        case MODAL.OTP_EMAIL: return { title: 'OTP Verification', Component: <OtpModal /> }
        default: return { title: "Login", Component: <PhoneLogin /> }
    }
}