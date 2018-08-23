## Creating Your First Library

Creating a markup library is actually quite simple! The included example covers the most basic markup parser, parsing italics and bold.

```javascript

// your_library.md

function parse() {
 text = document.getElementById("nmd-in").innerHTML;
 output = text
  .replace(new RegExp("(i)", "g"), "<i>")
  .replace(new RegExp("(/i)", "g"), "</i>")
  .replace(new RegExp("(b)", "g"), "<b>")
  .replace(new RegExp("(/b)", "g"), "</b>");
 document.getElementById("nmd-out").innerHTML = output;
}

```

The parse function is the base of the module. It encompasses the entire parsing process.

First, you get the text from "nmd-in". That is the text to be parsed.

Next, you run replace sequences to find the markup text and change it to html. The RegExp function ensures that the replace is run globally, rather than only replacing the first instance of the characters.

Lastly, you output the parser text to "nmd-out".

Cheers! You've completed your first module.
