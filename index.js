"use strict";



function normalize(str)
{
	return str.replace(/[\f\n\r\t\v ]{2,}/g, " ");
}



module.exports = normalize;
