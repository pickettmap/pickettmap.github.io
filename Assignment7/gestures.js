$("#gestureArea").mousedown(function()
{
	$("#gestureResult").text("mouse down")
});

downX = 0
downY = 0

$("#gestureArea").mousedown(function(e)
{
	downX = e.pageX
	downY = e.pageY
});

$("#gestureArea").mouseup(function(e)
{
	upX = e.pageX
	upY = e.pageY

	if(upX < downX)
	{
		$("#gestureResult").text("swipe left")
	}

	else if (upX > downX)
	{
		$("#gestureResult").text("swipe right")
	}

	else if (upX == downX)
	{
		$("#gestureResult").text("mouse up")
	}
});