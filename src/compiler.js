const heads = ["link", "meta", "script", "title"];
const self_close = ["hr", "br"];

const makeStruct = vals => {
  var names = vals.split(" ");
  var count = vals.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
};

const Token = makeStruct("type value");

const tokenize = line => {
  let words = line.trim().split(" ");
  let i = 0;
  let tmpstr = "";
  let tokens = [];
  while (i < words.length) {
    tmpstr = "";
    let word = words[i];
    if (i === 0) {
      if (word !== "/") {
        tokens.push(new Token("tag", word));
      } else if (word === "/" && i + 1 < words.length) {
        tokens.push(new Token("tag", `${word}${words[i + 1]}`));
      }
    } else {
      if (word === "|" && i + 1 < words.length) {
        i++;
        while (words[i] !== ">" && words[i] !== "/" && i < words.length) {
          tmpstr += words[i];
          i++;
        }
        i--;
        tokens.push(new Token("attr", tmpstr));
      } else if (word === ">" && i + 1 < words.length) {
        i++;
        while (words[i] !== "/" && i < words.length) {
          if (words[i] === "{{") {
            let toparse = "";
            let ocount = 0;
            i++;
            while (ocount !== -1 && i < words.length) {
              if (words[i] === "{{") {
                ocount++;
                toparse += `${words[i]} `;
              } else if (words[i] === "}}" && ocount !== 0) {
                ocount--;
                toparse += `${words[i]} `;
              } else if (words[i] === "}}" && ocount === 0) {
                break;
              } else {
                toparse += `${words[i]} `;
              }
              i++;
            }
            tmpstr += `${parse(toparse)} `;
            i++;
          } else {
            tmpstr += `${words[i]} `;
            i++;
          }
        }
        i--;
        tokens.push(new Token("text", tmpstr));
      } else if (word === "/") {
        tokens.push(new Token("close", word));
      }
    }
    i++;
  }
  return tokens;
};

const parse = cv => {
  let tokens = tokenize(cv);
  let i = 0;
  let newstr = "";
  let tagref = "";
  while (i < tokens.length) {
    let token = tokens[i];
    if (token.type === "tag") {
      tagref = token.value;
      newstr += `<${token.value}`;
    } else if (token.type === "attr") {
      newstr += stripEmpty` ${token.value}>`;
    } else if (token.type === "text") {
      if (tokens[i - 1].type === "attr") {
        newstr += stripEmpty`${token.value.trim()}`;
      } else {
        newstr += stripEmpty`>${token.value.trim()}`;
      }
    } else if (token.type === "close") {
      newstr += `</${tagref}>`;
    } else {
      console.error(`Invalid type ${token.type}`);
    }
    i++;
  }
  if (!newstr.includes(">") && !self_close.includes(tagref)) {
    newstr += ">";
  } else if (!newstr.includes(">") && self_close.includes(tagref)) {
    newstr += " />";
  }
  if (heads.includes(tagref)) {
    document.head.innerHTML += newstr;
    return "";
  } else {
    return newstr;
  }
};

const build = program => {
  if (!program.includes("\n") && program.includes(".aml")) {
    var getPage = new Request(program);
    fetch(getPage).then(response => {
      return response.text().then(text => {
        let y = text.split("\n");
        let it = "";
        y.forEach(ele => {
          let output = parse(ele);
          it = it + output;
          document.body.innerHTML = it;
        });
      });
    });
  } else {
    let y = program.split("\n");
    let it = "";
    y.forEach(ele => {
      let output = parse(ele);
      it = it + output;
      document.body.innerHTML = it;
    });
  }
};

const stripEmpty = (stringsArg, ...inputsArg) => {
  let str = "";
  let strings = Array.from(stringsArg);
  let inputs = Array.from(inputsArg);
  while (strings.length || inputs.length) {
    const string = strings.shift();
    str += string != null ? string : "";
    const input = inputs.shift();
    str += input != null ? input : "";
  }
  return str;
};
