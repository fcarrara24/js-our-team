"use strict"



//array containeing all registered users
const employee = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manafewr",
        picture: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg",
    },


];

//milestone 2: printing to console
printToConsole();
function printToConsole() {
    //array selection
    for (let employer of employee) {
        console.group(employer.name)


        for (let key in employer) {
            console.log(key + ": " + employer[key])
        }
        console.groupEnd(employer.name)
    }
}