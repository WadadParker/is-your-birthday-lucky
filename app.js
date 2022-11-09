var birthday = document.querySelector("#birthday");
var luckyNumber = document.querySelector("#lucky-number");
var button = document.querySelector("#button");
var displayText= document.querySelector("#display-text");
var smallText= document.querySelector("#small-display-text");


button.addEventListener("click", function checkBirthday(){
    if(luckyNumber.value>=1)
    {
        convertBirthday(birthday.value.replaceAll("-",""));
       
    }
    else {
        displayMessage("Please enter valid number");
        
    }
})


function convertBirthday(bday)
{
    
    var sum=0;
    for(let index in bday)
    {
        sum= sum + Number(bday.charAt(index));
    }
    checkLuck(sum);
}

function checkLuck(bday)
{
    
    if(bday%luckyNumber.value===0)
    {
        displayMessage("Your birthday is Lucky!");
        smallText.innerText="But I don't believe in luck ^_^";
    }
    else {
        displayMessage("Your birthday is not lucky!");
        smallText.innerText="which only means that the sum of digits of your birthdate is not divisble by the lucky number";
    }
}

function displayMessage(message)
{
    displayText.innerText=message;
}