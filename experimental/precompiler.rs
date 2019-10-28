use std::process;
use std::env;
use std::io::Write;
use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() {
    let args: Vec<String> = env::args().collect();
    
    if args.len() < 2 {
        println!("Please enter the aml file that must be compiled.");
        process::exit(1);
    }

    let filename = &args[1];

    let file = File::open(filename).unwrap();
    let reader = BufReader::new(file);
    let mut new_data: Vec<String> = [].to_vec();

    for (index, line) in reader.lines().enumerate() {
        let line = line.unwrap();
        let new_line = parse(index, line);
        new_data.push(new_line);
    }
    
    let data = new_data.join("\n");
    let mut f = File::create(format!("{}.html", filename)).expect("AML Error: Unable to create file.");
    f.write_all(data.as_bytes()).expect("AML Error: Unable to write data.");
}

fn error(msg: String) {
    println!("{}", msg);
    process::exit(1);
}

fn parse(index: usize, line: String) -> String {
    let new_line: String = line.clone();
    let line_splited: Vec<&str> = line.split("->").collect();

    let tagname = line_splited[0].trim();

    let mut part_one = "";
    let mut part_two = "";

    if tagname != "" {
        if line_splited.len() == 2 || line_splited.len() > 1 {
            part_one = line_splited[1].trim();
        } 
        
        if line_splited.len() == 3 || line_splited.len() > 2 {
            part_two = line_splited[2].trim();
        }

        match tagname {
            "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"time"|"a"|"abbr"|"button"|"li"|"small"|"b"|"s"|"strong"|"u"|"title" => {
                if part_one == "" {
                    return format!("<{0}></{0}>", tagname);
                } else {
                    if part_two == "" {
                        return format!("<{0}>{1}</{0}>", tagname, part_one);
                    } else {
                        return format!("<{0} {1}>{2}</{0}>", tagname, part_one, part_two);
                    }
                }
            }
            "div"|"textarea"|"script"|"section"|"article"|"span"|"center"|"header"|"nav"|"main"|"form"|"table"|"th"|"tr"|"td"|"pre"|"code"|"ol"|"ul" => {
                if part_one == "" {
                    return format!("<{0}>", tagname);
                } else {
                    if part_two == "" {
                        return format!("<{0} {1}>", tagname, part_one);
                    } else {
                        return format!("<{0} {1}>{2}</{0}>", tagname, part_one, part_two);
                    }
                }
            }
            "input" => {
               if part_one == "" {
                    return format!("<{0} />", tagname);
                } else {
                    return format!("<{0} {1} />", tagname, part_one);
                }           
            }   
            "hr"|"br" => {
               if part_one == "" {
                    return format!("<{0}>", tagname);
                } else {
                    return format!("<{0} {1}>", tagname, part_one);
                }           
            }             
            "img" => {
                if part_one == "" {
                    return format!("<img>");
                } else {
                    if part_two == "" {
                        return format!("<img src={0}>", part_one);
                    } else {
                        return format!("<img src={0} {1}>", part_one, part_two);
                    }
                }                  
            }   
            "meta" => {
                if part_one == "" {
                    return format!("<meta>");
                } else {
                    if part_two == "" {
                        return format!("<meta name={0}>", part_one);
                    } else {
                        return format!("<meta name={0} content={1}>", part_one, part_two);
                    }
                }                  
            }            
            "charset" => {
                if part_one == "" {
                    return format!("<meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">");
                } else {
                    return format!("<meta http-equiv=\"Content-Type\" content=\"text/html;charset={}\">", part_one);
                }                  
            }
            "link" => {
                if part_one == "" {
                    return format!("<{0}>", tagname);
                } else {
                    if part_two == "" {
                        return format!("<{0} rel={1}>", tagname, part_one);
                    } else {
                        return format!("<{0} rel={1} href={2}>", tagname, part_one, part_two);
                    }
                }                
            }
            "end" => {
                if part_one == "" {
                    return format!("</div>");
                } else {
                    return format!("</{0}>", part_one);
                }
            }
            "//" => {
                if part_one == "" {
                    return format!("<!-- -->");
                } else {
                    return format!("<!-- {0} -->", part_one);
                }
            }         
            _ => {
                error(format!("AML Error: Cannot identify the tagname `{}` in line {}", tagname, index + 1));
            }
        }
    }

    return new_line;
}