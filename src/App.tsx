import Crossword from "@funifier/react-crossword";
import React from "react";

export default function App() {
  const data = {
    across: {
      1: {
        clue: "one plus one",
        answer: "TWO",
        row: 0,
        col: 0,
      },
      4: {
        clue: "a female parent",
        answer: "MOTHER",
        row: 2,
        col: 1,
      },
      7: {
        clue: "opposite of 'close'",
        answer: "OPEN",
        row: 4,
        col: 2,
      },
    },
    down: {
      2: {
        clue: "three minus two",
        answer: "ONE",
        row: 0,
        col: 2,
      },
      3: {
        clue: "a flying mammal",
        answer: "BAT",
        row: 1,
        col: 3,
      },
      5: {
        clue: "a large, gray animal",
        answer: "ELEPHANT",
        row: 2,
        col: 5,
      },
      6: {
        clue: "where you might take a shower",
        answer: "BATHROOM",
        row: 3,
        col: 4,
      },
    },
  };
  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ width: "70%", height: "70%" }}>
        <Crossword
          data={data}
          onAnswerComplete={(d, n, c, s) => {
            console.log("dncs", d, n, c, s);
          }}
        />
      </div>
    </div>
  );
}
