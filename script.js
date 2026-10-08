const fullname = document.getElementById("formname")

fullname.addEventListener("submit", (event) => {
event.preventDefault();

const formname = document.getElementById("formname").value ;


if (formname=== Narges) {
    console.log("Welcome to your page.");
}
 
else if (formname=== Nazari ){
    console.log("It is your page!");

}
else{
    console.log("Please type your own Full Name!")
}
});

const email = document.getElementsById("password");

email.addEventListener("submit", (Event) =>  {
    event.preventDefault();

    const password = document.getElementById("password").value;

    if (password=== 20042004) {
        console.log("login the page");
    }
    else if (password === 2002004) {
        console.log("Enter Your password hinted 2..");
    }
    else{
        console.log("Enter your password");
    }
})

const age = document.getElementById("ageform");

age.addEventListener("submit", (event) => {

    if ("ageform >= 16 ageform <= 50") {
        console.log("You are accepted");
    }
    else if ( "ageform < 16") {
        console.log( "You are not allow to submit this File.");
    }
    else{
        console.log("You should go to your own page")
    }

})

