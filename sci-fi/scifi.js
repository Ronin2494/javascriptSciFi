let trig = 0;

function checkNum(str) {

    return true
}

function addChar(input, character) {
    if (input.value === null || input.value === "0")
        input.value = character
    else
        input.value += character
}

function backspace(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

function equal(form) {
//    let evalString = "";
    if (trig == 0) {
        form.display.value = form.display.value.replace('sin', 'Math.sin');
        //        form.display.value = eval(evalString);
    } else if (trig == 1) {
        form.display.value = form.display.value.replace('cos', 'Math.cos');
        //        form.display.value = eval(evalString);
    } else if (trig == 2) {
        form.display.value = form.display.value.replace('tan', 'Math.tan');
        //        form.display.value = eval(evalString);
    }
    form.display.value = eval(form.display.value);
}

function sin(form) {
    //    form.display.value= Math.sin(form.display.value);
    form.display.value = 'sin(' + form.display.value + ')';
    trig = 0;
    //    form.hidden.value = Math.sin(form.hidden.value);
}

function cos(form) {
    //    form.display.value = Math.cos(form.display.value);
    form.display.value = 'cos(' + form.display.value + ')';
    trig = 1;
}

function tan(form) {
    form.display.value = Math.tan(form.display.value);
    trig = 2;
}

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
    form.display.value = Math.log(form.display.value);
}

function exp(form) {
    form.display.value = Math.exp(form.display.value);
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value);
}

function percent(form) {
    form.display.value = math.floor(form.display.value);
}
