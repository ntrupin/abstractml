function parse() {
 text = document.getElementById("nmd-in").innerHTML
 output  = text
  .replace(new RegExp("italics/", "g"), "<i>")
  .replace(new RegExp("/italics", "g"), "</i>")
  .replace(new RegExp("bold/", "g"), "<strong>")
  .replace(new RegExp("/bold", "g"), "</strong>")
  .replace(new RegExp("underline/", "g"), "<u>")
  .replace(new RegExp("/underline", "g"), "</u>")
  .replace(new RegExp("hyperlink/", "g"), "<a href='")
  .replace(new RegExp("/hyperlink", "g"), "</a>")
  .replace(new RegExp("colored/", "g"), "<p style='display:inline;color:")
  .replace(new RegExp("/colored", "g"), "</p>")
  .replace(new RegExp(" /linebreak/ ", "g"), "<br>")
  .replace(new RegExp("-", "g"), "'>")
  .replace(new RegExp("/randomnumber/", "g"), Math.floor(Math.random() * 1000000001).toString())
  .replace(new RegExp("•image/", "g"), "<img src='")
  .replace(new RegExp("/width/", "g"), "' width='")
  .replace(new RegExp("/height/", "g"), "' height='")
  .replace(new RegExp("/image", "g"), "' />")
  .replace(new RegExp("header/", "g"), "<h1>")
  .replace(new RegExp("/header", "g"), "</h1>")
  .replace(new RegExp("cursive/", "g"), "<p style='display:inline;font-family:cursive'>")
  .replace(new RegExp("/cursive", "g"), "</p>")
  .replace(new RegExp("header2/", "g"), "<h2>")
  .replace(new RegExp("/header2", "g"), "</h2>")
  .replace(new RegExp("header3/", "g"), "<h3>")
  .replace(new RegExp("/header3", "g"), "</h3>")
 
 document.getElementById("nmd-out").innerHTML = t3x6
 console.log(t3x6)
}
