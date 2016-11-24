var int = 100;

function drawMultiplicationTable() {
    var tableBody = document.getElementById("tableBody");

    printRows();

    function printRows() {
      for (var i = 1; i <= int; i++) {
        tableBody.innerHTML += `<tr id="tableBodyRow${i}"><td id="tableBodyRow${i}Collum${i}">${i}</td></tr>`;
      }
      printCollums();
    }

    function printCollums() {
      for (var i = 1; i <= int; i++) {
        document.getElementById("tableBodyRow" + i).innerHTML +=
        `<td id="tableBodyRow${i}Collum${i}">${i*Number(document.getElementById("tableBodyRow${i}Collum${i}").innerHTML)}</td>`;
      }
    }
}
