const body = document.querySelectorAll('body');
const headSection = document.querySelectorAll('.head-section');
const toggleThemeSwitch = document.querySelectorAll('.toggle-theme-switch');
const themeToggles = document.querySelectorAll('.theme-toggle');
const indicator = document.querySelectorAll('.indicator');
const displaySection = document.querySelectorAll('.display-section');
const keypadSection = document.querySelectorAll('.keypad-section');
const keypadButtons = document.querySelectorAll('.keypad-btn');
const attribution = document.querySelectorAll('.attribution');
const displayText = document.querySelector('.display-text');

var themeState = "theme-one";
var screenText = "";
var action = "";
var numbers = [];
var result = 0;
var pointOnce = true;

ChangeAllElementsThemeState(themeState);

themeToggles.forEach(themeToggle => {
    themeToggle.addEventListener('click', ()=>{
        CheckToggleState(themeToggle);
    });
});

keypadButtons.forEach(keypadButton => {
    keypadButton.addEventListener('click',()=>{
        //Call keypad function
        KeypadFunction(keypadButton);
    })
});

function KeypadFunction(keypad)
{
    var list = keypad.classList;
    if(list.contains("delete-btn")){
        screenText = screenText.slice(0, -1);
        displayText.textContent = screenText;
    }
    else if(list.contains("point-btn"))
    {
        if(pointOnce && screenText.length > 0){
            UpdateDisplayText(keypad.textContent);
            pointOnce = false;
        }
    }
    else if(list.contains("add-btn"))
    {
        action = "add";
        pointOnce = true;
        if(screenText.includes("/") || screenText.includes("-") || screenText.includes("x"))
        {
            ClearDisplayText();
        }
        else if(screenText[screenText.length-1] != "+" && screenText.length > 0)
        {
            UpdateDisplayText(keypad.textContent);
        }
    }
    else if(list.contains("sub-btn"))
    {
        action = "sub";
        pointOnce = true;
        if( screenText.includes("/") || screenText.includes("+") || screenText.includes("x"))
        {
            ClearDisplayText();
        }
        else if(screenText[screenText.length-1] != "-"&& screenText.length > 0)
        {
            UpdateDisplayText(keypad.textContent);
        }
    }
    else if(list.contains("div-btn"))
    {
        action = "div";
        pointOnce = true;
        if( screenText.includes("-") || screenText.includes("+") || screenText.includes("x"))
        {
            ClearDisplayText();
        }
        else if(screenText[screenText.length-1] != "/"&& screenText.length > 0)
        {
            UpdateDisplayText(keypad.textContent);
        }
    }
    else if(list.contains("mult-btn"))
    {
        action = "mult";
        pointOnce = true;
        if( screenText.includes("/") || screenText.includes("+") || screenText.includes("-"))
        {
            ClearDisplayText();
        }
        else if(screenText[screenText.length-1] != "x"&& screenText.length > 0)
        {
            UpdateDisplayText(keypad.textContent);
        }
    }
    else if(list.contains("reset-btn"))
    {
        ClearDisplayText();
        pointOnce = true;
        action = "";
    }
    else if(list.contains("equal-btn")){
        if(screenText.includes("+") || screenText.includes("-") || screenText.includes("x") || screenText.includes("/"))
        {
            switch(action)
            {
                case "add":
                    numbers = screenText.split("+");
                    numbers.forEach(number => {
                        result+=Number(number);
                    });
                    //console.log(numbers);
                    break;
                case "sub":
                    numbers = screenText.split("-");
                    console.log(numbers);
                    numbers.forEach(number => {
                        if(result == 0)
                        {
                            result=Number(number);
                        }
                        else{
                            result-=Number(number);
                        }
                    });
                    //console.log(numbers);
                    break;
                case "div":
                    numbers = screenText.split("/");
                    console.log(numbers);
                    numbers.forEach(number => {
                        if(result == 0)
                        {
                            result=Number(number);
                        }
                        else{
                            result/=Number(number);
                        }
                    });
                    //console.log(numbers);
                    break;
                case "mult":
                    numbers = screenText.split("x");
                    numbers.forEach(number => {
                        if(result == 0)
                        {
                            result=Number(number);
                        }
                        else{
                            result*=Number(number);
                        }
                    });
                    //console.log(numbers);
                    break;
            }
            
            result.toFixed(2);
            //console.log(result);
            SetDisplayText(result);
            screenText = result;
            numbers = [];
            //result = 0;
        }
       
    }
    else{
        UpdateDisplayText(keypad.textContent);
    }
}

function ClearDisplayText(){
    screenText = "";
    displayText.textContent = screenText;
}

function SetDisplayText(text){
    screenText = text;
    displayText.textContent = screenText;
}

function UpdateDisplayText(text){
    if(result>0)
    {
        ClearDisplayText();
        result = 0;
    }
    if(screenText.length<12){
        screenText += text;
        displayText.textContent = screenText;
    }
}

function CheckToggleState(toggleState){
    switch(toggleState)
    {
        case themeToggles[0]:
            //console.log("Clicked First Theme");
            indicator[0].style.transform = `translateX(-2rem)`;
            themeState = "theme-one";
            ChangeAllElementsThemeState(themeState);
            break;

        case themeToggles[1]:
            //console.log("Clicked Second Theme");
            indicator[0].style.transform = `translateX(0rem)`;
            themeState = "theme-two";
            ChangeAllElementsThemeState(themeState);
            break;

        case themeToggles[2]:
            //console.log("Clicked Third Theme");
            indicator[0].style.transform = `translateX(2rem)`;
            themeState = "theme-three";
            ChangeAllElementsThemeState(themeState);
            break;
    }
}

function ChangeElementTheme(themeState, elements)
{
    elements.forEach( element => {
        const list = element.classList;
        //console.log(list);
        list.remove("theme-one");
        list.remove("theme-two");
        list.remove("theme-three");
        list.add(themeState);
    });
}

function ChangeAllElementsThemeState(themeState)
{
    ChangeElementTheme(themeState, body);
    ChangeElementTheme(themeState, headSection);
    ChangeElementTheme(themeState, toggleThemeSwitch);
    ChangeElementTheme(themeState, indicator);
    ChangeElementTheme(themeState, displaySection);
    ChangeElementTheme(themeState, keypadSection);
    ChangeElementTheme(themeState, keypadButtons);
    ChangeElementTheme(themeState, attribution);
}

