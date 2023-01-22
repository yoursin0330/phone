const clock=document.body.querySelector(".clock")
const today=document.body.querySelector(".today")
const inWeek=["일","월","화","수","목","금","토"]
function getClock(){
    const date = new Date()
    const hours=String(date.getHours()).padStart(2,"0")
    const minutes=String(date.getMinutes()).padStart(2,"0")
    const seconds=String(date.getSeconds()).padStart(2,"0")
    clock.innerText=`${hours}:${minutes}:${seconds}`
}
function getToday(){
    const date=new Date()
    const month=date.getMonth()
    const day=date.getDate()
    const dayOfWeek=date.getDay()
    today.innerText=`${month+1}월 ${day}일 ${inWeek[dayOfWeek]}요일`
}
getClock()
getToday()
setInterval(getClock,1000)
setInterval(getToday,1000)
