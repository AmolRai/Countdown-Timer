const end = "16 January 2023 05:15 PM";
document.querySelector(".time").innerText = end;
const inputs = document.querySelectorAll("input");

function clock() {
    const endDate = new Date(end);
    const currentDate = new Date();
    const diff =( endDate - currentDate) / 1000;   
    // if(Math.floor(diff) == 0) {
    //     document.querySelector(".main").style.background = 'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")';
    // } 
    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); // day
    inputs[1].value = Math.floor(diff / 3600) % 24; // hours
    inputs[2].value = Math.floor(diff / 3600) % 60; // minutes
    inputs[3].value = Math.floor(diff) % 60; // seconds
}


clock();

setInterval(() => {
    clock();
}, 1000);