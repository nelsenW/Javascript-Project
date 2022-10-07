import GameView from "./scripts/game_view.js"


document.addEventListener("DOMContentLoaded", () =>{
    const startGame = document.getElementById("startgame")
    const startMenu = document.querySelector(".start-menu")
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let newGameView = new GameView(ctx, canvas);
    
    startGame.addEventListener("click", () => {
        startMenu.style.display = "none"
        newGameView.start(); 
    })
})