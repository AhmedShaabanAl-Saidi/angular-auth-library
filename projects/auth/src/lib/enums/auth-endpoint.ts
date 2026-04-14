export class AuthEndPoint {
    private static readonly BASE_URL = 'https://exam.elevateegy.com/api/v1/auth';

    static readonly REGISTER = `${AuthEndPoint.BASE_URL}/signup`;
    static readonly LOGIN = `${AuthEndPoint.BASE_URL}/signin`;
    static readonly CHANGEPASSWORD = `${AuthEndPoint.BASE_URL}/changePassword`;
    static readonly FORGOTPASSWORD = `${AuthEndPoint.BASE_URL}/forgotPassword`;
    static readonly VERIFYRESETCODE = `${AuthEndPoint.BASE_URL}/verifyResetCode`;
    static readonly RESETPASSWORD = `${AuthEndPoint.BASE_URL}/resetPassword`;
    static readonly DELETEMYACCOUNT = `${AuthEndPoint.BASE_URL}/deleteMe`;
    static readonly EDITPROFILE = `${AuthEndPoint.BASE_URL}/editProfile`;
    static readonly LOGOUT = `${AuthEndPoint.BASE_URL}/logout`;
}