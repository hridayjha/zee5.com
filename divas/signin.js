const button = document.querySelector('#but');
button.addEventListener("click",signinFun);
function signinFun(){
    event.preventDefault();
    const val = Math.floor(1000 + Math.random() * 9000);
    alert ("Your One time Pin is"+"\n"+val);
    window.location="otpPage.html";
}