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
   switch(v[1]) {
    case undefined:
    case null:
     output = `<${tagname}>${c[1]}</${tagname}>`
     return output;
     break;
    default:
     output = `<${tagname}>${v[1]}>${c[1]}</${tagname}>`
     return output;
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
        output = `<${tagname}>`
        return output;
        break;
       default:
        output = `<${tagname}>${c[1]}`
        return output;
        break;
      }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       output = `<${tagname} ${v[1]}>`
       return output;
       break;
      default:
       output = `<${tagname} ${v[1]}>${c[1]}`
       return output;
       break;
     }
    }
  // Img
  case "img":
   switch(v[1]) {
    case undefined:
    case null:
     output = `<img src='${c[1]}' />`
     return output;
     break;
    default:
     output = `<img src='${c[1]}' ${v[1]} />`
     return output;
     break;
    }
  // Input
  case "input":
   switch(v[1]) {
    case undefined:
    case null:
     output = `<input/>`
     return output;
     break;
    default:
     output = `<input ${v[1]}/>`
     return output;
     break;
    }
  // Textarea
  case "textarea":
   switch(v[1]) {
    case undefined:
    case null:
     output = `<textarea>${c[1]}</textarea>`
     return output;
     break;
    default:
     switch(c[1]) {
      case null:
      case undefined:
       output = `<textarea ${v[1]}></textarea>`
       return output;
       break;
      default:
       output = `<textarea ${v[1]}>${c[1]}</textarea>`
       return output;
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
      output = ""
      meta = document.getElementsByTagName("head")[0].appendChild("meta")
      return output;
      break;
     default:
      output = ""
      meta = document.getElementsByTagName("head")[0].appendChild("meta")
      meta[v[1]] = c[1]
      return output;
      break;
    }
   // External Resource Links
   case "link":
    switch(v[1]) {
     case undefined:
     case null:
      output = ""
      link = document.getElementsByTagName("head")[0].appendChild("link")
      return output;
      break;
     default:
      output = ""
      link = document.getElementsByTagName("head")[0].appendChild("link")
      link.rel = v[1]
      link.href = v[1]
      return output;
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
      output = ""
      document.getElementsByTagName("body")[0].style = v[1]
      return output;
      break;
    }
   // Page Title
   case "title":
    output = "<title>" + c[1] + "</title>"
    return output;
    break;
   // Script (External)
   case "script":
    switch(v[1]) {
     case undefined:
     case null:
      output = "<script></script>"
      return output;
      break;
     default:
      output = "<script " + v[1] + " /></script>"
      return output;
      break;
   }
   // Section Closer
   case "end":
    switch(c[1]) {
     case "div":
      output = "</div>"
      return output;
      break;
     case "span":
      output = "</span>"
      return output;
      break;
    }
   // Accidental blank space
   case "":
    output = ""
    return output;
    break;
   // Errors
   case undefined: 
   case null:
    output = "MISSING IDENTIFIERS"
    return output;
    break;
 }
}
