function build(filename,target="#line") {
    document.querySelector(target).innerHTML = build_osls(filename);
}

function build_osls(filename) {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open('GET', "./" + filename + ".osls", false);
    xmlhttp.send();
    var x = xmlhttp.responseText;
    var y = x.split("\n");
    var it = "";
    y.forEach(function(ele) {
        it += parse(ele);
    });
    return it;
}
