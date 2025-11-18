function checkUser(u){return /^.{5,}$/.test(u);}
function checkPass(p){
    return /[A-Z]/.test(p)&&/[a-z]/.test(p)&&/\d/.test(p)&&/[^A-Za-z0-9]/.test(p)&&p.length>=8;
}
function login(u,p){
    if(!checkUser(u)) return "Username too short";
    if(!checkPass(p)) return "Password not strong";
    return "Success";
}
console.log(login("admin1","Abc@1234"));
