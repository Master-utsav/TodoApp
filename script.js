document.addEventListener('DOMContentLoaded', () => {
    let n = 1;
    const userInput = document.getElementById("inputTask");
    const userInputBtn = document.getElementById("inputTaskButton");
    const addNewDiv = document.getElementById("itemContainer");
    const BtnImage = "bg-[url('button.png')]";

    function addingNewDiv(userType, n) {
        const newDiv = document.createElement("div");
        newDiv.id = `newDiv${n}`;
        newDiv.className = "flex justify-between items-center";
        newDiv.innerHTML = `
            <div id="clickDivForDone${n}" class="flex justify-start items-center">
                <button id="btnForMark${n}" class="bg-slate-100 rounded-full mr-2 border-2 border-blue-600 bg-cover h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"></button>
                <p id="lineThroughPara${n}" class="cursor-pointer items-center text-center sm:text-xl text-md sm:font-semibold text-violet-300 justify-center mb-1">
                    ${userType}
                </p>
            </div>
            <button id="removeDivBtn${n}" class="bg-slate-500 hover:text-red-400 text-white font-bold text-lg bg-opacity-25 rounded-full items-end border-2 border-none bg-cover h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]">X</button>
        `;
        addNewDiv.appendChild(newDiv);

        const markButton = newDiv.querySelector(`#btnForMark${n}`);
        const removeButton = newDiv.querySelector(`#removeDivBtn${n}`);
        const paraDecoAfterDone = newDiv.querySelector(`#lineThroughPara${n}`);

        let markBtnState = false; 

        markButton.addEventListener('click', () => {
            if (!markBtnState) {
                markButton.classList.remove("bg-slate-100", "border-blue-600");
                markButton.classList.add(BtnImage, "border-none", "scale-150");
                paraDecoAfterDone.classList.add("line-through");
                markBtnState = true;
            } else {
                markButton.classList.remove(BtnImage, "border-none", "scale-150");
                markButton.classList.add("bg-slate-100", "border-blue-600");
                paraDecoAfterDone.classList.remove("line-through");
                markBtnState = false;
            }
        });

        removeButton.addEventListener('click', () => {
            addNewDiv.removeChild(newDiv);
        });
    }

    userInputBtn.addEventListener('click', () => {
        if (userInput.value !== "") {
            const userType = userInput.value;
            addingNewDiv(userType, n);
            userInput.value = "";
            n++;
        } else {
            alert("Please enter the task");
        }
    });
});
