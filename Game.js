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