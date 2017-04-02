function whatToDrive(input) {
  var allowedToDriveBox = document.getElementById("allowedToDriveBox");
  allowedToDriveBox.innerHTML = "";
  var alder = Number(input.value);

  var vehicles = {
    bus: {
      img: "./img/bus.svg"
    },
    car: {
      img: "./img/car.svg"
    },
    scooter: {
      img: "./img/scooter.svg"
    }, 
    nothing: {
      img: "./img/sad-face.svg"
    }
  }

  if (alder <= 15) {
    allowedToDriveBox.innerHTML += `
    <div class="col-md-12 allowedToDriveCol">
      <img src="${vehicles.nothing.img}" alt="moped"/>
      <p>Du er ikke gammel nok til å kjøre noe som helst</p>
    </div>
    `;
  } else {
    if (alder >= 21) {
      allowedToDriveBox.innerHTML += `
      <div class="col-md-4 allowedToDriveCol">
        <img src="${vehicles.bus.img}" alt="buss"/>
        <p>Buss + alt det andre</p>
      </div>
      `;
    }
    if (alder >= 18) {
      allowedToDriveBox.innerHTML += `
      <div class="col-md-4 allowedToDriveCol">
        <img src="${vehicles.car.img}" alt="bil"/>
        <p>Personbil, varebil + alt det andre</p>
      </div>
      `;
    }
    if (alder >= 16) {
      allowedToDriveBox.innerHTML += `
      <div class="col-md-4 allowedToDriveCol">
        <img src="${vehicles.scooter.img}" alt="moped"/>
        <p>Moped eller lett motorsykkel.</p>
      </div>
      `;
    }
  }
}
