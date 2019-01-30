$(document).ready(function()
{
	$("#contentDialer").show();
	$("#contentList").hide();
	$("#contentAdd").hide();
});


$("#tabOne").click(function()
{
	$("#contentDialer").show();
	$("#contentList").hide();
	$("#contentAdd").hide();
});

$("#tabTwo").click(function()
{
	$("#contentDialer").hide();
	$("#contentList").show();
	$("#contentAdd").hide();
});

$("#tabThree").click(function()
{
	$("#contentDialer").hide();
	$("#contentList").hide();
	$("#contentAdd").show();
});

