console.log("Hi")


//boolean will decide if the intial story beat for each choice is said
var firstMessage = true;
//will hold the value of each choice made by the user
var choice;

function start(){
    firstChoice();
};


function firstChoice(){
    //if the function must be repeated, the initial text explaining what happened is unecessary
    //(see final else statement for more understanding)
    if(firstMessage == true){
        println("A or B");
    }
    //choice = user input?

    if(choice == "A" || choice == "a"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if choice was A
        choseA();
    }else if(choice == "B" || choice == "b"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if the choice was B
        choseB();
    }else{
        //if the user inputs something other than A or B, it will tell them to choose either of the choices
        //and will repeat the function, making the first message of this function unnecessary
        println("That is not an option. A or B?")
        firstMessage = false;
    }
};

    //is called if the users choice was A
function choseA(){
    if(firstMessage == true){
        println("This is what happened. Now C or D?");
    }
    //choice = user input?

    if(choice == "C" || choice == "c"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if choice was C
        choseC();
    }else if(choice == "D" || choice == "d"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if the choice was d
        choseD();
    }else{
        //if the user inputs something other than C or D, it will tell them to choose either of the choices
        //and will repeat the function, making the first message of this function unnecessary
        println("That is not an option. C or D?")
        firstMessage = false;
    }
};

function choseB(){
    if(firstMessage == true){
        println("This is what happened. Now E or F?");
    }
    //choice = user input?

    if(choice == "E" || choice == "e"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if choice was E
        choseE();
    }else if(choice == "F" || choice == "f"){
        //in the event that the boolean was made false by the final else statement, 
        //this returns it to true, allowing the next function to have its initial explanation
        firstMessage = true;
        //calls the function for if the choice was F
        choseF();
    }else{
        //if the user inputs something other than C or D, it will tell them to choose either of the choices
        //and will repeat the function, making the first message of this function unnecessary
        println("That is not an option. E or F?")
        firstMessage = false;
    }

    //Leads to the first ending
    function choseC(){
        println("Ending 1");    
    }

    //Leads to the second ending
    function choseD(){    
       println("Ending 2");
    }

    //Leads to the third ending
    function choseE(){
        println("Ending 3");
    }

    //Leads to the fourth ending
    function choseF(){
        println("Ending 4");
    }
};

var form = d3.select("form");

form.on("change",inputname);

function inputname(){
    d3.event.preventDefault()

    var aa = d3.select("#formname");

    var aaa = aa.property("value");
    
    console.log(aaa);
};
