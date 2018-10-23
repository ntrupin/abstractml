fn main() {
    let split = "h1 -> style='color:blue' -> Hi!\np -> style='color:blue' -> Hi!".split("\n");
    for spli in split {
        let spl = spli.split(" -> ");
        let mut count = 0;
        for s in spl {
            match count {
                0 => {
                    print!("<{} ", s)
                },
                1 => {
                    print!("{}>", s)
                },
                2 => {
                    print!("{}", s);
                    print!("</{}>", "work-in-progress");
                    count = 0;
                },
                _ => print!("-ERROR-"),
            }
            count = count + 1;
        }
    }
}
