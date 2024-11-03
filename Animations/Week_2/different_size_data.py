from manim import *


## The goal of this is to create an animation to talk about different bit sizes.

class bitSizes(Scene):
    def construct(self):
        list_is = [Text("i") for _ in range(5)]
        self.play(Create(Tex("i")))
        self.wait()