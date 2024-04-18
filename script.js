localStorage.setItem("turn", "X");
localStorage.setItem("game", "---------");

function fieldClick(id) {
  let turn = localStorage.getItem("turn");
  let game = localStorage.getItem("game");
  let button = document.getElementById(id);

  if (!button.innerHTML) {
    button.innerHTML = turn;

    if (turn == "X") {
      localStorage.setItem("turn", "O");
    } else {
      localStorage.setItem("turn", "X");
    }

    game = game.substring(0, id - 1) + turn + game.substring(id);
    localStorage.setItem("game", game);
    let winner = verifyWinner(game);

    setTimeout(function () {
      if (winner) {
        window.alert(winner + "venceu");
      }
    }, 200);   
  }
}

function verifyWinner(game) {
  let winner;
  winner = verifyRow(game);
  if (!winner) {
    winner = verifyCol(game);
  }
  if (!winner) {
    winner = verifyDiag(game);
  }

  return winner;
}

function verifyRow(game) {
  if (game[0] != "-" && game[0] == game[1] && game[0] == game[2]) {
    if (game[0] == "X") {
      return "X";
    } else {
      return "O";
    }
  }

  if (game[3] != "-" && game[3] == game[4] && game[3] == game[5]) {
    if (game[3] == "X") {
      return "X";
    } else {
      return "O";
    }
  }

  if (game[6] != "-" && game[6] == game[7] && game[6] == game[8]) {
    if (game[6] == "X") {
      return "X";
    } else {
      return "O";
    }
  }
  return;
}

function verifyCol(game) {
  if (game[0] != "-" && game[0] == game[3] && game[0] == game[6]) {
    if (game[0] == "X") {
      return "X";
    } else {
      return "O";
    }
  }

  if (game[1] != "-" && game[1] == game[4] && game[1] == game[7]) {
    if (game[1] == "X") {
      return "X";
    } else {
      return "O";
    }
  }

  if (game[2] != "-" && game[2] == game[5] && game[2] == game[8]) {
    if (game[2] == "X") {
      return "X";
    } else {
      return "O";
    }
  }
  return;
}

function verifyDiag(game) {
  if (game[0] != "-" && game[0] == game[4] && game[0] == game[8]) {
    if (game[0] == "X") {
      return "X";
    } else {
      return "O";
    }
  }

  if (game[2] != "-" && game[2] == game[4] && game[2] == game[6]) {
    if (game[2] == "X") {
      return "X";
    } else {
      return "O";
    }
  }
  return;
}

function reiniciar() {
  window.location.reload();
}
