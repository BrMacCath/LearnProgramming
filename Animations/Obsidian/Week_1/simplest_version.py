from manim import *
config.background_color = "white"


# Put the updaters on the hastags and then position the other 
# pieces relative to them..

class Overview_Sketch(Scene):

    CONFIG ={
        "color": BLACK
    }    
    def construct(self):
        def update_space(mob,next_to_target,space_value_trackers):
            distance_buff = sum([space.get_value() for space in space_value_trackers])
            mob.next_to(next_to_target,direction=DOWN,buff=distance_buff)
        
        def convert_heading(pos,text,i):
            heading_num = Text("{i}. ".format(i=i+1),color = BLACK).add_updater(lambda mob: mob.next_to(pos,buff=7))
            tempText = text.copy()
            tempText.clear_updaters()
            tempText.add_updater(lambda mob: mob.next_to(heading_num))
            self.play(ReplacementTransform(pos.copy(),heading_num),ReplacementTransform(text.copy(),tempText))

        def create_titles(titles):
            i=0
            heading_nums = VGroup()
            heading_texts= VGroup()
            for title in titles:
                pos,text = title
                convert_heading(pos,text,i)
                self.wait()
                i += 1


        ## Updaters
        head_space_1 = ValueTracker(.2)
        head_space_2 = ValueTracker(.2)
        heading2_space_1 = ValueTracker(0)
        heading2_space_2 = ValueTracker(0)
        

        h1_1to2 = [head_space_1,heading2_space_1,heading2_space_2]
        h1_2to3 = [head_space_2]
        ## Pieces
        # Starting off
        Explain = Text("Explaining The problem").scale(3)
        title = Text("Table of contents",color=BLACK).scale(1.5).shift(3.25*UP)
        mark_down_title = Text("Markdown",color=BLACK).scale(1.25).shift(2.25*UP+ 3.5*LEFT)
        table_of_contents =Text("Content Table",color=BLACK).scale(1.25).shift(2.25*UP+ 3.5*RIGHT)
        separating_line = Line((0,2.5,0),(0,-4,0),color=BLACK)
        
        # Markdown headings
        h1_1 = Text("# ",color=BLACK).shift(1.5*UP+ 6.5*LEFT)
        h1_1Text =Text("First Heading",color=BLACK).next_to(h1_1)
        first_heading = VGroup(h1_1,h1_1Text)

        h1_2 = Text("# ",color=BLACK).add_updater(lambda mob: update_space(mob,h1_1,h1_1to2))
        h1_2Text = Text("Second Heading",color=BLACK).add_updater(lambda mob: mob.next_to(h1_2))
        second_heading = VGroup(h1_2,h1_2Text)

        h1_3 = Text("# ",color=BLACK).add_updater(lambda mob: update_space(mob,h1_2,h1_2to3))
        h1_3Text = Text("Third Heading",color=BLACK).add_updater(lambda mob: mob.next_to(h1_3))
        third_heading = VGroup(h1_3,h1_3Text)
        headings = VGroup(first_heading,second_heading,third_heading) 

        # Subheadings
        h2_1 = Text("## ",color=BLACK).next_to(h1_1,direction=DOWN).shift(RIGHT)
        h2_1Text= Text(" Sub Heading",color=BLACK).add_updater(lambda mob: mob.next_to(h2_1))
        sub_heading_1 = VGroup(h2_1,h2_1Text)

        h2_2 = Text("## ",color=BLACK).next_to(h2_1,direction=DOWN)
        h2_2Text= Text(" Sub Heading",color=BLACK).add_updater(lambda mob: mob.next_to(h2_2))
        sub_heading_2 = VGroup(h2_2,h2_2Text)

        sub_heading_Group = VGroup(sub_heading_1,sub_heading_2)

        h2_3 = Text("## ",color=BLACK).next_to(h2_2,direction=DOWN,buff=.75)
        h2_3Text =Text(" Sub Heading",color=BLACK).add_updater(lambda mob: mob.next_to(h2_3))
        sub_heading_3 = VGroup(h2_3,h2_3Text)
        sub_heading_Group_2 = VGroup(sub_heading_3)
        self.wait()
        self.play(Create(Explain))
        self.wait()
        self.play(FadeOut(Explain))
        self.wait()
        self.play(Create(title))
        self.wait()
        self.play(Write(mark_down_title))
        self.wait()
        self.play(ReplacementTransform(mark_down_title.copy(),table_of_contents))
        self.wait()
        self.play(Create(separating_line))
        self.wait()
        self.play(Create(headings,lag_ratio=.2))
        self.wait()
        create_titles(headings)
        self.wait()
        self.play(heading2_space_1.animate.set_value(.65),Create(sub_heading_1))
        self.wait()

        self.play(heading2_space_2.animate.set_value(.65),Create(sub_heading_2))
        self.wait()
        create_titles(sub_heading_Group)
        self.wait()
        self.play(head_space_2.animate.set_value(.75),Create(sub_heading_3))
        self.wait()
        create_titles(sub_heading_Group_2)
        self.wait()

