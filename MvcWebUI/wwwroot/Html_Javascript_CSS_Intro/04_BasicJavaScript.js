function ucgenDoldur(tersten = false) {
    var sonuc;
    var sonucArray = new Array();
    //var sonucArray = [];
    for (var i = 0; i < 5; i++) {
        sonuc = "";
        for (var j = 0; j <= i; j++) {
            sonuc += "*";
        }
        sonucArray[i] = sonuc;
    }
    sonuc = "";
    if (!tersten) {
        for (var i = 0; i < sonucArray.length; i++) {
            sonuc += sonucArray[i] + "\n";
        }
    }
    else {
        for (var i = sonucArray.length - 1; i >= 0; i--) {
            sonuc += sonucArray[i] + "\n";
        }
    }
    //console.log(sonuc);
    return sonuc;
}
function onLoadIleDoldur() {
    var myTextArea = document.getElementById("mytextareaid");
    myTextArea.value = ucgenDoldur();
}
var terstenGlobal = true;

function onClickIleDoldur() {
    var myTextArea = document.getElementById("mytextareaid");   
    myTextArea.value = ucgenDoldur(terstenGlobal);
    terstenGlobal = !terstenGlobal;
}