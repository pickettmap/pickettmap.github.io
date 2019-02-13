$(document).ready(function()
{
	$("#contentDialer").show();
	$("#contentList").hide();
	$("#contentAdd").hide();
	$("#helpTab").hide();
});


$("#tabOne").click(function()
{
	$("#contentDialer").show();
	$("#contentList").hide();
	$("#contentAdd").hide();
	$("#helpTab").hide();
});

$("#tabTwo").click(function()
{
	$("#contentDialer").hide();
	$("#contentList").show();
	$("#contentAdd").hide();
	$("#helpTab").hide();
});

$("#tabThree").click(function()
{
	$("#contentDialer").hide();
	$("#contentList").hide();
	$("#contentAdd").show();
	$("#helpTab").hide();
});

$("#tabFour").click(function()
{
	$("#contentDialer").hide();
	$("#contentList").hide();
	$("#contentAdd").hide();
	$("#helpTab").show();
});


$("#keyPad button").click(function() {
	$("#numDisplay").val($("#numDisplay").val() + this.innerText);
})

$("#dialClear").click(function() {
	$("#numDisplay").val("");
})