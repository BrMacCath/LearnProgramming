from manim import *

class factorial(Scene):
    def construct(self):
        ## Pieces
        orig_n_factorial = Text("n!").shift(2*LEFT)
        equal_n = MathTex(r"=n \times").next_to(orig_n_factorial)
        transform_piece =  MathTex(r"(n-1)\times\dots\times 1").next_to(equal_n)
        transform_to = MathTex(r"(n-1)!").next_to(equal_n)

        # To keep the Transformation we only want to select the (n-1)* ...*1



        self.add(orig_n_factorial)
        self.wait()
        self.play(Create(equal_n))
        self.play(Create(transform_piece))
        
        self.wait()
        self.play(Transform(transform_piece,transform_to))
        self.wait()