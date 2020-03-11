"use strict"

let date_pick_element = document.querySelector(".date-picker");
let selected_date_element = document.querySelector(".selected-date");
let selected_date = document.querySelector(".selected-date span")
let date_element = document.querySelector(".dates");
let prev_mth_element = document.querySelector(".prev-mth");
let mth_element = document.querySelector(".mth");
let next_mth_element = document.querySelector(".next-mth");
let days_element = document.querySelector(".days");
const months = ["Январь", "Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Откябрь","Ноябрь","Декабрь",];

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

RednderDate();

// Текущая дата
selected_date.textContent = formatDate(date);

// Месяц + Год
mth_element.textContent = months[month] + " " + year;

// Обработчики
date_pick_element.addEventListener("click", OpenDatePicker);
next_mth_element.addEventListener("click", GoToNextMonth);
prev_mth_element.addEventListener("click", GoToPrevMonth);

//Render date
function RednderDate () {

    let amount_day;
    let counter = 0;  

    if(months[month] == "Январь")
        amount_day = 31;
    else if(months[month] == "Февраль")
        if(year % 4 != 0 || year % 100 == 0 && year % 400 != 0){
            amount_day = 28;
        }
        else
            amount_day = 29;
    else if(months[month] == "Март")
        amount_day = 31;
    else if(months[month] == "Апрель")
        amount_day = 30;
    else if(months[month] == "Май")
        amount_day = 31;
    else if(months[month] == "Июнь")
        amount_day = 30;
    else if(months[month] == "Июль")
        amount_day = 31;
    else if(months[month] == "Август")
        amount_day = 31;
    else if(months[month] == "Сентябрь")
        amount_day = 30;
    else if(months[month] == "Откябрь")
        amount_day = 31;
    else if(months[month] == "Ноябрь")
        amount_day = 30;
    else if(months[month] == "Декабрь")
        amount_day = 31;
    else
        amount_day = 20;

    for (let i = 0; i < amount_day; i++){ 
        let day_element = document.createElement("div");
        counter++;
        if (date.getDate() == counter && month == date.getMonth()) {
            day_element.classList.add("number");
            day_element.classList.add("today");
        }
        else
            day_element.classList.add("number");
            
        day_element.textContent = i + 1;

        days_element.appendChild(day_element);
    }
}

function Clearing () {
    days_element.innerHTML = "";
}


// Dropdown
function OpenDatePicker (event) {
   if(event.target.closest(".selected-date"))
        date_element.classList.toggle("active");
}

// Формирование текущей даты
function formatDate (d) {
    let day = d.getDate();
    if(day < 10){
        day = "0" + day;
    }
    let month = d.getMonth() + 1;
    if(month < 10){
        month = "0" + month;
    }
    let year = d.getFullYear();

    return day + "." + month + "." + year;
}

// Next month
function GoToNextMonth (){
    month++;
    if(month > 11){
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + " " + year;

    Clearing ();
    RednderDate ();
} 

// Prev month
function GoToPrevMonth (){
    month--;
    if(month < 0){
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + " " + year;

    Clearing ();
    RednderDate ();
}