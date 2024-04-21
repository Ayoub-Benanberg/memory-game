const container = document.createElement("div");

const select = document.createElement("select");
select.setAttribute("id", "selected-Format");
select.style.marginRight = "8px";


//get the selected value to know how many blocks i need 
select.addEventListener("change" , function(){
  const selectedValue = select.value;
  console.log(selectedValue)

  // block.innerText = selectedValue
})


const options = ["Select format", "3x2", "4x2", "4x3", "4x4"];
options.forEach(function(optionText) {
  const option = document.createElement("option");
  option.text = optionText;
  select.appendChild(option);

});



// the block container that gonna containe the blocks
const blocksContainer = document.createElement("div");
blocksContainer.setAttribute("class","block-container")
blocksContainer.style.display = "flex";
blocksContainer.style.flexDirection = "column";



const block = document.createElement("div");
block.setAttribute("class","block")

const rows = document.createElement("div");
rows.setAttribute("class","rows");
rows.style.display = "flex";
rows.appendChild(block);


const generatbtn = document.createElement("button");
generatbtn.innerText = "Generate";


document.body.appendChild(container);
container.appendChild(select);
container.appendChild(generatbtn);
container.appendChild(blocksContainer);
blocksContainer.appendChild(rows);


