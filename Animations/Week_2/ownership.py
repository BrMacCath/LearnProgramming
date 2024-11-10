from manim import *


## The goal of this is to create an animation to talk about ownership in Rust.

class Ownership(Scene):
    def construct(self):
        code ='''fn main(){
    let x:i8 = 5;
    drop_variable(x);
}

fn drop_variable(x: i8){
    println!("{x}");
}
        '''

        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        self.add(rendered_code)
        self.wait()
        x_list= [rendered_code[2][1][8],rendered_code[2][2][18],rendered_code[2][5][17] ,rendered_code[2][6][15]]
        box_list = [SurroundingRectangle(x) for x in x_list]
        self.add(box_list[0])
        self.wait()
        for i in range(len(x_list)-1):
            self.add(x_list[i])
            self.play(ReplacementTransform(box_list[i],box_list[i+1]))
            self.wait()

        self.wait()


class lose_and_take(Scene):
    def construct(self):
        code ='''fn main(){
    let x:i8 = 5;
    let s = lose_and_take(x);
}

fn lose_and_take(x: i8){
    return x;
}
        '''

        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        self.add(rendered_code)
        self.wait()
        x_list= [rendered_code[2][1][8],rendered_code[2][2][26],rendered_code[2][5][17] ,rendered_code[2][6][11],rendered_code[2][2][9]]
        box_list = [SurroundingRectangle(x) for x in x_list]
        self.add(box_list[0])
        self.wait()
        for i in range(len(x_list)-1):
            self.add(x_list[i])
            self.play(ReplacementTransform(box_list[i],box_list[i+1]))
            self.wait()

        self.wait()
