$(document).ready(function()
{
	$("#confusion").show();
	$("#request").hide();
	$("#check").hide();
	$("#confirm").hide();
	$("#misc").hide();
});

$("#tabconfusion").click(function()
{
	$("#confusion").show();
	$("#request").hide();
	$("#check").hide();
	$("#confirm").hide();
	$("#misc").hide();
})

$("#tabrequest").click(function()
{
	$("#confusion").hide();
	$("#request").show();
	$("#check").hide();
	$("#confirm").hide();
	$("#misc").hide();
})

$("#tabcheck").click(function()
{
	$("#confusion").hide();
	$("#request").hide();
	$("#check").show();
	$("#confirm").hide();
	$("#misc").hide();
})

$("#tabconfirm").click(function()
{
	$("#confusion").hide();
	$("#request").hide();
	$("#check").hide();
	$("#confirm").show();
	$("#misc").hide();
})

$("#tabmisc").click(function()
{
	$("#confusion").hide();
	$("#request").hide();
	$("#check").hide();
	$("#confirm").hide();
	$("#misc").show();
})