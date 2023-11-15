export function passwordValidator(password:string):string {
    if(!password) return "password is required";
    if(password.length<5) return "password must be atleast 5 character long"
    return ''
}