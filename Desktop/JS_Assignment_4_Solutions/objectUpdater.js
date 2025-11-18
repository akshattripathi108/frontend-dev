var user={name:"John",email:"john@mail.com",age:21};
function updateUser(field,value){
    if(user.hasOwnProperty(field)){
        user[field]=value;
    }
}
updateUser("name","Rohan");
updateUser("age",25);
console.log(user);
