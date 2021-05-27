export const ValidationPattern = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    username: '^[A-Za-z0-9._-]*$',
    password : '^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*_=+-]).{8,}$',
    validateemail: /(.+)@(.+){2,}\.(.+){2,}/



   

}