export const APP_NAME = 'Tasty Trade';

export const FLAGS = {
    INDIA: 'https://b.zmtcdn.com/images/flags_z10/in.png'
}

export const MODAL = {
    LOGIN_PHONE: 'phone',
    LOGIN_EMAIL: 'email',
    SIGN_UP: 'signup',
    OTP_EMAIL: 'otp-email'
}

export const EMAIL_ICON = 'https://b.zmtcdn.com/Zwebmolecules/73b3ee9d469601551f2a0952581510831595917292.png';

export const STORAGE_KEYS = {
    USER_DETAILS: 'user_details',
    AUTH_TOKEN: 'auth_token'
}

export const LABEL_CLASSES = {
    BEFORE: 'label-before',
    AFTER: 'label-after'
}

export const getVerificationContent = (data, contentFor = MODAL.OTP_EMAIL) => {
    if (contentFor === MODAL.OTP_EMAIL) {
        const [fullEmail, domain] = data?.email?.split('@') ?? [''];
        const email = fullEmail[0] + '*****' + fullEmail[fullEmail.length - 1] + domain;
        return `Verification code has been sent to your email, ${email}, please enter the same here to complete the signup. Valid for 10 minutes.`
    }
}

export const OTP_RESEND_TIMEOUT = 30;

export const OTP_LENGTH = 6;

export const DEFAULT_PROFILE_PIC = 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png'