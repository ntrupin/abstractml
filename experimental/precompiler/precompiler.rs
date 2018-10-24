fn main() {
    let parts: Vec<&str> = "h1 -> style='color:blue' -> Hi!\np -> Hi!\nHi!\nh1 -> style='color:blue' -> noend"
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
                _ => println!("{}", tag)
            } 
        } if seg.len() == 2 {
            let (tag, args) = (seg[0], seg[1]);
            match tag {
                "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"a"|"abbr"|"button"|"li" => println!("<{}>{}</{}>", tag, args, tag),
                _ => println!("{}", tag)
            } 
        }
    }
}
