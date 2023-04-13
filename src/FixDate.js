import React from "react";      

export default function FixDate({date}){
    let day = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()].toUpperCase();
let year = date.getFullYear();    
 return `${day} ${month}, ${year}`
}