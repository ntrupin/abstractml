/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
/* --------------------- START ----------------------------- */
var LinescriptHighlightRules = function() {
this.$rules = {
"start" : [
   {
      "token" : "comment",
      "regex" : "(// ->)",
      "push" : "main__1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(->)"
   },
   {
      "token" : "variable.language",
      "regex" : "(?<=^)(.*?)(?=->)"
   },
   {
      "token" : "variable.language",
      "regex" : "(?<=^)(.*?)(?=$)"
   },
   {
      "token" : "support.variable",
      "regex" : "(?<=->)(.*?)(?=->)"
   },
   {
      defaultToken : "text",
   }
], 
"main__1" : [
   {
      "token" : "comment",
      "regex" : "($)",
      "next" : "pop"
   },
   {
      defaultToken : "comment",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */
oop.inherits(LinescriptHighlightRules, TextHighlightRules);
exports.LinescriptHighlightRules = LinescriptHighlightRules;
});
