from manim import *


## The goal of this is to create an animation to talk about ownership in Rust.

class shadowing(Scene):
    def construct(self):
        self.wait()

        const = Text("Shadowing",color="purple").shift(3*UP).scale(2)
        code ='''fn main(){
    let x:i8 = 5;
    {
        let x:i8 = 9;
        // This is shadowing
    }
}

}
        '''

        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        # example= Text("let GLOBAL_VARIABLE")
        self.add(const)
        self.wait()
        self.add(rendered_code)
        self.wait()
        


