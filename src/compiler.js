const singles = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "time",
  "a",
  "abbr",
  "button",
  "li",
  "small",
  "b",
  "s",
  "strong",
  "u",
  "textarea"
];
const nests = [
  "div",
  "section",
  "article",
  "span",
  "center",
  "header",
  "nav",
  "main",
  "form",
  "table",
  "th",
  "tr",
  "td",
  "pre",
  "code",
  "ol",
  "ul"
];
const inners = [
  "img",
  "input"
]

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
  let words = line.split(" ");
  let i = 0;
  let tokens = [];
  while (i < words.length) {
    let word = words[i];
    if (word === "->") {
      i++;
      continue;
    }
    if (i === 0) {
      tokens.push(new Token("tag", word));
    } else {
      let segment = word;
      i++;
      while (words[i] !== "->" && i < words.length) {
        segment += " " + words[i];
        i++;
      }
      if (i + 1 < words.length || nests.includes(words[i - 3]) || inners.includes(words[i - 3])) {
        tokens.push(new Token("args", segment));
      } else {
        tokens.push(new Token("text", segment));
      }
    }
    i++;
  }
  return tokens;
};

const parse = cv => {
  let tokens = tokenize(cv);
  let i = 0;
  let new_tag = "";
  let tag_ref = "";
  while (i < tokens.length) {
    let token = tokens[i];
    if (token.type === "tag" && token.value !== "end") {
      tag_ref = token.value;
      if (tokens[i + 1].type !== "args") {
        new_tag += stripEmpty`<${token.value}>`;
      } else {
        new_tag += stripEmpty`<${token.value} `;
      }
    } else if (token.type === "args") {
      if (inners.includes(tag_ref)) {
        new_tag += `${token.value} />`;
      } else {
        new_tag += `${token.value}>`;
      }
    } else if (token.type === "text") {
      if (singles.includes(tag_ref)) {
        new_tag += `${token.value}`;
      } else if (nests.includes(tag_ref)) {
        if (token.value === ".") {
          new_tag += `</${tag_ref}>`;
        } else {
          new_tag += `${token.value}`;
        }
      }
    } else if (token.type === "tag" && token.value === "end") {
      new_tag += `</${tokens[i + 1].value}>`;
    }
    i++;
  }
  if (singles.includes(tag_ref)) {
    new_tag += `</${tag_ref}>`;
  }
  return new_tag;
};

const build = program => {
  if (!program.includes("\n") && program.includes(".aml")) {
    var getPage = new Request(program);
    fetch(getPage).then(function(response) {
      return response.text().then(function(text) {
        let y = text.split("\n");
        let it = "";
        y.forEach(function(ele) {
          let output = parse(ele);
          it = it + output;
          document.getElementById("app").innerHTML = it;
        });
        console.log(it);
      });
    });
  } else {
    let y = program.split("\n");
    let it = "";
    y.forEach(function(ele) {
      let output = parse(ele);
      it = it + output;
      document.getElementById("app").innerHTML = it;
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
}
