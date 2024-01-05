document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here
    // It will be executed once the HTML document is fully loaded and ready
    console.log("HTML document is ready!");

    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult()
    {
        const convertedValue = currentValue
        .replace('%','*0.01');
        const result = eval(convertedValue) //new use eval in production environment as it just evaluates any value present in the code.
        currentValue = result.toString();
        display.value = currentValue;
    }
    
    for(let i=0;i<buttons.length;i++)
    {
        const button = buttons[i];
        button.addEventListener('click',function(){
            const value = button.innerText;

            if(value == "AC")
            {
                currentValue = "";
                display.value = currentValue;
            }
            else if(value == "=")
            {
                evaluateResult();
            }
            else
            {
                currentValue += value;
                display.value = currentValue;
            }

        })
    }
});