player1 = localStorage.getItem("Player 1");
player2 = localStorage.getItem("Player 2");

score_1 = 0;
score_2 = 0;

document.getElementById("name1").innerHTML = player1 + " : ";
document.getElementById("name2").innerHTML =  player2 + " : ";

document.getElementById("score1").innerHTML = score_1;
document.getElementById("score2").innerHTML = score_2;

document.getElementById("question").innerHTML = "Question Turn - " + player1;
document.getElementById("answer").innerHTML = "Answer Turn - " + player2;

function enter() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in Lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    divide_by_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(divide_by_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word'> Q.    "+ remove_charAt3+"</h4>";
    input_box = "<br> Answer :   <input type= 'text' id = 'input_box'>";
    check_button = "<br> <br><button class = 'btn btn-info' onclick='enter()'>Enter & Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";

}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in Lower Case - " + answer);

    if(answer == word)
    {

        if(answer_turn == "player1")
        {

            score_1 = score_1 +1;
            document.getElementById("score1").innerHTML = score_1;
        }
       else
       {

        score_2 = score_2 +1;
        document.getElementById("score2").innerHTML = score_2;
       }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn - " + player2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn - " + player1;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1;
    }

    document.getElementById("output").innerHTML = "";
}

