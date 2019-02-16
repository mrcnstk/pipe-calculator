
function addCuttingField(amountOfCuttingFields) {

    let newForm = document.createElement("form");
    newForm.setAttribute("id", "cut" + amountOfCuttingFields);

    let pipeInput = document.createElement("input");
    pipeInput.setAttribute("type", "text");
    pipeInput.setAttribute("name", "cpipe" + amountOfCuttingFields);

    let lengthInput = document.createElement("input");
    lengthInput.setAttribute("type", "text");
    lengthInput.setAttribute("name", "clength" + amountOfCuttingFields);

    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "text");
    quantityInput.setAttribute("name", "cquantity" + amountOfCuttingFields);

    newForm.appendChild(document.createTextNode("Rura:"));
    newForm.appendChild(pipeInput);
    newForm.appendChild(document.createTextNode("Długość:"));
    newForm.appendChild(lengthInput);
    newForm.appendChild(document.createTextNode("Ilość:"));
    newForm.appendChild(quantityInput);

    let cutDiv = document.getElementById("cutting");

    cutDiv.appendChild(newForm);
}

function removeCuttingField(amountOfCuttingFields) {
    if (amountOfCuttingFields <= 1) {
        return;
    } else {
        let form = document.getElementById("cut" + amountOfCuttingFields);
        form.parentNode.removeChild(form);
        return --amountOfCuttingFields;
    }

}

function addStorageField(amountOfStorageFields) {
    let newForm = document.createElement("form");
    newForm.setAttribute("id", "storage" + amountOfStorageFields);

    let pipeInput = document.createElement("input");
    pipeInput.setAttribute("type", "text");
    pipeInput.setAttribute("name", "spipe" + amountOfStorageFields);

    let lengthInput = document.createElement("input");
    lengthInput.setAttribute("type", "text");
    lengthInput.setAttribute("name", "slength" + amountOfStorageFields);

    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "text");
    quantityInput.setAttribute("name", "squantity" + amountOfStorageFields);

    newForm.appendChild(document.createTextNode("Rura:"));
    newForm.appendChild(pipeInput);
    newForm.appendChild(document.createTextNode("Długość:"));
    newForm.appendChild(lengthInput);
    newForm.appendChild(document.createTextNode("Ilość:"));
    newForm.appendChild(quantityInput);

    let storageDiv = document.getElementById("storage");

    storageDiv.appendChild(newForm);
}
function removeStorageField(amountOfStorageFields) {
    let form = document.getElementById("storage" + amountOfStorageFields);
    if (amountOfStorageFields <= 1) return;
    form.parentNode.removeChild(form);
    return --amountOfStorageFields;
}
function openSideWindow() {
    document.getElementById("cuttingList").style.width = "100%";
}
function closeSideWindow() {
    document.getElementById("cuttingList").style.width = "0";
}

window.onload = function () {

    let cAddButton = document.getElementById("addNextCut");
    let cDeleteButton = document.getElementById("deleteLastCut");
    let sAddButton = document.getElementById("addNextStorage");
    let sDeleteButton = document.getElementById("deleteLastStorage");
    let calculateButton = document.getElementById("calculate");
    let closingCross = document.getElementById("closingCross");
    let cutAmount = 1;
    let storageAmount = 1;

    cAddButton.addEventListener("click", function () {
        cutAmount++;
        addCuttingField(cutAmount);
    });
    cDeleteButton.addEventListener("click", function () {
        cutAmount = removeCuttingField(cutAmount);
    });
    sAddButton.addEventListener("click", function () {
        storageAmount++;
        addStorageField(storageAmount);
    });
    sDeleteButton.addEventListener("click", function () {
        storageAmount = removeStorageField(storageAmount);
    });
    calculateButton.addEventListener("click", function () {
        openSideWindow();
    });
    closingCross.addEventListener("click", function () {
        closeSideWindow();
    });
};