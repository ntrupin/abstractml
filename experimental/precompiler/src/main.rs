fn main() {
    let parts: Vec<&str> = "charset -> utf-8\nmeta -> viewport -> width=device-width, initial-scale=1\nlink -> stylesheet -> index.css\ntitle -> Hello, World!\ndiv\nh1 -> Example Domain\np -> This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.\na -> href='http://www.iana.org/domains/example' -> More information...\nend -> div"
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
                "div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td" =>
                    match inner {
                        "end"|"."|" " => println!("<{} {}></{}>", tag, args, tag),
                        _ => println!("<{} {}>{}", tag, args, inner)
                    }
                _ => println!("{}", tag)
            }
        } if seg.len() == 2 {
            let (tag, args) = (seg[0], seg[1]);
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li" => println!("<{}>{}</{}>", tag, args, tag),
                "div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td" => println!("<{} {}>", tag, args),
                "end" => println!("</{}>", args),
                _ => println!("{}", tag)
            }
        } else {
            let tag = seg[0];
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li"|"div"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td" => println!("<{}>", tag),
                _ => println!("{}", tag)
            }
        }
    }
}