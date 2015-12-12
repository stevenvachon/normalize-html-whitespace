"use strict";
var normalize = require("./");

var expect = require("chai").expect;



it("should work", function()
{
	expect( normalize("\n\r\t asdf   \n  \t  asdf") ).to.equal(" asdf asdf");
	
	expect( normalize(" \xA0 \uFEFF \u200B asdf") ).to.equal(" \xA0 \uFEFF \u200B asdf");
});
