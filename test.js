"use strict";
const {expect} = require("chai");
const normalize = require("./");



it("works", () =>
{
	expect( normalize("\n\r\t asdf   \n  \t  asdf") ).to.equal(" asdf asdf");

	expect( normalize(" \u00a0 \ufeff \u200b asdf") ).to.equal(" \u00a0 \ufeff \u200b asdf");
});
