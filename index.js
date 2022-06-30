const themeToggles = document.querySelectorAll('.theme-toggle');
const indicator = document.querySelector('.indicator');
console.log(themeToggles);
console.log(indicator);

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
            indicator.style.transform = `translateX(-2.3rem)`;
            break;

        case themeToggles[1]:
            console.log("Clicked Second Theme");
            indicator.style.transform = `translateX(0rem)`;
            break;

        case themeToggles[2]:
            console.log("Clicked Third Theme");
            indicator.style.transform = `translateX(2.3rem)`;
            break;
    }
}