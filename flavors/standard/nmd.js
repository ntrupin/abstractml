function parse() {
 text = document.getElementById("nmd-in").innerHTML
 output = text
 .replace(new RegExp("}/", "g"), "<i>")
 .replace(new RegExp("/{", "g"), "</i>")
 .replace(new RegExp("::/", "g"), "<strong>")
 .replace(new RegExp("/::", "g"), "</strong>")
 .replace(new RegExp("_/", "g"), "<u>")
 .replace(new RegExp("/_", "g"), "</u>")
 .replace(new RegExp("@/", "g"), "<a href='")
 .replace(new RegExp("/@", "g"), "</a>")
 .replace(new RegExp("'/", "g"), "<p style='display:inline;color:")
 .replace(new RegExp("/'", "g"), "</p>")
 .replace(new RegExp(" /v/ ", "g"), "<br>")
 .replace(new RegExp("-", "g"), "'>")
 .replace(new RegExp("/!?/", "g"), Math.floor(Math.random() * 1000000001).toString())
 .replace(new RegExp("•/", "g"), "<img src='")
 .replace(new RegExp("/w/", "g"), "' width='")
 .replace(new RegExp("/h/", "g"), "' height='")
 .replace(new RegExp("/•", "g"), "' />")
 .replace(new RegExp("1/", "g"), "<h1>")
 .replace(new RegExp("/1", "g"), "</h1>")
 .replace(new RegExp("~/", "g"), "<p style='display:inline;font-family:cursive'>")
 .replace(new RegExp("/~", "g"), "</p>")
 .replace(new RegExp("2/", "g"), "<h2>")
 .replace(new RegExp("/2", "g"), "</h2>")
 .replace(new RegExp("3/", "g"), "<h3>")
 .replace(new RegExp("/3", "g"), "</h3>")
 .replace(new RegExp("frame/", "g"), "<iframe src='")
 .replace(new RegExp("/frame", "g"), "'></iframe>")
 
 document.getElementById("nmd-out").innerHTML = output
 console.log(output)
}
