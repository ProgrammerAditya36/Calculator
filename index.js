var show = " ";
var sval = "";
var screen = document.getElementById("num");
var used=[];
function final(buttonText){
    console.log(buttonText);
     show += buttonText;
     
    screen.value = show;
    if (buttonText == "x"||buttonText=="X") {
        sval += "*";
    } else if (buttonText == "÷") {
        sval += "/";
    } else if (buttonText.toLowerCase() == "c") {
        sval = "";
        show = "";
        screen.value = "";
    }
    else if (buttonText == "sin") {
        sval += "Math.sin(";
    }else if (buttonText == "cos") {
        sval += "Math.cos(";
    }else if (buttonText == "tan") {
        sval += "Math.tan(";
    }else if (buttonText == "cosec") {
        sval += "1/Math.sin(";
    }else if (buttonText == "sec") {
        sval += "1/Math.cos(";
    }else if (buttonText == "cot") {
        sval += "1/Math.tan(";
    }else if (buttonText == "rad") {
        sval += ")";
    } else if (buttonText == "°") {
    }else if (buttonText == "root") {
        sval += "Math.root("+buttonText+")";
    } else if (buttonText == "°") {
        sval += "*Math.PI/180)";
    }  else if (buttonText.toLowerCase() == "backspace") {
        sval =sval.slice(0,sval.length-1);
        show =show.slice(0,show.length-1-buttonText.length);
        console.log(show,sval);
        screen.value=show;
    } else if (buttonText == "="||buttonText=="Enter") {
        show =show.slice(0,show.length-buttonText.length);
        var total =eval(sval);
        screen.value = total.toFixed(5);
    }
    else {
        sval += buttonText;
    }
}

$(document).keydown(function (e) { 
    
    var click=e.originalEvent.key;
    final(click);
    console.log();      
});
console.log(screen);

$(".button").click(function (e) {
    e.preventDefault();
    var buttonText = e.target.innerText; 
    final(buttonText); 
});
