function parse(cv) {
 let c = cv.toString().split(" :: ");
 let v = c[0].split(" -> ");
 let args = parse_attributes(v[1]);
 let tagname = v[0].replace(/\s/g,'');
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
   switch(v[1]) {
    case undefined:
    case null:
     return `<${tagname}>${c[1]}</${tagname}>`;
     break;
    default:
     return `<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
     break;
   }
  case "div":
  case "span":
    switch(v[1]) {
     case undefined:
     case null:
      switch(c[1]) {
       case undefined:
       case null:
        return `<${tagname}>`;
        break;
       default:
        return `<${tagname}>${c[1]}`;
        break;
      }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       return `<${tagname} ${v[1]}>`;
       break;
      default:
       return `<${tagname} ${v[1]}>${c[1]}`;
       break;
     }
    }
  // Img
  case "img":
   switch(v[1]) {
    case undefined:
    case null:
     return `<${tagname} src='${c[1]}' />`;
     break;
    default:
     return `<${tagname} src='${c[1]}' ${v[1]} />`;
     break;
    }
  // Input
  case "input":
   switch(v[1]) {
    case undefined:
    case null:
     return `<${tagname}/>`;
     break;
    default:
     return `<${tagname} ${v[1]}/>`;
     break;
    }
  // Textarea
  case "textarea":
   switch(v[1]) {
    case undefined:
    case null:
     return `<${tagname}>${c[1]}</${tagname}>`;
     break;
    default:
     switch(c[1]) {
      case null:
      case undefined:
       return `<${tagname} ${v[1]}></${tagname}>`;
       break;
      default:
       return `<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
       break;
     }
    }
   // Linebreak
   case "/br/":
    output = "<br>"
    return output;
    break;
   // Meta Tags
   case "meta":
    switch(v[1]) {
     case undefined:
     case null:
      meta = document.createElement("meta")
      meta = document.getElementsByTagName("head")[0].appendChild(meta)
      return "";
      break;
     default:
      meta = document.createElement("meta")
      meta = document.getElementsByTagName("head")[0].appendChild(meta)
      meta.name = v[1]
      meta.content = c[1]
      return "";
      break;
    }
   // External Resource Links
   case "link":
    switch(v[1]) {
     case undefined:
     case null:
      link = document.createElement("link")
      link = document.getElementsByTagName("head")[0].appendChild(link)
      return "";
      break;
     default:
      link = document.createElement("link")
      link = document.getElementsByTagName("head")[0].appendChild(link)
      link.rel = v[1]
      link.href = c[1]
      return "";
      break;
    }
   // Style for Body
   case "bodystyle":
    switch(v[1]) {
     case undefined:
     case null:
      output = ""
      return output;
      break;
     default:
      document.getElementsByTagName("body")[0].style = v[1]
      return "";
      break;
    }
   // Page Title
   case "title":
    return `<${tagname}>${c[1]}</${tagname}>`;
    break;
   // Script (External)
   case "script":
    switch(v[1]) {
     case undefined:
     case null:
      output = `<${tagname}></${tagname}>`
      return output;
      break;
     default:
      return `<${tagname} ${v[1]} /></${tagname}>`;
      break;
   }
   // iframe
  case "iframe":
      let osls_src="";
      if(args.hasOwnProperty("osls")){
          osls_src = encode_html(build_osls(args["osls"]))
      }
      return `<${tagname} ${v[1]} srcdoc="${osls_src}" >${c[1]}</${tagname}>`;
      break;
  case "center":
   switch(v[1]) {
    case undefined:
    case null:
     return `<${tagname}>`;
     break;
    default:
     return `<${tagname} ${v[1]}>`;
     break;
   }
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

function parse_attributes(str) {
    var regex = /(\w*) *= *((['"])?((\\\3|[^\3])*?)\3|(\w+))/g,
        attr = {},
        match;
    while(match = regex.exec(str)) {
        attr[match[1]] = match[2].substring(1, match[2].length-1);
    }
    return attr;
}

function encode_html(html){
    var __entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    return html.replace(/[&<>"'`\/]/g, function (s) {
        return __entityMap[s];
    });
}
