
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check!
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

// Modul: Dateneingabe + -überprüfung
ausgabe(rechner(getOp(),1,2));

// Modul: Operand eingabe | Test
//ausgabe(getOp());
function getOp() {
    let op = prompt("Bitte +|-|*|/ eingeben")
    return op ;
}





// Modul: Rechenart auswählen | Test
// ausgabe(rechner("+",1,2));
// ausgabe(rechner("-",1,2));
// ausgabe(rechner("*",1,2));
// ausgabe(rechner("/",1,2));
// ausgabe(rechner("/",1,0));
// ausgabe(rechner("#?!",1,2));
function rechner(op,a,b) {
    switch (op) {
        case "+":
        return addieren(a,b);

        case "-":
        return subtrahieren(a,b);

        case "*":
        return multiplizieren(a,b);

        case "/":
        return dividieren(a,b);
    default:
        return "Irgendwas ging schief"
    }


    return addieren(a,b);
    //return subtrahieren(a,b); 
    //return multiplizieren(a,b);
    //return dividieren(a,b);
}


// Modul: Division a / b | Test
/******** Beispiel 1 *******/
// ausgabe(dividieren(1,2));
// ausgabe(dividieren(0,2));
// ausgabe(dividieren(1,0));
function dividieren(a,b) {
    if (b==0) {    //wenn b = 0 - dann Fehlermeldung
      return "Dividieren durch 0 nicht möglich!";
    }
        else {
            return a / b;
        }   
}

/******* Beispiel 2 ********/
// ausgabe(dividieren(1,2));
// ausgabe(dividieren(0,2));
// ausgabe(dividieren(1,0));
function dividieren(a,b) {
    if (b!=0) 
    {
        return a/b;
    }    
    return "Dividieren durch 0 nicht möglich!";
}

// Modul: Multiplikation a * b | Test
//ausgabe(multiplizieren(1,2));
function multiplizieren(a,b) {
    return a * b;
}

// Modul: Subtraktion a - b | Test
//ausgabe(subtrahieren(1,2));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b | Test
//ausgabe(addieren(1,2));
function addieren(a,b) {
    return a + b;
}

// Modul: Konsolenausgabe | Test:
//ausgabe("Hallo Welt");
function ausgabe(outputStr) {
    console.log(outputStr);
}