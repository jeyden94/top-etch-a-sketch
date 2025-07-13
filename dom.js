const container = document.querySelector(".container");

const containerRowTemplate = document.createElement("div");
containerRowTemplate.classList.add("container-row");

const gridBoxTemplate = document.createElement("div");
gridBoxTemplate.classList.add("grid-box");

function createGrid () {
    container.innerHTML = ""
    let squares = prompt("How many square per side of the new grid?", "#")
    if (squares < 101) {
        for (let i = 0; i < squares; i++) {
            
            const containerRow = containerRowTemplate.cloneNode(true)
            // containerRow.classList.add(`container-row-${i+1}`)
            container.appendChild(containerRow)

            for (let j = 0; j < squares; j++) {
                const gridBox = gridBoxTemplate.cloneNode(true);
                // gridBox.classList.add(`grid-box-${j+1}-row-${i+1}`)
                gridBox.addEventListener("mouseenter", () => gridBox.style.backgroundColor = "black")
                containerRow.appendChild(gridBox)
            }
        } 
    } else {
        alert("Input must be less than 100")
    } 

}


