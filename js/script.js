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

//milestone 2; printing the list on the screen 

/*

*/

printToScreen();
function printToScreen() {
    let outHtml = ``;
    for (let employer of employee) {
        outHtml += `<div class="col-4  border-0 pb-4">
        <div class="innerCard">
            <img class="w-100" src="img/${employer.picture}" alt="wayne">
                <div class="cardContent py-3">
                    <h4 class="cardName text-capitalize text-center">${employer.name}</h4>
                    <h5 class="cardRole text-capitalize text-center">${employer.role}</h5>
                </div>
        </div>
        </div>`;
    }

    document.getElementById('printResult').innerHTML = outHtml;
}


const sendBtn = document.getElementById('send');
//add a triggering method
sendBtn.addEventListener('click', () => {
    const valueList = document.getElementsByClassName('input');
    employee.push({
        name: valueList[0].value,
        role: valueList[1].value,
        picture: valueList[2].value,
    });
    printToConsole();
    printToScreen();
    reset(valueList);
})

function reset(valueList) {

    for (let i = 0; i < valueList.length; i++) {
        valueList[i].value = '';
    }
}