function newOrder(){
    let name = document.getElementById("Name").value;
    let size = document.getElementById("Pizza Size").value;
    let toppings = document.getElementById("toppings").value;

    let orders = document.getElementById("orders");
    
    //create a new row
    let newRow = orders.insertRow(-1)
    
    let newNm = newRow.insertCell(0).appendChild(document.createTextNode(name));
    let newSz = newRow.insertCell(1).appendChild(document.createTextNode(size));
    let newTp = newRow.insertCell(2).appendChild(document.createTextNode(toppings));
}

let orderButton = document.getElementById("order-button");
orderButton.addEventListener("click", (event) => {
    event.preventDefault();
    newOrder();
});

