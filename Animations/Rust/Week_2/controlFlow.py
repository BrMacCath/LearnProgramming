from manim import *

class IfStatements(Scene):
    def construct(self):
        ## Part 1: Set up
        # Pieces
        cdTitle = Text("Control Flow").shift(2*UP).scale(2)
        scenario = Text("Scenario").shift(3*LEFT)
        strings = [Text("Methods of"),Text("control flow")]
        strings = VGroup(*strings).arrange_in_grid(buff=.5,row_alignments="ccc",direction="d").shift(3*RIGHT)
        arr = Arrow(scenario.get_right(), strings.get_left())
        
        # Scenes
        self.add(cdTitle)
        self.wait()
        self.play(FadeIn(scenario))
        self.wait()
        self.play(FadeIn(arr))
        self.wait()
        self.play(FadeIn(strings))
        self.wait()
        self.play(FadeOut(strings),FadeOut(arr),FadeOut(scenario),FadeOut(cdTitle))
        self.wait()

        ## Part 2: Introduction
        # Pieces
        IfTitle = Text("If statements").shift(3*UP).scale(2)
        name = Text("str = john").shift(1.75*UP+2*LEFT)
        ifname = Text("If str is a name {").shift(2*LEFT +UP)
        capStr = Text("str = CapitalizeStr(str)").shift(LEFT)
        endstr= Text("}").shift(DOWN + 3*LEFT)
        elseif = Text("else if (str is a capital){ ").next_to(endstr)
        elsestr = Text("str = CapitalizeStr(str)").shift(LEFT+2*DOWN)
        elseEnd = Text("}").shift(3*LEFT+3*DOWN)
        
        # Scenes
        self.play(FadeIn(IfTitle))
        self.wait(1)
        self.play(FadeIn(name))
        self.wait()
        self.play(FadeIn(ifname))
        self.wait()
        self.play(FadeIn(capStr),FadeIn(endstr))
        self.wait()
        self.play(FadeIn(elseif))
        self.wait()
        self.play(FadeIn(elsestr),FadeIn(elseEnd))
        self.wait()
        self.play(
            *[FadeOut(mob)for mob in self.mobjects]
        )

        ## Part 3: Using if to create variables
        # Pieces
        IfTitle = Text("Creating Variables").shift(3*UP).scale(2)
        example= Text(r"let variable = if condition {} else {}")
        
        # Scenes
        self.play(FadeIn(IfTitle))
        self.wait()
        self.play(Write(example))
        self.wait()

class Loops(Scene):
    def construct(self):
        ## Part 1: Intro
        #  Pieces
        loop = Text("Loop").shift(3*UP).scale(2)
        code ='''let mut counter = 0;
let example = loop{
    counter = counter + 1;
    if counter = 10 {
        break;
    }
}
        '''
        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        code =''''example: loop{
    let mut counter = 0;
    loop{
        counter +=1;
        if counter = 10 {
            break 'example;
        }
    }
}
        '''
        rendered_code2 = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")


        # Scenes

        self.add(loop)
        self.wait(2)
        self.play(FadeIn(rendered_code))
        self.wait()
        self.play(FadeOut(rendered_code))
        self.wait()
        self.play(FadeIn(rendered_code2))
        self.wait()
        self.play(FadeOut(rendered_code2))
        self.wait()


class WhileVsLoops(Scene):
    def construct(self):
        texts = [Text("While").scale(2),Text("Vs").scale(2),Text("Loops").scale(2)]
        texts_aligned = VGroup(*texts).arrange_in_grid(buff=.5,row_alignments="ccc",direction="d")
        self.add(texts_aligned)


class ForLoops(Scene):
    def construct(self):
        
        ## Pieces
        forTitle = Text("For Loops").shift(2*UP).scale(2)
        Texttt = "EXAMPLE"
        strExample = Text("example").shift(1*UP+2*LEFT) 
        
        ## Scenes
        self.add(forTitle)
        self.wait()
        self.play(FadeIn(strExample))
        self.wait()
        sur_rec = SurroundingRectangle(strExample[0])
        endChar = Text(Texttt[0]).next_to(strExample[0],direction=DOWN,buff=2)
        end_rec = SurroundingRectangle(endChar)
        self.play(Transform(strExample[0].copy(),endChar),Transform(sur_rec,end_rec))
        self.play(FadeOut(sur_rec))
        for i in range(1,len(Texttt)):
            sur_rec = SurroundingRectangle(strExample[i])
            endChar = Text(Texttt[i]).next_to(endChar,buff=.1)
            end_rec = SurroundingRectangle(endChar)
            self.play(Transform(strExample[i].copy(),endChar),Transform(sur_rec,end_rec))
            self.play(FadeOut(sur_rec))
