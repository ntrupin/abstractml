function parse(cv) {
 c = cv.toString().split(" :: ")
 v = c[0].split(" -> ")
 tagname = v[0].replace(/\s/g,'')
 switch(tagname) {
  case "h1":// Heading 1
  case "h2":// Heading 2
  case "h3":// Heading 3
  case "h4":// Heading 4
  case "h5":// Heading 5
  case "h6":// Heading 6
  case "p":// Paragraph
  case "a":
  case "abbr":
  case "button":
   return stripEmpty`<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
   break;

  case "div":
  case "span":
   return stripEmpty`<${tagname} ${v[1]}>${c[1]}`;
   break;

  // Img
  case "img":
   return stripEmpty`<${tagname} src='${c[1]}' ${v[1]} />`;
   break;

  // Input
  case "input":
   return stripEmpty`<${tagname} ${v[1]}/>`;
   break;

  // Textarea
  case "textarea":
     return stripEmpty`<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
     break;

   // Linebreak
   case "/br/":
    return "<br>"
    break;

   // Meta Tags
   case "meta":
    meta = document.createElement("meta");
    meta = document.getElementsByTagName("head")[0].appendChild(meta);
    meta.name = stripEmpty`${v[1]}`;
    meta.content = stripEmpty`${c[1]}`;
    return "";
    break;

   // External Resource Links
   case "link":
    link = document.createElement("link")
    link = document.getElementsByTagName("head")[0].appendChild(link)
    link.rel = stripEmpty`${v[1]}`
    link.href = stripEmpty`${c[1]}`
    return "";
    break;
     //
   // Style for Body
   case "bodystyle":
    document.getElementsByTagName("body")[0].style = stripEmpty`${v[1]}`
    return "";
    break;

   // Page Title
   case "title":
    return stripEmpty`<${tagname}>${c[1]}</${tagname}>`;
    break;
   // Script (External)
   case "script":
    return stripEmpty`<${tagname} ${v[1]}></${tagname}>`;
    break;

  case "center":
   return stripEmpty`<${tagname} ${v[1]}>`;
   break;

   // Section Closer
   case "end":
    switch(c[1]) {
     case "div":
      return `</div>`;
      break;
     case "span":
      return `</span>`;
      break;
     case "center":
      return `</center>`;
      break;
    }

   // Accidental blank space
   case "":
    return "";
    break;
   // Errors
   case undefined: 
   case null:
    return "Invalid Syntax";
    break;
 }
}

function stripEmpty (stringsArg,...inputsArg) {
 let str = "";
 let strings = Array.from(stringsArg);
 let inputs = Array.from(inputsArg);
 while (strings.length || inputs.length) {
  const string = strings.shift();
  str += string!=null?string:"";
  const input = inputs.shift();
  str += input!=null?input:"";
 }
  return str;
}
