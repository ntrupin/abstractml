function build(filename) {
 var xmlhttp;
 xmlhttp=new XMLHttpRequest();
 xmlhttp.open('GET', "./" + filename + ".osls", false);
 xmlhttp.send();
 x = xmlhttp.responseText
 y = x.split("\n")
 it = "";
 y.forEach(function(ele) {
  output = parse(ele)
  console.log(output)
  it = it + output
  console.log(it)
  document.getElementById("line").innerHTML = it
console.log(document.getElementById("whole").innerHTML)
 });
}
