fn main() {
    let mut example = String::from("example");
    let mut s= example.chars();
    for i in 0..s.len(){
        println!("{}",s[i]);
    }
    println!("Test")
    
}


// fn test_fun() -> i32{
//     return 5;
// }

// fn test_fun2() -> (i32,i32){
//     return (5,5);
// }
// fn test_fun3(x:i32){
//     println!("{x}");
// }