fn main(){
    //println!("Hello, mundo!");
    let s = "Hello, mundo!";
    let vowels = "aeiou";
    let mut cnt = 0;

    for i in s.chars() {
            //print!("{} ", i);
        if vowels.contains(i){
            cnt = cnt + 1;
        }
    }
    print!("{}", cnt);
}
