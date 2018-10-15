function build(filename) {
 var getPage = new Request(filename + '.osls');
  fetch(getPage).then(function(response) {
    return response.text().then(function(text) {
      y = text.split("\n")
      it = "";
      y.forEach(function(ele) {
        output = parse(ele)
        console.log(output)
        it = it + output
        console.log(it)
        document.getElementById("line").innerHTML = it
        console.log(document.getElementById("whole").innerHTML)
      });
    });
  });
}

// THIS IS THE OLD METHOD OF FETCHING THE OSLS FILE, KEPT HERE FOR REFERENCE
/* var xmlhttp;
xmlhttp=new XMLHttpRequest();
xmlhttp.open('GET', "./" + filename + ".osls", false);
xmlhttp.send();
x = xmlhttp.responseText */
