from manim import *

## This is to talk about the notation of functions in Rust

class FunctionNotation(Scene):
    def construct(self):
        # Pieces
        func = Text("Function")
        inputText = Text(": Inputs")
        arrow = Tex("\to")
        outputText = Text("Outputs")
        fn = Text("fn")
        inputparenthese = Text("(Inputs)")

        # Scenes
        self.add(arrow)
        self.wait()