function enter() {
    
    player1 = localStorage.getItem('Player 1');
    player2 = localStorage.getItem('Player 2');

    score_1 = 0;
    score_2 = 0;

    document.getElementById('name1').innerHTML = player1 + " : ";
    document.getElementById('name2').innerHTML =  player2 + " : ";

    document.getElementById('score1').innerHTML = score_1;
    document.getElementById('score2').innerHTML = score_2;

    number1 = document.getElementById("numberinput1").value;
    number2 = document.getElementById("numberinput2").value;
    answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + "Q. " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Enter & Check</button";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == answer)
    {
        if(answer_turn == "player1")
        {
            update_score_1 = score_1 +1;
            document.getElementById("score1").innerHTML = update_score_1;
        }
        else
        {
            update_score_2 = score_2 + 1;
            document.getElementById("score2").innerHTML = update_score_2;
        }
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("question").innerHTML = "Question Turn - " + player2;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("question").innerHTML = "Question Turn - " + player1;
        }
    }
}