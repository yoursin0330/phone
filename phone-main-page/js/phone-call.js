const keypads = document.body.querySelectorAll(".phone-call__keypad")
const phoneNumber = document.body.querySelector(".phone-call__callbox-numInput span")
const callIcon = document.body.querySelector(".phone-call__callbox-call i")
const callNumber=document.body.querySelector("#callNumber");
const callEndIcon=document.body.querySelector(".phone-call__calling-call__end i")

const callbox=document.body.querySelector(".phone-call__callbox");
const callingbox=document.body.querySelector(".phone-call__calling");
//전화 번호 입력할 곳
function pressNumber(event){
    const char=event.srcElement.innerText;
    phoneNumber.innerText+=char;
}
function pressCallIcon(){
    callNumber.innerText=phoneNumber.innerText;
    callbox.classList.add("hidden");
    callingbox.classList.remove("hidden");
}

function pressCallEndIcon(){
    callNumber.innerText="";
    phoneNumber.innerText="";
    callbox.classList.remove("hidden");
    callingbox.classList.add("hidden");
}
// 밑의 무식한 방식말고 다른 방법으로 해결할 방법 있는지 알아보기....
keypads[0].addEventListener("click",pressNumber)
keypads[1].addEventListener("click",pressNumber)
keypads[2].addEventListener("click",pressNumber)
keypads[3].addEventListener("click",pressNumber)
keypads[4].addEventListener("click",pressNumber)
keypads[5].addEventListener("click",pressNumber)
keypads[6].addEventListener("click",pressNumber)
keypads[7].addEventListener("click",pressNumber)
keypads[8].addEventListener("click",pressNumber)
keypads[9].addEventListener("click",pressNumber)
keypads[10].addEventListener("click",pressNumber)
keypads[11].addEventListener("click",pressNumber)

callIcon.addEventListener("click",pressCallIcon)
callEndIcon.addEventListener("click",pressCallEndIcon)

