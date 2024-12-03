from manim import *


## The goal of this is to create an animation to talk about ownership in Rust.

class Scope(Scene):
    def construct(self):
        code ='''
{
    let x = 5;
    let y = x + 2;
}
println!("Cannot access {x}");
        '''

        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        self.add(rendered_code)
        self.wait()
        x_list= [rendered_code[2][1][8],rendered_code[2][2][12]]
        box_list = [SurroundingRectangle(x) for x in x_list]
        self.add(box_list[0])
        self.wait()
        for i in range(len(x_list)-1):
            self.add(x_list[i])
            self.play(ReplacementTransform(box_list[i],box_list[i+1]))
            self.wait()
        self.play(FadeOut(box_list[len(box_list)-1]))
        self.wait()
