const game = new Game();
game.start();
function reset()
{
    location.reload();
}
function Game() 
{
const board = new Board();
const computer = new Computer(board);
const human = new Human(board);
let turn = 0;

this.start = function()
{
    const config = { childList: true};
    const observer = new MutationObserver(() => takeTurn());
    board.positions.forEach((el) => observer.observe(el, config));
    takeTurn();
}
function takeTurn()
{
    if(board.winner())
    {
        return;
    }
    if(turn % 2 == 0)
    {
        human.takeTurn();
    }
    else{
        computer.takeTurn();
    }
    turn++;
}
function Board()
{
    this.positions = Array.from(document.querySelectorAll('.col'));
    this.winner = function()
    {
        let win = false;
        const winPositions = [
            [0,1,2],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,4,6],
            [2,5,8],
            [3,4,5],
            [6,7,8]
        ];
        const positions = this.positions;
        winPositions.forEach((combo) => {
            const pos0 = positions[combo[0]].innerText;
            const pos1 = positions[combo[1]].innerText;
            const pos2 = positions[combo[2]].innerText;
            const isWinner = pos0 !== '' && pos0 === pos1 && pos1 === pos2 ;
            if(isWinner)
            {
                win = true;
                combo.forEach((index) => {
                    positions[index].className += ' pass';
                });
            }
        });
        return win;
    }
}
function Computer(board)
{
    this.takeTurn = function()
    {
      const remainingPositions = board.positions.filter((pos) => pos.innerText == ''); 
      const move = Math.floor(Math.random() * remainingPositions.length); 
      remainingPositions[move].innerText = 'O';
    }
}
function Human(board)
{
    this.takeTurn = function()
    {
      board.positions.forEach((el) => el.addEventListener('click', handleTurn)); 
       
    }
}
function handleTurn(task)
{
    task.target.innerText= 'X';
    board.positions.forEach(el => el.removeEventListener('click', handleTurn));

}



}
