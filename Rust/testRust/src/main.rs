fn main() {
    println!("Hello, world! {}",test_fun());
    // Test shadowing with immutable variables
    // let x = 5;
    // println!("{}",x);
    // let x = 6;
    // println!("{}",x);
    // let mut test ="   ";
    // let test = test.len();
    // println!("{}",test);
    // let a: [i32;5];
    // a = [1,2,3,4,5];
    // println!("{}",a[0]);
    // let b = test_fun2();
    // println!("{}",b.1);

    // Testing some ideas about ownership.

    // Does ownership drop if we don't have 
    // the string from the String library?
    let s = "Hello";
    println!("{s}");
    let t = s;
    println!("{t}");
    println!("{s}");
    test_fun3(4);
    
    let a = ( [3,2], "s");
    println!("{0}",a.0[0]);
    let b = [ (4,"r"), (2,"s")  ];
    println!("{0}",b[0].0);
}


fn test_fun() -> i32{
    return 5;
}

fn test_fun2() -> (i32,i32){
    return (5,5);
}
fn test_fun3(x:i32){
    println!("{x}");
}