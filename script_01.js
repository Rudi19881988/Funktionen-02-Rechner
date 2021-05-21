
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

// Modul: Division a / b | Test
ausgabe(dividieren(1,2));
function dividieren(a,b) {
    return a / b;
}

// Modul: Multiplikation a * b | Test
//ausgabe(multiplikation(1,2));
function multiplikation(a,b) {
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