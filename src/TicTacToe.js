exports.createGame = () => ({
  state: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  /**
   * Converte a string XY para os indices [row, column]
   * @param {*} coords 
   * @returns [x, y]
   */
  coordsToXY (coords) {
    const charAt1 = coords.toLowerCase().charAt(1);
    const x = parseInt(charAt1) - 1;
    if (isNaN(x) || x < 0 || x > 2) {
      throw "Coordenadas erradas, as coordenadas teem de ser no firmadao A1, A2, A3, etc";
    }
    let y;
    const charAt0 = coords.toLowerCase().charAt(0);
    if (charAt0 == "a") {
      y = 0;
    } else if (charAt0 == "b") {
      y = 1;
    } else if (charAt0 == "c") {
      y = 2;
    } else {
      throw "Coordenadas erradas, as coordenadas teem de ser no firmadao A1, A2, A3, etc";
    }
    return [x, y];
  },

  /**
   * returns null if the game didn't ended or the Symbol of who won
   * @returns null, X ou O
   */
  getWhoWon: function () {
    for (let i = 0; i < 3; i++) { // horizontais
      if (this.state[i][0] != null && this.state[i][0] == this.state[i][1] && this.state[i][1] == this.state[i][2]) {
        return this.state[i][0];
      }
    }
    for (let i = 0; i < 3; i++) { // verticais
      if (this.state[0][i] != null && this.state[0][i] == this.state[1][i] && this.state[1][i] == this.state[2][i]) {
        return this.state[0][i];
      }
    }
    // diagonal 1
    if (this.state[0][0] != null && this.state[0][0] == this.state[1][1] && this.state[1][1] == this.state[2][2]) {
      return true;
    }
    // diagonal 2
    if (this.state[0][2] != null && this.state[0][2] == this.state[1][1] && this.state[1][1] == this.state[0][2]) {
      return this.state[0][2];
    }
    return null;
  },

  /**
   * este method vai colocar X na posição XY do jogo
   * o parametgro coords é uma string do tipo XY em que 
   * X pode ser A, B ou C e Y 1, 2 ou 3
   * Exemplo .setX('A2')
   * @param {string} coords 
   */
  setX: function (coords) {
    const [row, column] = this.coordsToXY(coords);
    if (this.state[row][column] != null) {
      throw "cenáça já preenchida";
    }
    this.state[row][column] = "X";
  },
  /**
   * este method vai colocar O na posição XY do jogo
   * o parametgro coords é uma string do tipo XY em que 
   * X pode ser A, B ou C e Y 1, 2 ou 3
   * Exemplo .setO('A2')
   * @param {string} coords 
   */
  setO: function (coords) {
    const [row, column] = this.coordsToXY(coords);
    if (this.state[row][column] != null) {
      throw "cenáça já preenchida";
    }
    this.state[row][column] = "O";
  },
  /**
   * este method retorna o que está na posição XY do jogo
   * o parametgro coords é uma string do tipo XY em que
   * X pode ser A, B ou C e Y 1, 2 ou 3
   * Exemplo .get('A2') pode retornar X, O ou null se estiver vazio
   * @param {string} coords 
   */
  get: function (coords) {
    const [row, column] = this.coordsToXY(coords);
    return this.state[row][column];
  },
  /**
   * Renderiza o jogo para a consola
   */
  render: function () {
    console.clear();
    console.log("     A   B   C");
    console.log();
    console.log(
      "1    " + this.state[0].map((e) => (e == null ? " " : e)).join(" | ")
    );
    console.log("    -----------");
    console.log(
      "2    " + this.state[1].map((e) => (e == null ? " " : e)).join(" | ")
    );
    console.log("    -----------");
    console.log(
      "3    " + this.state[2].map((e) => (e == null ? " " : e)).join(" | ")
    );
    console.log();
  },
});
