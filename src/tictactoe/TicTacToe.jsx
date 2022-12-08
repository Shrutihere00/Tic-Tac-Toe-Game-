import "./tictactoe.css";
import { useState } from "react";
const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cell, setCell] = useState(Array(9).fill(""));
const [winner,setWinner]=useState("")
  const checkForWinner=(filledCell)=>{
    let combos={
      across:[
        [0,1,2],[3,4,5],[6,7,8]
      ],
      down:[[0,3,6],[1,4,7],[2,5,8]],
      diagonal:[[0,4,8],[2,4,6]]
    }
    for (let combo in combos){
    combos[combo].forEach((pattern)=>{
      if(
        filledCell[pattern[0]]===''||
        filledCell[pattern[1]]===''||
        filledCell[pattern[2]]===''
      ){
        //do nothing
      }
     else if(
      filledCell[pattern[0]]===filledCell[pattern[1]]&&
      filledCell[pattern[1]]===filledCell[pattern[2]]
     ){
      setWinner(filledCell[pattern[0]])

     }
    })
    }
  }
  
  const handleClick = (num) => {
    let filledCell = [...cell];
    if(cell[num]!==""){
        alert("Already Filled")
        return;
    }

    if (turn === "X") {
      setTurn("O");
      filledCell[num] = "X";
    } else {
      setTurn("X");
      filledCell[num] = "O";
    }
    checkForWinner(filledCell)
    setCell(filledCell);
  };
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cell[num]}</td>;
  };
  const handleRestart=()=>{
    setWinner(null);
    setCell(Array(9).fill(""));
  }

  return (
    <div className="tictactoe">
      <table>
        Turn:{turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner&&(<>
      <p>{winner} is the Winner</p>
      <button onClick={()=>handleRestart()}>Play Again</button>
      </>)}
    </div>
  );
};

export default TicTacToe;
