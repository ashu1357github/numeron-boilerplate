// Iteration 5: Store the player score and display it on the game over screen
let score44=localStorage.getItem("gameScore");
document.getElementById("score-board").innerText=score44;
document.getElementById("play-again-button").onclick=()=>{
    location.href="./game.html";
}
