"use strict";
var normalize = require("./");

var expect = require("chai").expect;



it("should work", function()
{
	expect( normalize("\n\r\t asdf   \n  \t  asdf") ).to.equal(" asdf asdf");
	
	expect( normalize(" \u00a0 \ufeff \u200b asdf") ).to.equal(" \u00a0 \ufeff \u200b asdf");
});
