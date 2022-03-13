$(document).ready(function () {
    console.log("script loaded");
    var inputText; //textbox ın değerini okuyup kullanmak için aldık


    $("#bSetText").click(function () {
        inputText = $("#tbInput1").val(); //textbox, dropdownlist, listbox val ile okunur
        $("#sOutput1").text(inputText); //span, label, p text ile okunur        
    });
    $("#bSetHtml").click(function () {
        inputText = $("#tbInput1").val();
        $("#sOutput2").html('<label style="color:purple;font-size:24px;"><b>' + inputText + '</b></label>');
    });

    $("#bSetValue").click(function () {
        inputText = $("#tbInput1").val();
        $("#tbOutput1").val(inputText);
    })

});