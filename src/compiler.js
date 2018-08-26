function parse(cv) {
 c = cv.toString().split(" :: ")
 v = c[0].split(" -> ")
 switch(v[0].replace(/\s/g,'')) {
  case "h1":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h1>" + c[1] + "</h1>"
     return output;
     break;
    default:
     output = "<h1 " + v[1] + ">" + c[1] + "</h1>"
     return output;
     break;
   }
  case "h2":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h2>" + c[1] + "</h2>"
     return output;
     break;
    default:
     output = "<h2 " + v[1] + ">" + c[1] + "</h2>"
     return output;
     break;
  }
  case "h3":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h3>" + c[1] + "</h3>"
     return output;
     break;
    default:
     output = "<h3 " + v[1] + ">" + c[1] + "</h3>"
     return output;
     break;
   }
  case "h4":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h4>" + c[1] + "</h4>"
     return output;
     break;
    default:
     output = "<h4 " + v[1] + ">" + c[1] + "</h4>"
     return output;
     break;
   }
  case "h5":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h5>" + c[1] + "</h5>"
     return output;
     break;
    default:
     output = "<h5 " + v[1] + ">" + c[1] + "</h5>"
     return output;
     break;
   }
  case "h6":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<h6>" + c[1] + "</h6>"
     return output;
     break;
    default:
     output = "<h6 " + v[1] + ">" + c[1] + "</h6>"
     return output;
     break;
   }
  case "p":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<p>" + c[1] + "</p>"
     return output;
     break;
    default:
     output = "<p " + v[1] + ">" + c[1] + "</p>"
     return output;
     break;
   }
   case "/br/":
    output + "<br>"
    return output;
    break;
   case "div":
    switch(v[1]) {
    case undefined:
    case null:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<div>"
       return output;
       break;
      default:
       output = "<div>" + c[1]
       return output;
       break;
     }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<div " + v[1] + ">"
       return output;
       break;
      default:
       output = "<div " + v[1] + ">" + c[1]
       return output;
       break;
     }
    }
   case "meta":
    switch(v[1]) {
     case undefined:
     case null:
      output = "<meta />"
      return output;
      break;
     default:
      output = "<meta " + v[1] + " />"
      return output;
      break;
   }
   case "title":
    output = "<title>" + c[1] + "</title>"
    return output;
    break;
   case "script":
    switch(v[1]) {
    case undefined:
    case null:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<div>"
       return output;
       break;
      default:
       output = "<div>" + c[1]
       return output;
       break;
     }
    default:
     switch(c[1]) {
      case undefined:
      case null:
       output = "<div " + v[1] + ">"
       return output;
       break;
      default:
       output = "<div " + v[1] + ">" + c[1]
       return output;
       break;
     }
    }
  case "a":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<a>" + c[1] + "</a>"
     return output;
     break;
    default:
     output = "<a " + v[1] + ">" + c[1] + "</a>"
     return output;
     break;
  }
  case "button":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<button>" + c[1] + "</button>"
     return output;
     break;
    default:
     output = "<button " + v[1] + ">" + c[1] + "</button>"
     return output;
     break;
  }
  case "input":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<input/>"
     return output;
     break;
    default:
     output = "<input " + v[1] + "/>"
     return output;
     break;
  }
  case "textarea":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<textarea>" + c[1] + "</textarea>"
     return output;
     break;
    default:
     output = "<textarea " + v[1] + ">" + c[1] + "</textarea>"
     return output;
     break;
  }
  case "abbr":
   switch(v[1]) {
    case undefined:
    case null:
     output = "<abbr>" + c[1] + "</abbr>"
     return output;
     break;
    default:
     output = "<abbr " + v[1] + ">" + c[1] + "</abbr>"
     return output;
     break;
  }
  case "end":
    switch(c[1]) {
     case "div":
      output = "</div>"
      return output;
      break;
    }
   case undefined: 
   case null:
   default:
    output = "MISSING IDENTIFIERS"
    return output;
    break;
  }
   
  
}
