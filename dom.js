const container = document.querySelector(".container");

const containerRowTemplate = document.createElement("div");
containerRowTemplate.classList.add("container-row");

const gridBoxTemplate = document.createElement("div");
gridBoxTemplate.classList.add("grid-box");

for (let i = 0; i < 16; i++) {
    
    const containerRow = containerRowTemplate.cloneNode(true)

    container.appendChild(containerRow)

    for (let j = 0; j < 16; j++) {
        const gridBox = gridBoxTemplate.cloneNode(true);
        containerRow.appendChild(gridBox)
    }

}