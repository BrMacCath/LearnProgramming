from manim import *


## The goal of this is to create an animation to talk about different bit sizes.
bit_Sizes = ["Bit Sizes","8","16","32","64","128","Size"]
class bitSizes(Scene):
    def construct(self):
        self.wait()

        # Create the integer data.
        i_data = [Text("i") for _ in range(len(bit_Sizes)  )]
        list_is = VGroup(*i_data).shift(4*LEFT)

        # Arrange vertically
        list_is.arrange_in_grid(buff=.5,row_alignments="ccccccc",direction="d")

        # Create the unsigned integer data.
        u_data = [Text("u").next_to(i_data[i],buff=4*RIGHT) for i in range(len(bit_Sizes))]
        list_us = VGroup(*u_data)


        self.add(list_is[0])
        self.add(list_us[0])

        self.wait()
        titles = VGroup(*[Text(bit_Sizes(0)).next_to(i_data[0]),Text(bit_Sizes(0)).next_to(u_data[0])])
        self.play(Create(titles))

        for i in range(1,len(bit_Sizes)):
            self.wait()
            new_words = VGroup(*[])


        self.wait()