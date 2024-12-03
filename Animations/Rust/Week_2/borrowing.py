from manim import *

class Borrowing(Scene):
    def construct(self):
        ## Pieces
        borrow_title = Text("Borrowing").shift(2*UP).scale(2)
        yellow_square = Square(side_length=1, color="YELLOW").shift(LEFT)
        blue_square = Square(side_length=1, color="BLUE").shift(RIGHT)

        ## Scenes
        self.add(borrow_title)
        self.wait()
        self.play(Create(yellow_square),Create(blue_square))
        self.wait()


class print_num(Scene):
    def construct(self):
        code ='''fn main(){
    let x:i8 = 5;
    print_num(&x)
}

fn print_num(x: &i8){
    println!("{x}");
}
        '''
        
        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        indicate_list= [rendered_code[2][5][14],rendered_code[2][5][13]]

        orig_x = rendered_code[2][1][8]
        orig_box = SurroundingRectangle(orig_x)
        x_list = [rendered_code[2][2][15],rendered_code[2][5][13],rendered_code[2][5][13],rendered_code[2][6][15]]
        Transform_list = [orig_box] + [SurroundingRectangle(x,color="Blue") for x in x_list]
        x_list = [orig_box] + x_list


        ## Scenes
        self.add(rendered_code)
        self.wait() 

        

        for x in indicate_list:
            self.play(Indicate(x))
            self.wait()

        self.play(Create(Transform_list[0]))
        self.add(Transform_list[0].copy())
        for i in range(len(Transform_list)-1):
            self.play(Create(x_list[i].copy()))
            self.play(ReplacementTransform(Transform_list[i],Transform_list[i+1]))
            self.wait()

        self.play(FadeOut(Transform_list[-1]))
        self.wait()


class mut_keyword(Scene):
    def construct(self):
        ## Pieces
        fun_name = Text("fn fn_name").shift(2*LEFT)
        open_parentheses = Text("(").next_to(fun_name,buff=.1)
        ampersand = Text("&").next_to(open_parentheses,buff=.1)
        mut_keyword_text = Text("mut variable)").next_to(ampersand,buff=.1)

        ## Scenes
        self.add(fun_name,open_parentheses,ampersand,mut_keyword_text)
        self.wait()
        self.play(Indicate(ampersand,scale_factor=2))
        self.wait()


class add_one(Scene):
    def construct(self):
        code ='''fn main(){
    let mut x:i8 = 5;
    add_one(&mut x)
}

fn add_one( x: &mut i8){
    x += 1;
}
        '''
        
        rendered_code = Code(code=code, tab_width=4, background="window",
                            language="rust", font="Monospace")
        indicate_list= [rendered_code[2][5][14],rendered_code[2][5][13]]

        orig_x = rendered_code[2][1][12]
        orig_box = SurroundingRectangle(orig_x)
        x_list = [rendered_code[2][2][17],rendered_code[2][5][12],rendered_code[2][6][5]]
        Transform_list = [orig_box] + [SurroundingRectangle(x,color="Blue") for x in x_list]
        x_list = [orig_box] + x_list


        ## Scenes
        self.add(rendered_code)
        self.wait() 

        

        self.play(Create(Transform_list[0]))
        self.add(Transform_list[0].copy())
        for i in range(len(Transform_list)-1):
            self.play(Create(x_list[i].copy()))
            self.play(ReplacementTransform(Transform_list[i],Transform_list[i+1]))
            self.wait()

        self.play(FadeOut(Transform_list[-1]))
        self.wait()


class Data_racing(Scene):
    def construct(self):
        mutable_var = Text("Mutable").shift(3*LEFT + 2*UP)
        mutable_condition= Text("One owner").next_to(mutable_var,direction=DOWN)
        immutable_var= Text("Immutable").shift(3*RIGHT + 2*UP)
        immutable_condition = Text("Multiple owners").next_to(immutable_var,direction=DOWN)

        self.add(mutable_var,mutable_condition,immutable_var,immutable_condition)