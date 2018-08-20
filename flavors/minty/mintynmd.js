
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
 t1x1 = t8.replace(new RegExp("colored/", "g"), "<p style='display:inline;color:")
 t1x2 = t1x1.replace(new RegExp("/colored", "g"), "</p>")
 ts1 = t1x2.replace(new RegExp(" /linebreak/ ", "g"), "<br>")
 ts2 = ts1.replace(new RegExp("-", "g"), "'>")
 t2x1 = ts2.replace(new RegExp("/randomnumber/", "g"), Math.floor(Math.random() * 1000000001).toString())
 t2x2 = t2x1.replace(new RegExp("•image/", "g"), "<img src='")
 t2x3 = t2x2.replace(new RegExp("/width/", "g"), "' width='")
 t2x4 = t2x3.replace(new RegExp("/height/", "g"), "' height='")
 t2x5 = t2x4.replace(new RegExp("/image", "g"), "' />")
 t2x6 = t2x5.replace(new RegExp("header/", "g"), "<h1>")
 t2x7 = t2x6.replace(new RegExp("/header", "g"), "</h1>")
 t3x1 = t2x7.replace(new RegExp("cursive/", "g"), "<p style='display:inline;font-family:cursive'>")
 t3x2 = t3x1.replace(new RegExp("/cursive", "g"), "</p>")
 t3x3 = t3x2.replace(new RegExp("header2/", "g"), "<h2>")
 t3x4 = t3x3.replace(new RegExp("/header2", "g"), "</h2>")
 t3x5 = t3x4.replace(new RegExp("header3/", "g"), "<h3>")
 t3x6 = t3x5.replace(new RegExp("/header3", "g"), "</h3>")
 
 document.getElementById("nmd-out").innerHTML = t3x6
 console.log(t3x6)
}
