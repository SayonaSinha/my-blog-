player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number_1 =document.getElementById("number_1").value;
    number_2 =document.getElementById("number_2").value;
    actual_answer = parsInt(number1) * parseInt(number2);
    question_word = "<h4 id='word_display'>"+number1+"x"+number2+"</h4>";
    input_box= "<br>Answer ; <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button onclick='check()' class'btn btn-info'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value ="";
    document.getElementById("number_2").value ="";

}

question_turn = "player1"
answer_turn ="player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score =player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player2_score;
        }
    }
    
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name ;

    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name ;

    }

}
