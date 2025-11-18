function validName(n){return /^[A-Za-z ]+$/.test(n);}
function validEmail(e){return /^[^@]+@[^@]+\.[A-Za-z]{2,}$/.test(e);}
function validSeats(s){return /^[1-9]$|10/.test(s);}
function bookTicket(name,email,seats){
    if(!validName(name)) return "Invalid name";
    if(!validEmail(email)) return "Invalid email";
    if(!validSeats(seats)) return "Invalid seats";
    var ticket={name:name,email:email,seats:seats};
    return ticket;
}
console.log(bookTicket("Raju","raju@mail.com","3"));
