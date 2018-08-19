function parse() {
 text = document.getElementById("nmd-in").innerHTML
 t1 = text.replace(new RegExp("italics/", "g"), "<i>")
 t2 = t1.replace(new RegExp("/italics", "g"), "</i>")
 t3 = t2.replace(new RegExp("bold/", "g"), "<strong>")
 t4 = t3.replace(new RegExp("/bold", "g"), "</strong>")
 t5 = t4.replace(new RegExp("underline/", "g"), "<u>")
 t6 = t5.replace(new RegExp("/underline", "g"), "</u>")
 t7 = t6.replace(new RegExp("hyperlink/", "g"), "<a href='")
 t8 = t7.replace(new RegExp("/hyperlink", "g"), "</a>")
 t1x1 = t8.replace(new RegExp("coloredtext/", "g"), "<p style='display:inline;color:")
 t1x2 = t1x1.replace(new RegExp("/coloredtext", "g"), "</p>")
 ts1 = t1x2.replace(new RegExp("/linebreak/", "g"), "<br>")
 ts2 = ts1.replace(new RegExp("-", "g"), "'>")
 t2x1 = ts2.replace(new RegExp("/randomnumber/", "g"), Math.floor(Math.random() * 1000000001).toString())
 t2x2 = t2x1.replace(new RegExp("image/", "g"), "<img src='")
 t2x3 = t2x2.replace(new RegExp("/width/", "g"), "' width='")
 t2x4 = t2x3.replace(new RegExp("/height/", "g"), "' height='")
 t2x5 = t2x4.replace(new RegExp("/image", "g"), "' />")
 
 document.getElementById("nmd-out").innerHTML = t2x5
 console.log(t2x5)
}
