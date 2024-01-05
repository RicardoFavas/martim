exports.createGame = () => ({
  colNames: 'ABCDEFGH',
  symbols: {
    'p': '♟', 'n': '♞', 'b': '♝', 'r': '♜',  'q': '♛', 'k': '♚',
    'P': '♟', 'N': '♘', 'B': '♗', 'R': '♖', 'K': '♚',  'Q': '♕',
    null: ' ',
  },
  color: (fg, bg, c) => {
    return '\x1B[31m' + c
  },
  state: [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ],

  bgWhite: () => {
    process.stdout.write("\x1b[47m")
  },
  bgBlack: () => {
    process.stdout.write("\x1b[40m")
  },
  bgReset: () => {
    process.stdout.write("\x1b[0m");
  },
  render: function () {
    let w = true;
    console.clear();
    console.log();
    for (let i = 0; i < this.state.length; i++) {
      const row = this.state[i];
      process.stdout.write(' ' + (8 - i) + ' ');
      for (let j = 0; j < row.length; j++) {
        const pieace = this.state[i][j];
        this.bgReset();
        if (w) {
          this.bgWhite()
        } else {
          this.bgBlack()
        }
        process.stdout.write(' ' + this.symbols[pieace] + '  ');
        this.bgReset()
        w = !w;
      }
      w = !w;
      console.log('');
    }
    console.log('    ' + this.colNames.split('').join('   '));
    console.log();
  },
  printFen: () => {
    let fen = 'zlol ehs gay';
    console.log(fen);
  }
});
