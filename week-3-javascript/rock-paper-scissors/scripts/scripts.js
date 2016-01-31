//alert("hello");
//console.log("hello");

function play(){
	var user_input = $("#user-input");
	var user_move  = user_input.val();
	console.log("user_move: ", user_move);
	var possible_moves = ["rock","paper","scissors"];

	var i = Math.floor((Math.random() * 3));
	console.log(i);
	var computer_move = possible_moves[i];
	$("#computer_move").html("<img src='"+computer_move+".png'>");	
	console.log(computer_move);

	var outcome;

	if(computer_move === user_move){
		outcome = "draw";
	}else {
		if(user_move === "rock"){
			$("#user_move").html("<img src='rock.png'>");	
			if(computer_move === "paper"){
				outcome = "Computer wins";
			}else{
				outcome = "User wins";
			}
		}else if(user_move === "paper"){
			$("#user_move").html("<img src='paper.png'>");	
			if(computer_move === "scissors"){
				outcome = "Computer wins";
			}else{
				outcome = "User wins";
			}

		}else if(user_move === "scissors"){
			$("#user_move").html("<img src='scissors.png'>");	
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