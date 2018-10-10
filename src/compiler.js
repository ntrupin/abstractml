function parse(cv) {
  c = cv.toString().split(" :: ")
  v = c[0].split(" -> ")
  tagname = v[0].replace(/\s/g,'')
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
      return stripEmpty`<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
      break;
    case "div":
    case "span":
      return stripEmpty`<${tagname} ${v[1]}>${c[1]}`;
      break;
    case "img":
      return stripEmpty`<${tagname} src='${c[1]}' ${v[1]} />`;
      break;
    case "input":
      return stripEmpty`<${tagname} ${v[1]}/>`;
      break;
    case "textarea":
      return stripEmpty`<${tagname} ${v[1]}>${c[1]}</${tagname}>`;
      break;
    case "/br/":
      return "<br>"
      break;
    case "meta":
      meta = document.createElement("meta");
      meta = document.getElementsByTagName("head")[0].appendChild(meta);
      meta.name = stripEmpty`${v[1]}`;
      meta.content = stripEmpty`${c[1]}`;
      return "";
      break;
    case "link":
      link = document.createElement("link")
      link = document.getElementsByTagName("head")[0].appendChild(link)
      link.rel = stripEmpty`${v[1]}`
      link.href = stripEmpty`${c[1]}`
      return "";
      break;
    case "bodystyle":
      document.getElementsByTagName("body")[0].style = stripEmpty`${v[1]}`
      return "";
      break;
    case "title":
      return stripEmpty`<${tagname}>${c[1]}</${tagname}>`;
      break;
    case "script":
      return stripEmpty`<${tagname} ${v[1]}></${tagname}>`;
      break;
    case "center":
      return stripEmpty`<${tagname} ${v[1]}>`;
      break;
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
    case "":
      return "";
      break;
    case undefined: 
    case null:
      return "Invalid Syntax";
      break;
    case "ul":
    case "ol":
    parsedList = ``;
    listArray = c[1].split(' * ').map(element => `<li>${element}</li>`)
    listArray.forEach(element => parsedList += element );
    return stripEmpty`<${tagname} ${v[1]}>${parsedList}</${tagname}>`;
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
