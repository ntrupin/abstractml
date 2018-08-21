function parse() {
 text = document.getElementById("nmd-in").innerHTML
 output = text
  .replace(new RegExp("it/", "g"), "<i>")
  .replace(new RegExp("/it", "g"), "</i>")
  .replace(new RegExp("bo/", "g"), "<strong>")
  .replace(new RegExp("/bo", "g"), "</strong>")
  .replace(new RegExp("ul/", "g"), "<u>")
  .replace(new RegExp("/ul", "g"), "</u>")
  .replace(new RegExp("hl/", "g"), "<a href='")
  .replace(new RegExp("/hl", "g"), "</a>")
  .replace(new RegExp("col/", "g"), "<p style='display:inline;color:")
  .replace(new RegExp("/col", "g"), "</p>")
  .replace(new RegExp(" /v/ ", "g"), "<br>")
  .replace(new RegExp("-", "g"), "'>")
  .replace(new RegExp("/r/", "g"), Math.floor(Math.random() * 1000000001).toString())
  .replace(new RegExp("img/", "g"), "<img src='")
  .replace(new RegExp("/w/", "g"), "' width='")
  .replace(new RegExp("/h/", "g"), "' height='")
  .replace(new RegExp("/img", "g"), "' />")
  .replace(new RegExp("1/", "g"), "<h1>")
  .replace(new RegExp("/1", "g"), "</h1>")
  .replace(new RegExp("cr/", "g"), "<p style='display:inline;font-family:cursive'>")
  .replace(new RegExp("/cr", "g"), "</p>")
  .replace(new RegExp("2/", "g"), "<h2>")
  .replace(new RegExp("/2", "g"), "</h2>")
  .replace(new RegExp("3/", "g"), "<h3>")
  .replace(new RegExp("/3", "g"), "</h3>")
 
 document.getElementById("nmd-out").innerHTML = output
 console.log(output)
}
