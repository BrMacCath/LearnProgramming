from manim import *


## The goal of this is to create an animation to talk about ownership in Rust.

class Const(Scene):
    def construct(self):
        const = Text("const",color="purple").shift(2*UP).scale(2)
        example= Text("let GLOBAL_VARIABLE")
        self.add(const)
        self.wait()
        self.add(example)
        self.wait()


