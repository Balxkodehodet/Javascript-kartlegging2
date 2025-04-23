const togglebtn = document.getElementById("toggle-btn");

function UpdateTime() {
  let today = new Date();

  let day = today.getDay();

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  let IDtoday = document.getElementById("Date");

  const daylist = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];

  let textcontent = (IDtoday.textContent = "Idag er " + daylist[day] + ".");

  let prepand = hour >= 12 ? " PM " : " AM ";

  hour = hour >= 12 ? hour - 12 : hour;

  if (hour === 0 && prepand === " PM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Noon ";
    } else {
      hour = 12;
      prepand = " PM ";
    }
  }

  //Check for  special cases when hour is 0
  if (hour === 0 && prepand === " AM ") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = " Midnight";
    } else {
      hour = 12;
      prepand = " AM";
    }
  }

  IDtoday.textContent =
    textcontent +
    " Nåværende tid: " +
    hour +
    prepand +
    " : " +
    minute +
    " : " +
    second;

  // Call this function again on the next frame
  requestAnimationFrame(UpdateTime);
}

requestAnimationFrame(UpdateTime);

function themeSwitcher() {
  document.body.classList.toggle("dark-mode");
  console.log("Button clicked");
}

togglebtn.addEventListener("click", themeSwitcher);
