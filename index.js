"use strict";
/**
 * @example
 * // should return player1 (the winner)
 * rockpaperscissors(2, 1)
 * @example
 * // should return tie (it's a tie)
 * rockpaperscissors(1, 1)
 * @description Main function, you need to pass 2 numbers.
 * @param {number} player1 1 for rock, 2 for paper, 3 for scissors
 * @param {number} player2 1 for rock, 2 for paper, 3 for scissors
 * @returns {string} either "player1", "player2" (whoever won) or "tie" for a tie.
 */
exports.__esModule = true;
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
exports["default"] = rockpaperscissors;
