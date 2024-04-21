const container = document.createElement("div");
const select = document.createElement("select");
select.setAttribute("id", "selected-Format");
select.style.marginRight = "8px";


const options = ["Select format", "3x2", "4x2", "4x3", "4x4"];
options.forEach(function (optionText) {
  const option = document.createElement("option");
  option.text = optionText;
  select.appendChild(option);
});


const blocksContainer = document.createElement("div");
blocksContainer.style.display = "flex";
blocksContainer.style.flexDirection = "column";


const rows = document.createElement("div");
rows.style.display = "flex";
rows.appendChild(block);


const block = document.createElement("div");







const generatbtn = document.createElement("button");
generatbtn.innerText = "Generate";


document.body.appendChild(container);
container.appendChild(select);
container.appendChild(generatbtn);
container.appendChild(blocksContainer)
blocksContainer.appendChild(rows)
