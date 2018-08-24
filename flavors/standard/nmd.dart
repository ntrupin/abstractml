import 'dart:html';

void main() {
  var text = querySelector('#nmd-in').text;
  var output = text
 .replaceAll("}/", "<i>")
 .replaceAll("/{", "</i>")
 .replaceAll("::/", "<strong>")
 .replaceAll("/::", "</strong>")
 .replaceAll("_/", "<u>")
 .replaceAll("/_", "</u>")
 .replaceAll("@/", "<a href='")
 .replaceAll("/@", "</a>")
 .replaceAll("-", "'>");
  querySelector('#nmd-out').setInnerHtml(output);
}
