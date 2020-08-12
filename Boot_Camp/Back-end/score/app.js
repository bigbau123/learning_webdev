// Additional variables
let finish = false;
let player_1 = document.querySelector('#player1');
let player_2 = document.querySelector('#player2'); 
let goal_tag = document.querySelector('#goal');


// Obtain initial score
var score_1 = parseInt(player_1.textContent);
var score_2 = parseInt(player_2.textContent);
var goal = parseInt(goal_tag.textContent);


/************ Functions  ***************************/
// Increment score
function increment(player) {
    if (score_1 === goal || score_2 === goal)
        return;
    else {if (player===1)
        player_1.textContent = ++score_1;
        if (score_1 === goal)
            player_1.classList.add("winner");
    else if (player===2)
        player_2.textContent = ++score_2;}
        if (score_2 === goal)
            player_2.classList.add("winner");
}

// Reset scores
function reset() {
    score_1 = 0;
    score_2 = 0;

    player_1.classList.remove('winner');
    player_2.classList.remove('winner');
    player_1.textContent = score_1;
    player_2.textContent = score_2;
    
}

// Change goal
function change_goal(value) {
    goal = parseInt(value);
    goal_tag.textContent = value;
    reset();
}

/************** EVENTS *****************************/
// Player 1
var tag = document.getElementsByName('btn')[0];
tag.addEventListener('click', function() {
    increment(1);
});

// Player 2
var tag = document.getElementsByName('btn')[1];
tag.addEventListener('click', function() {
    increment(2);
});

// Reset button
var tag = document.getElementsByName('reset')[0];
tag.addEventListener('click', function() {
    reset();
});

var tag = document.querySelector('#goal_input');
tag.addEventListener('keydown', function(event) {
    if (event.key === 'Enter')
        change_goal(tag.value);
});
