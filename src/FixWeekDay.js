import React from "react";

export default function FixWeekDay({day}){

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let tomorrow = days[day.getDay()];
    return `${tomorrow}`
}