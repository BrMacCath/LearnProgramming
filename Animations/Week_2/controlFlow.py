from manim import *

class IfStatements(Scene):
    def construct(self):
        cdTitle = Text("Control Flow").shift(2*UP).scale(2)
        self.add(cdTitle)
        self.wait()
        scenario = Text("Scenario").shift(2*LEFT)
        strings = ["Methods of","control flow"]
        
