const passInput = document.querySelector("#password");

const passCheck = document.querySelector("#Cpassword");

function check_pass(){
    console.log("PAHUCH GAYA");
    if(passCheck.value === passInput.value){
        console.log("MATCHHHH")
    }else{
        console.log("NOOOOOO")
    }
}