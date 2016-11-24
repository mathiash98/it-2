var $ = document.getElementById

var tickets = [{
    destination: "Oslo",
    quantity: 78,
    price: 350
}, {
    destination: "Voss",
    quantity: 32,
    price: 150
}, {
    destination: "Arna",
    quantity: 12,
    price: 43
}]

function writeTable() {
    for (var i in tickets) {
        console.log(tickets[i]);
        document.getElementById("ticketListBody").innerHTML += `
    <tr id="tickets[${i}]">
      <td class="mdl-data-table__cell--non-numeric">${tickets[i].destination}</td>
      <td id="tickets[${i}]Quantity">${tickets[i].quantity}</td>
      <td>${tickets[i].price}kr</td>
    </tr>
  `;
    }
}

function updateVal(fromID, toID) {
    toID.value = fromID.value;
}

function order() {
    var price = 0;
    var ticketsNum = document.getElementById("ticketsNumTxt").value;
    var discount = 0;
    if (ticketsNum >= 3 && ticketsNum < 5) discount = 0.9;
    else if (ticketsNum >= 5 && ticketsNum < 10) discount = 0.7;
    else if (ticketsNum >= 10) discount = 0.5;

    for (var i in tickets) {
        var ticketElement = document.getElementById("tickets["+i+"]");
        
        if (ticketElement.classList.contains("is-selected")) {
            console.log(tickets[i].destination, " is selected");

            if (ticketsNum <= tickets[i].quantity) {
                tickets[i].quantity -= ticketsNum;
                document.getElementById("tickets["+i+"]Quantity").innerHTML = tickets[i].quantity;
                price += ticketsNum * tickets[i].price * discount;
            } else {
              console.log("There are not enough quantity of tickets to", tickets[i].destination);
            }
        }
    }
        document.getElementById("ticketSystem").innerHTML += `
            Thanks for ordering ${ticketsNum} tickets for a total of ${price}kr you got ${100 - discount*100}% off.
        `;
        console.log(price);
}
