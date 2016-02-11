//alert("hello");
//console.log("hello");

function play(){
	$("#computer_rock").hide();
	$("#computer_paper").hide();
	$("#computer_scissors").hide();

	$("#user_rock").hide();
	$("#user_paper").hide();
	$("#user_scissors").hide();

	var user_input = $("#user-input");
	var user_move  = user_input.val();
	console.log("user_move: ", user_move);
	var possible_moves = ["rock","paper","scissors"];

	var i = Math.floor((Math.random() * 3));
	console.log(i);
	var computer_move = possible_moves[i];
	console.log(computer_move);

	var outcome;

	console.log("#computer_"+computer_move);

	if(computer_move === user_move){
		outcome = "draw";
	}else {
		if(user_move === "rock"){
			$("#computer_"+computer_move).show();
			$("#user_"+user_move).show();
			if(computer_move === "paper"){
				outcome = "Computer wins";
			}else{
				outcome = "User wins";
			}
		}else if(user_move === "paper"){
			$("#computer_"+computer_move).show();
			$("#user_"+user_move).show();
			if(computer_move === "scissors"){
				outcome = "Computer wins";
			}else{
				outcome = "User wins";
			}

		}else if(user_move === "scissors"){
			$("#computer_"+computer_move).show();
			$("#user_"+user_move).show();
			if(computer_move === "rock"){
				outcome = "Computer wins";
			}else{
				outcome = "User wins";
			}

		}else{
			outcome = "You're not playing the game."
		}

	}

	console.log(outcome);

	//$("#computer_move").html("<b>Computer: </b>"+computer_move);
	$("#outcome").html("<b>Outcome: </b>"+outcome);

}



// var x = Math.floor((Math.random() * 3) + 1);
// if(x == 1){
// }else if(x == 2){
// }else if(x == 3){
// }


//$("#headerid").html(x);
