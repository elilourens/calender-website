function loadDate(){
    let current = new Date();
    let cDay = current.getDate();
    let cMonth = current.getMonth() + 1;
    let cYear = current.getFullYear();
    let tempDate = document.querySelector(".displaydate");
    tempDate.innerText = " " + cDay +"-" + cMonth + "-" + cYear;
}

let currentdate = new Date();
let selectedYear = currentdate.getFullYear();
let selectedMonth = currentdate.getMonth()+1;

let monthImages = ["Images/January.PNG","Images/February.PNG","Images/March.PNG","Images/April.PNG","Images/May.PNG","Images/June.PNG","Images/July.PNG","Images/August.PNG","Images/September.PNG","Images/October.PNG","Images/November.PNG","Images/December.PNG"]
const monthImage = document.querySelector(".imagebox")

function nextMonth(){
    selectedMonth++;
    if (selectedMonth == 13){
        selectedYear++;
        selectedMonth = 1;
        getDayOfFirstOfMonth();
    }
    monthImage.src = monthImages[selectedMonth-1];


}

function previousMonth(){
    selectedMonth--;
    if(selectedMonth == 0){
        selectedYear--;
        selectedMonth = 12;
        getDayOfFirstOfMonth();
    }
    monthImage.src = monthImages[selectedMonth-1];
}

function getDayOfFirstOfMonth(){
let day = new Date(selectedYear + "-" + selectedMonth + "-01").getDay();
let tempa = document.querySelector(".test");
day = (day===0) ? 7 : day;
monthImage.src = monthImages[selectedMonth-1];


daySlots = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]; //Array Length 39.
for(let i = day -1; i < daySlots.length; i++){
let j = 0;
j = i - day + 2;
daySlots[i] = j;
}
Months = ["Thrembo","Jan", "feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "december"];
tempa.innerText = selectedYear;
DaysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31,0]; //Need to make exception for leap years?
//Using 0 for element 0 - Not optimal should find alternative solution. 

//Agony.
for(let x = DaysInMonth[selectedMonth]+ day -1; x < daySlots.length; x++){
    daySlots[x] = "";
}

/*
p = day - 1; 
x = daySlots.length - ( p+DaysInMonth[selectedMonth +1]); // x = 5 for june 2022
while(x > 0){
y = daySlots.length - x;
daySlots[y] = "";
x--;
}
*/

document.getElementById("Slot1").innerText = daySlots[0];
document.getElementById("Slot2").innerText = daySlots[1];
document.getElementById("Slot3").innerText = daySlots[2];
document.getElementById("Slot4").innerText = daySlots[3];
document.getElementById("Slot5").innerText = daySlots[4];
document.getElementById("Slot6").innerText = daySlots[5];
document.getElementById("Slot7").innerText = daySlots[6];
document.getElementById("Slot8").innerText = daySlots[7];
document.getElementById("Slot9").innerText = daySlots[8];
document.getElementById("Slot10").innerText = daySlots[9];
document.getElementById("Slot11").innerText = daySlots[10];
document.getElementById("Slot12").innerText = daySlots[11];
document.getElementById("Slot13").innerText = daySlots[12];
document.getElementById("Slot14").innerText = daySlots[13];
document.getElementById("Slot15").innerText = daySlots[14];
document.getElementById("Slot16").innerText = daySlots[15];
document.getElementById("Slot17").innerText = daySlots[16];
document.getElementById("Slot18").innerText = daySlots[17];
document.getElementById("Slot19").innerText = daySlots[18];
document.getElementById("Slot20").innerText = daySlots[19];
document.getElementById("Slot21").innerText = daySlots[20];
document.getElementById("Slot22").innerText = daySlots[21];
document.getElementById("Slot23").innerText = daySlots[22];
document.getElementById("Slot24").innerText = daySlots[23];
document.getElementById("Slot25").innerText = daySlots[24];
document.getElementById("Slot26").innerText = daySlots[25];
document.getElementById("Slot27").innerText = daySlots[26];
document.getElementById("Slot28").innerText = daySlots[27];
document.getElementById("Slot29").innerText = daySlots[28];
document.getElementById("Slot30").innerText = daySlots[29];
document.getElementById("Slot31").innerText = daySlots[30];
document.getElementById("Slot32").innerText = daySlots[31];
document.getElementById("Slot33").innerText = daySlots[32];
document.getElementById("Slot34").innerText = daySlots[33];
document.getElementById("Slot35").innerText = daySlots[34];
document.getElementById("Slot36").innerText = daySlots[35];
document.getElementById("Slot37").innerText = daySlots[36];
document.getElementById("Slot38").innerText = daySlots[37];
document.getElementById("Slot39").innerText = daySlots[38];

}






function findDayOfWeek(d, m, y) {
    t = [0,3,2,5,0,3,5,1,4,6,2,4];
    y -= m < 3;
    return (y + y/4 - y/100 + y/400 + t[m-1] +d) % 7;
}