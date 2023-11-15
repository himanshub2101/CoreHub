export function confirmPasswordValidator(confirmpassword:string): string {
    if(!confirmpassword) return 'confirm password is required'
    if(confirmpassword.length<5) return 'confirm password length is greater then 5'
    return '';
}