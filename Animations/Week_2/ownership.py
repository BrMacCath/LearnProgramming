from manim import *


## The goal of this is to create an animation to talk about ownership in Rust.

class Memory(Scene):
    def construct(self):
        # Pieces
        MemoryAllocation = Text("Storing Memory").shift(2*UP).scale(2)
        StackVsHeap = Text("Stack Vs Heap").scale(1.5)

        # Scenes
        self.add(MemoryAllocation)
        self.wait()
        self.add(StackVsHeap)
        self.wait()


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

class RealLifeExample(Scene):
    def construct(self):
        ## The goal of this is to demonstrate properties
        ## of ownership in real life situations.
        
        # Pieces
        Aoife = Text("Aoife").shift(4*LEFT+2*UP).scale(2)
        hw_pic = ImageMobject("assets/images/homework.png")
        hw_pic.set_width(3).shift(4*LEFT)
        hw_deep_copy = hw_pic.copy()
        hw_start = hw_pic.copy()
        hw_end = hw_pic.copy().shift(8*RIGHT)
        Tadhg = Text("Tadhg").shift(4*RIGHT+2*UP).scale(2)

        # Scenes
        self.add(Aoife)
        self.add(Tadhg)
        self.add(hw_pic)
        self.wait()
        self.play(Transform(hw_pic,hw_end.copy()))
        self.wait()
        self.play(Transform(hw_pic,hw_start.copy()))
        self.wait()
        self.play(Transform(hw_deep_copy,hw_end.copy()))
        self.wait()
        self.play(FadeOut(hw_deep_copy))
        self.wait()
        self.play(Transform(hw_pic,hw_end))
        self.wait()
        self.play(Aoife.animate.set_opacity(.5))
        self.wait()


class Test(Scene):
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
        self.wait()
        self.add(rendered_code[0])
        self.wait()
        self.add(rendered_code[1])
        self.wait()
        
