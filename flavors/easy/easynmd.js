function parse() {
 text = document.getElementById("nmd-in").innerHTML
 t1 = text.replace(new RegExp("i/", "g"), "<i>")
 t2 = t1.replace(new RegExp("/i", "g"), "</i>")
 t3 = t2.replace(new RegExp("b/", "g"), "<strong>")
 t4 = t3.replace(new RegExp("/b", "g"), "</strong>")
 t5 = t4.replace(new RegExp("u/", "g"), "<u>")
 t6 = t5.replace(new RegExp("/u", "g"), "</u>")
 t7 = t6.replace(new RegExp("l/", "g"), "<a href='")
 t8 = t7.replace(new RegExp("/l", "g"), "</a>")
 t1x1 = t8.replace(new RegExp("c/", "g"), "<p style='display:inline;color:")
 t1x2 = t1x1.replace(new RegExp("/c", "g"), "</p>")
 ts1 = t1x2.replace(new RegExp("//", "g"), "<br>")
 ts2 = ts1.replace(new RegExp("-", "g"), "'>")
 t2x1 = ts2.replace(new RegExp("+-", "g"), Math.floor(Math.random() * 1000000001).toString())
 t2x2 = t2x1.replace(new RegExp("img/", "g"), "<img src='")
 t2x3 = t2x2.replace(new RegExp("/w/", "g"), "' width='")
 t2x4 = t2x3.replace(new RegExp("/h/", "g"), "' height='")
 t2x5 = t2x4.replace(new RegExp("/img", "g"), "' />")
 
 document.getElementById("nmd-out").innerHTML = t2x5
 console.log(t2x5)
}
