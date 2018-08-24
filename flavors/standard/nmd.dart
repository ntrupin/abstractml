import 'dart:html';
import 'dart:math';

parse() {
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
 .replaceAll ("'/", "<p style='display:inline;color:")
 .replaceAll ("/'", "</p>")
 .replaceAll ("/v/", "<br>")
 .replaceAll ("/_/", "<hr>")
 .replaceAll ("-", "'>")
 .replaceAll (";;", Random.nextInt(1000000001))
 .replaceAll ("•/", "<img src='")
 .replaceAll ("/w/", "' width='")
 .replaceAll ("/h/", "' height='")
 .replaceAll ("/•", "' />")
 .replaceAll ("1/", "<h1>")
 .replaceAll ("/1", "</h1>")
 .replaceAll ("~/", "<p style='display:inline;font-family:cursive'>")
 .replaceAll ("/~", "</p>")
 .replaceAll ("2/", "<h2>")
 .replaceAll ("/2", "</h2>")
 .replaceAll ("3/", "<h3>")
 .replaceAll ("/3", "</h3>")
 .replaceAll ("4/", "<h4>")
 .replaceAll ("/4", "</h4>")
 .replaceAll ("5/", "<h4>")
 .replaceAll ("/5", "</h4>")
 .replaceAll ("6/", "<h4>")
 .replaceAll ("/6", "</h4>")
 .replaceAll ("|:/", "<iframe src='")
 .replaceAll ("/:|", "'></iframe>");
  querySelector('#nmd-out').setInnerHtml(output);
}
