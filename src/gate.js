function inject_from_file(filename, target = "#line") {
    document.querySelector(target).innerHTML = build(filename);
}

function inject_from_tpl(tpl, target = "#line") {
    document.querySelector(target).innerHTML = build_osls(document.querySelector(tpl).innerHTML);
}

function auto_build_osls() {
    var osls_tpls = document.querySelectorAll('script[type="text/osls"]');
    for (var i = 0; i < osls_tpls.length; i++) {
        osls_tpls[i].parentNode.insertBefore(document.createRange().createContextualFragment(build_osls(osls_tpls[i].innerHTML)), osls_tpls[i]);
    }
}

function download_osls(filename) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', "./" + filename + ".osls", false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function build_osls(osls) {
    var y = osls.split("\n");
    var it = "";
    y.forEach(function (ele) {
        it += parse(ele);
    });
    return it;
}

function build(filename) {
    return build_osls(download_osls(filename));
}
