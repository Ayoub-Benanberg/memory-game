const container = document.createElement("div");


const select = document.createElement("select");
select.setAttribute("id", "selected-Format");
select.style.marginRight = "8px";


const options = ["Select format", "2x3", "2x4", "3x4", "4x4"];
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

// Add event listener to the generate button
generatbtn.addEventListener("click", function() {
  const selectedValue = select.value;
  generateBlocks(selectedValue);
});


// Function to generate blocks based on the selected format
function generateBlocks(selectedValue) {
  // fixing the problem when u generate blocks
  blocksContainer.innerHTML = "";
  // get rows and columns from the select value
  const [rows, columns] = selectedValue.split("x").map(Number);


  // Generate blocks based on the rows and columns in the select value 
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "rows");
    row.style.display = "flex";

    for (let j = 0; j < columns; j++) {
      const block = document.createElement("div");
      block.style.width = "30px";
      block.style.height = "30px";
      block.style.backgroundColor = "red";
      block.style.margin = "3px";
      block.setAttribute("class", "block");
      
      
      // Randomly choose a letter
      const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

      // Place the randomly chosen letter in the block
      block.innerText = letter;
      block.style.textAlign = 'center';


      row.appendChild(block);


    }

    blocksContainer.appendChild(row);
  }
}


document.body.appendChild(container);
container.appendChild(select);
container.appendChild(generatbtn);
container.appendChild(blocksContainer);
