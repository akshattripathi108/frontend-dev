function validateName(n) {
    return /^[A-Za-z ]+$/.test(n);
}
function validateEmail(e) {
    return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(e);
}
function validatePhone(p) {
    return /^\d{10}$/.test(p);
}
function validatePassword(pw) {
    return /[A-Z]/.test(pw) && /\d/.test(pw) && /[^A-Za-z0-9]/.test(pw);
}
console.log(validateName("Rahul"), validateEmail("a@mail.com"), validatePhone("9999999999"), validatePassword("Abc@1234"));
