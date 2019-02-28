$("#keyPad button").click(function() {
	$("#distanceInput").val($("#distanceInput").val() + this.innerText);
});

$("#delete").click(function() {
	$("#distanceInput").val("");
});

$(document).keydown(function (e) {
    if (e.keyCode == 49) {
        $("#distanceInput").val($("#distanceInput").val() + 1);
    }
    if (e.keyCode == 50) {
        $("#distanceInput").val($("#distanceInput").val() + 2);
    }
    if (e.keyCode == 51) {
        $("#distanceInput").val($("#distanceInput").val() + 3);
    }
    if (e.keyCode == 52) {
        $("#distanceInput").val($("#distanceInput").val() + 4);
    }
    if (e.keyCode == 53) {
        $("#distanceInput").val($("#distanceInput").val() + 5);
    }
    if (e.keyCode == 54) {
        $("#distanceInput").val($("#distanceInput").val() + 6);
    }
    if (e.keyCode == 55) {
        $("#distanceInput").val($("#distanceInput").val() + 7);
    }
    if (e.keyCode == 56) {
        $("#distanceInput").val($("#distanceInput").val() + 8);
    }
    if (e.keyCode == 57) {
        $("#distanceInput").val($("#distanceInput").val() + 9);
    }
    if (e.keyCode == 48) {
        $("#distanceInput").val($("#distanceInput").val() + 0);
    }
    if (e.keyCode == 190) {
        $("#distanceInput").val($("#distanceInput").val() + ".");
    }
    if (e.keyCode == 13) {
        $("#distanceInput").val("");
    }
});

function unitConversion(x)
{
	("#distanceOutput").val(x/0.62137);
	//document.getElementById("distanceOutput").innerHTML=x/0.62137
}