function parse(cv) {
  part = cv.toString().split(" -> ")
  tagname = part[0].replace(/\s/g,'')
  switch(tagname) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "a":
    case "abbr":
    case "button":
    case "li":
    case "small":
    case "b":
    case "u":
      switch(part[2]) {
        case null:
        case undefined:
          return stripEmpty`<${tagname}>${part[1]}</${tagname}>`;
          break;
        default:
          switch(part[2].replace(/\s/g,'')) {
            case '':
            case '.':
            case ' ':
              return stripEmpty`<${tagname} ${part[1]}>`;
              break;
            default:
              return stripEmpty`<${tagname} ${part[1]}>${part[2]}</${tagname}>`;
              break;
          }
      }
    case "div":
    case "span":
    case "center":
    case "header":
    case "nav":
    case "main":
    case "form":
    case "table":
    case "th":
    case "tr":
    case "td":
      switch(part[2]) {
        case null:
        case undefined:
          return stripEmpty`<${tagname} ${part[1]}>`;
          break;
        default:
          switch(part[2]) {
            case '':
            case '.':
            case ' ':
              return stripEmpty`<${tagname} ${part[1]}></${tagname}>`;
              break;
            default:
              return stripEmpty`<${tagname} ${part[1]}>${part[2]}`;
              break;
          }
      }
    case "img":
      return stripEmpty`<${tagname} src='${part[1]}' ${part[2]} />`;
      break;
    case "ol":
    case "ul":
      return stripEmpty`<${tagname} '${part[1]}'>`;
      break;
    case "input":
      return stripEmpty`<${tagname} ${part[1]}/>`;
      break;
    case "textarea":
      return stripEmpty`<${tagname} ${part[1]}>${part[2]}</${tagname}>`;
      break;
    case "br":
    case "hr":
      switch(part[1]) {
        case null:
        case undefined:
          return stripEmpty`<${tagname}>`;
          break;
        default:
          return stripEmpty`<${tagname} ${part[1]}>`;
          break;
      }
    case "meta":
      meta = document.createElement("meta");
      meta = document.getElementsByTagName("head")[0].appendChild(meta);
      meta.name = stripEmpty`${part[1]}`;
      meta.content = stripEmpty`${part[2]}`;
      return "";
      break;
    case "charset":
      meta = document.createElement("meta");
      meta = document.getElementsByTagName("head")[0].appendChild(meta);
      meta.charset = stripEmpty`${part[1]}`;
      return "";
    break;
    case "link":
      link = document.createElement("link")
      link = document.getElementsByTagName("head")[0].appendChild(link)
      link.rel = stripEmpty`${part[1]}`
      link.href = stripEmpty`${part[2]}`
      return "";
      break;
    case "bodystyle":
      document.getElementsByTagName("body")[0].style = stripEmpty`${part[1]}`
      return "";
      break;
    case "title":
      title = document.createElement("title")
      title = document.getElementsByTagName("head")[0].appendChild(title)
      title.innerHTML = stripEmpty`${part[1]}`
      return "";
      break;
    case "script":
      switch(part[2]) {
        case null:
        case undefined:
          script = document.createElement("script")
          script = document.getElementsByTagName("head")[0].appendChild(script)
          script.src = stripEmpty`${part[1]}`
          return "";
          break;
        default:
          switch(part[2]) {
            case '':
            case 'defer':
            case ' ':
              script = document.createElement("script")
              script = document.getElementsByTagName("head")[0].appendChild(script)
              script.defer = true
              script.src = stripEmpty`${part[1]}`
            return "";
            break;
            default:
              script = document.createElement("script")
              script = document.getElementsByTagName("head")[0].appendChild(script)
              script.src = stripEmpty`${part[1]}`
              return "";
              break;
        }
      }
    case "//":
      return stripEmpty`<!-- ${part[1]} -->`;
      break;
    case "end":
        return stripEmpty`</${part[1]}>`;
        break;
    case "":
      return stripEmpty`${part[0]}`;
      break;
    case undefined:
    case null:
    default:
      return stripEmpty`${part[0]}`;
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

function build(filename) {
 var getPage = new Request(filename + '.osls');
  fetch(getPage).then(function(response) {
    return response.text().then(function(text) {
      y = text.split("\n")
      it = "";
      y.forEach(function(ele) {
        output = parse(ele)
        it = it + output
        document.getElementById("line").innerHTML = it
      });
			console.log(document.getElementById("whole").innerHTML)
    });
  });
}

// THIS IS THE OLD METHOD OF FETCHING THE OSLS FILE, KEPT HERE FOR REFERENCE
/* var xmlhttp;
xmlhttp=new XMLHttpRequest();
xmlhttp.open('GET', "./" + filename + ".osls", false);
xmlhttp.send();
x = xmlhttp.responseText */
