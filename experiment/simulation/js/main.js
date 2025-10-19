function restartexp() {
    window.location.reload();
}

function showselectedplant() {
    document.getElementById("plantcss").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").setAttribute("onclick", "showexpmotive()");
}

function showexpmotive() {
    document.getElementById("expmotive").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").setAttribute("onclick", "selecthetrelogousexp()");
    
}

function selecthetrelogousexp() {
    document.getElementById("dna").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").setAttribute("onclick", "selectexpgene()");
    
}

function selectexpgene() {
    document.getElementById("plasmid").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").setAttribute("onclick", "selectligatetarget()");
    
}

function selectligatetarget() {
    document.getElementById("plasmidred").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").setAttribute("onclick", "generun()");
    
}

function generun() {
    document.getElementById("plantcallus").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").setAttribute("onclick", "newplant()");
    
}

function newplant() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("newplant").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").setAttribute("onclick", "btn8click()");
}

function btn8click() {
    document.getElementById("twogenomicdna").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn9").disabled = false;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").setAttribute("onclick", "btn9click()");
}

function btn9click() {
    
    document.getElementById("agarosegel").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn10").disabled = false;
    document.getElementById("btn9").disabled = true;
    document.getElementById("btn10").setAttribute("onclick", "btn10click()");
}

function btn10click() {
document.getElementById("card2").style.display = "none";
    document.getElementById("plantsoil").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn11").disabled = false;
    document.getElementById("btn10").disabled = true;
    document.getElementById("btn11").setAttribute("onclick", "btn11click()");
}

function btn11click() {
    
    document.getElementById("biopolymers").style.display = "block";
    window.scrollBy(0, 1500);
    document.getElementById("btn12").disabled = false;
    document.getElementById("btn11").disabled = true;
    document.getElementById("btn12").setAttribute("onclick", "btn12click()");
}

function btn12click() {
    
    document.getElementById("gcmcinstrument").style.display = "block";
    window.scrollBy(0, 1500);
    
    document.getElementById("btn12").disabled = true;
   
}
