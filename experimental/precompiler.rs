extern crate autopilot;

use std::env;

fn compile() {
    let parts: Vec<&str> = "charset -> utf-8\nmeta -> viewport -> width=device-width, initial-scale=1\nlink -> stylesheet -> index.css\ntitle -> Hello, World!\ndiv\nh1 -> Example Domain\np -> This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.\na -> href='http://www.iana.org/domains/example' -> More information...\nend -> div\nimg -> https://google.com\nimg -> https://google.com -> width='90px' height='90px'\nol\nli -> Hi!\nend -> ol\nul -> style='color:blue'"
        .trim()
        .split("\n")
        .collect();
    for part in parts {
        let seg: Vec<&str> = part
            .trim()
            .split(" -> ")
            .collect();
        if seg.len() == 3 {
            let (tag, args, inner) = (seg[0], seg[1], seg[2]);
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li" => {
                    match inner {
                        "noend"|"."|" " => println!("<{} {}>", tag, args),
                        _ => println!("<{} {}>{}</{}>", tag, args, inner, tag)
                    }
                },
                "div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td" => {
                    match inner {
                        "end"|"."|" " => println!("<{} {}></{}>", tag, args, tag),
                        _ => println!("<{} {}>{}", tag, args, inner)
                    }
                },
                "img" => println!("<{} src='{}' {} />", tag, args, inner),
                _ => println!("{}", tag)
            }
        } if seg.len() == 2 {
            let (tag, args) = (seg[0], seg[1]);
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li" => println!("<{}>{}</{}>", tag, args, tag),
                "div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td" => println!("<{} {}>", tag, args),
                "end" => println!("</{}>", args),
                "img" => println!("<{} src='{}' />", tag, args),
                "ol"|"ul" => println!("<{} {}>", tag, args),
                _ => println!("{}", tag)
            }
        } if seg.len() == 1 {
            let tag = seg[0];
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li"|"div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td"|"img"|"ol"|"ul" => println!("<{}>", tag),
                _ => println!("{}", tag)
            }
        }
    }
}

fn main() {
    let args: Vec<String> = env::args().collect();
    println!("File to compile: {:?}", args[1]);
    let response = autopilot::alert::alert(
        "Welcome to the LineScript Precompiler! This is the official utility to compile LineScript into working HTML5 straight from your desktop, before you deploy it on the web.",
        Some("LineScript Precompiler"),
        Some("Compile"),
        Some("Cancel"),
    );
    match response {
        autopilot::alert::Response::Default => compile(),
        autopilot::alert::Response::Cancel => println!("The process was successfully terminated."),
    }
}
