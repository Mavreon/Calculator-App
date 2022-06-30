const body = document.querySelectorAll('body');
const headSection = document.querySelectorAll('.head-section');
const toggleThemeSwitch = document.querySelectorAll('.toggle-theme-switch');
const themeToggles = document.querySelectorAll('.theme-toggle');
const indicator = document.querySelectorAll('.indicator');
const displaySection = document.querySelectorAll('.display-section');
const keypadSection = document.querySelectorAll('.keypad-section');
const keypadButtons = document.querySelectorAll('.keypad-btn');
// console.log(themeToggles);
// console.log(indicator);
// console.log(keypadButtons);
console.log(body);
let themeState = "theme-one";


ChangeAllTheme(themeState);

themeToggles.forEach(themeToggle => {
    themeToggle.addEventListener('click', ()=>{
        CheckToggleState(themeToggle);
    });
});

function CheckToggleState(toggleState){
    switch(toggleState)
    {
        case themeToggles[0]:
            console.log("Clicked First Theme");
            indicator[0].style.transform = `translateX(-2rem)`;
            themeState = "theme-one";
            ChangeAllTheme(themeState);
            break;

        case themeToggles[1]:
            console.log("Clicked Second Theme");
            indicator[0].style.transform = `translateX(0rem)`;
            themeState = "theme-two";
            ChangeAllTheme(themeState);
            break;

        case themeToggles[2]:
            console.log("Clicked Third Theme");
            indicator[0].style.transform = `translateX(2rem)`;
            themeState = "theme-three";
            ChangeAllTheme(themeState);
            break;
    }
}

function ChangeTheme(themeState, elements)
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

function ChangeAllTheme(themeState)
{
    ChangeTheme(themeState, body);
    ChangeTheme(themeState, headSection);
    ChangeTheme(themeState, toggleThemeSwitch);
    ChangeTheme(themeState, indicator);
    ChangeTheme(themeState, displaySection);
    ChangeTheme(themeState, keypadSection);
    ChangeTheme(themeState, keypadButtons);
}

