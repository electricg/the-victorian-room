
function popWin1( url, name, width, height, scroller ) {
	var outStr = 'height=' +height + ',width=' + width;
	if (scroller != 'true') {
		outStr = outStr + 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no';
	}
	else {
		outStr = outStr + 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no';
	}
	window.open(url, name, outStr);
}

