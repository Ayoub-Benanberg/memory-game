// center everything in the body
const bodyStyle = document.body;
bodyStyle.style.backgroundColor = "#143109"
bodyStyle.style.display = 'flex';
bodyStyle.style.justifyContent="center";

const container = document.createElement("div");


const select = document.createElement("select");
select.setAttribute("id", "selected-Format");
select.style.marginRight = "8px";
select.style.marginBlock = "30px"


const options = ["Select format", "2x3", "2x4", "3x4", "4x4","5x4"];
options.forEach(function(optionText) {
  const option = document.createElement("option");
  option.text = optionText;
  select.appendChild(option);
});


const blocksContainer = document.createElement("div");
blocksContainer.setAttribute("class", "block-container");
blocksContainer.style.display = "flex";
blocksContainer.style.flexDirection = "column";


const generatbtn = document.createElement("button");
generatbtn.innerText = "Generate";

// add event listener to the generate button
generatbtn.addEventListener("click", function() {
  const selectedValue = select.value;
  generateBlocks(selectedValue);
});


// function to generate blocks based on the selected format
function generateBlocks(selectedValue) {
  // fixing the problem when u generate blocks
  blocksContainer.innerHTML = "";
  // get rows and columns from the select value
  const [rows, columns] = selectedValue.split("x").map(Number);

  // calculate the number of pairs 
  const numPairs = (rows * columns) / 2;


  // create an array of letters from A to Z
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // shuffle the letters' positions within the grid
  const shuffledLetters = letters.sort(() => Math.random());

  // take only the required number of pairs
  const pairs = shuffledLetters.slice(0, numPairs).flatMap(letter => [letter, letter]);

  // shuffle the pairs array
  pairs.sort(() => Math.random() - 0.5);

  // generate blocks based on the rows and columns in the select value
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "rows");
    row.style.display = "flex";

    for (let j = 0; j < columns; j++) {
      const block = document.createElement("div");
      block.style.width = "40px";
      block.style.height = "40px";
      block.style.backgroundColor = "#F7F7F7";


      
      block.style.margin = "3px";
      block.setAttribute("class", "block");
      block.style.textAlign = 'center';

      // add a pair of letters to the block
      const letter = pairs[i * columns + j];
      block.innerText = letter;

      row.appendChild(block);


    }

    blocksContainer.appendChild(row);
  }
}

document.body.appendChild(container);
container.appendChild(select);
container.appendChild(generatbtn);
container.appendChild(blocksContainer);
