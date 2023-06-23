



function validateEmail() {
    const inputElement = document.getElementById("email-input");
    const inputTooltip = document.getElementById("email-error");


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputElement.value)){
        inputElement.classList.remove("email-error-state");
        inputTooltip.classList.remove("is-visible");
        showDiv(inputElement.value);
        inputElement.value = "";
    }else{
        inputElement.classList.add("email-error-state");
        inputTooltip.classList.add("is-visible");
    }
}

function showDiv(inputValue) {
    var x = document.getElementById("success");
    let y = document.getElementsByClassName("container");
    var mailDisplay = document.getElementById("emailTo");
    var button = document.getElementById("button-confirm");

    if (x.classList.contains("is-visible")) {
        x.classList.remove("is-visible");
        y[0].style.filter = "none";
        button.disabled = false;
        button.classList.add("hover");

    } else {
        x.classList.add("is-visible");
        y[0].style.filter = "blur(4px) brightness(0.5)";
        mailDisplay.innerHTML = inputValue;
        button.disabled = true;
        button.classList.remove("hover");
    }    
}
