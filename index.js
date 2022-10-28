"use strict";
function rockpaperscissors(player1, player2) {
    if (player1 === player2) {
        return "tie";
    }
    else if (player1 === 1 && player2 === 2) {
        return "player2";
    }
    else if (player1 === 2 && player2 === 1) {
        return "player1";
    }
    else if (player1 === 1 && player2 === 3) {
        return "player1";
    }
    else if (player1 === 3 && player2 === 1) {
        return "player2";
    }
    else if (player1 === 2 && player2 === 3) {
        return "player2";
    }
    else if (player1 === 3 && player2 === 2) {
        return "player1";
    }
    else {
        throw new Error("Make sure player1 and player2 have right numbers.");
    }
}
export const __esModule = true;
export default rockpaperscissors;
