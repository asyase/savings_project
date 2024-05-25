'use strict';

// create blocks for passengers, euro-passengers, and cargo
let passengers = `
<div class="form-container">
  <form action="#" method="POST" class="form form_passengers" name="passengers" id="passengers">
    <div class="form__dest">
      <div class="departure">Germany</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Saint Petersburg</div>
    </div>

    <div class="input-line">
      <label for="date">Date of Trip:*</label>
      <input class="date" id="date" type="text" name="date" required>
    </div>

    <div class="input-line">
      <label for="places">Number of Passengers:*</label>
      <select id="places" name="places" required>
        <option value="">Select Number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="more">More than 4 - specify in comments</option>
      </select>
    </div>

    <div class="input-line">
      <label for="address">Your Address with Zip Code:*</label>
      <input name="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Your Phone Number:*</label>
      <input id="tel" type="tel" name="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Do You Have Luggage?*</label>
      <select id="luggage" name="luggage" required>
        <option value="">Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" cols="40" rows="2"></textarea>
    </div>

    <button class="submit-btn" name="passengers-submit" type="submit">Submit Application</button>

    <div class="order__footer">
      <div class="confidentiality">By clicking the button, you agree to the processing of personal data</div>
      <div class="required-fields">Fields marked with an asterisk * are required</div>
    </div>
  </form>
</div>
`;

let euroPassengers = `
<div class="form-container">
  <form action="#" method="POST" class="form form_euro-passengers" name="euroPassengers" id="euroPassengers">
    <div class="input-line">
      <label for="goto">Destination: *</label>
      <input id="goto" type="text" name="goto" required>
    </div>

    <div class="input-line">
      <label for="date">Desired Date of Trip:*</label>
      <input class="date" id="date" type="text" name="date" required>
    </div>

    <div class="input-line">
      <label for="places">Number of Passengers:*</label>
      <select id="places" name="places" required>
        <option value="">Select Number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4 or more">4 or more - specify in comments</option>
        <option value="cargo">Cargo Transport</option>
      </select>
    </div>

    <div class="input-line">
      <label for="address">Your Address with Zip Code:*</label>
      <input id="address" type="text" name="address" required>
    </div>

    <div class="input-line">
      <label for="tel">Your Phone Number:*</label>
      <input id="tel" type="tel" name="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Do You Have Luggage?*</label>
      <select id="luggage" name="luggage" required>
        <option value="">Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" cols="40" rows="2"></textarea>
    </div>

    <button class="submit-btn" name="euro-passengers-submit" type="submit">Submit Application</button>

    <div class="order__footer">
      <div class="confidentiality">By clicking the button, you agree to the processing of personal data</div>
      <div class="required-fields">Fields marked with an asterisk * are required</div>
    </div>
  </form>
</div>
`;

let cargo = `
<div class="form-container">
  <form action="#" method="POST" class="form form_cargo" name="cargo" id="cargo">
    <div class="form__dest">
      <div class="departure">Germany</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Saint Petersburg</div>
    </div>

    <div class="input-line">
      <label for="date">Shipping Date:*</label>
      <input class="date" id="date" name="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="cargo-type">Type of Cargo:*</label>
      <select id="cargo-type" name="cargoType" required>
        <option value="">Select Type of Cargo</option>
        <option value="letter">Letter</option>
        <option value="parcel">Parcel</option>
        <option value="medicine">Medicine</option>
        <option value="animal">Animal</option>
        <option value="ashes">Ashes</option>
        <option value="other">Other - specify in comments</option>
      </select>
    </div>

    <div class="input-line">
      <label for="weight">Approximate Weight of Cargo:*</label>
      <input id="weight" name="weight" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Your Phone Number:*</label>
      <input id="tel" name="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" cols="40" rows="4"></textarea>
    </div>

    <button class="submit-btn" name="cargo-submit">Submit Application</button>

    <div class="order__footer">
      <div class="confidentiality">By clicking the button, you agree to the processing of personal data</div>
      <div class="required-fields">Fields marked with an asterisk * are required</div>
    </div>
  </form>
</div>
`;

let boxArr = document.querySelectorAll('.order__container');
let orderBtnArr = document.querySelectorAll(".order__button");
let passengersBtnArr = document.querySelectorAll('.order__passengers');
let euroPassengersBtnArr = document.querySelectorAll('.order__euro-passengers');
let cargoBtnArr = document.querySelectorAll('.order__cargo');

// function - clean contents of the block
function removeOrderContents() {
  let orderContentsArr = document.querySelectorAll('.block');
  for (let orderContents of orderContentsArr) {
    orderContents.remove();
  }
}

// function - add contents to the block passengers, Euro passengers, cargo
function addOrderContents(blockValue) {
  for (let box of boxArr) {
    let block = document.createElement('div');
    block.className = 'block';
    block.innerHTML = blockValue;
    box.append(block);
  }
}

// function - create calendar
function createCalendar() {
  flatpickr('.date', {
    altInput: true,
    altFormat: 'j F Y',
    dateFormat: 'd-m-Y',
    minDate: 'today',
    locale: 'en',
    disable: [
      function(date) {
        if (!document.querySelector('.departure')) {
          return;
        } else if (document.querySelector('.departure').textContent === 'Germany') {
          return (date.getDay() !== 3);
        } else if (document.querySelector('.departure').textContent === 'Saint Petersburg') {
          return (date.getDay() !== 6);
        }
      }
    ]
  });
}

// function - change destinations
function reverse() {
  let reverseBtnArr = document.querySelectorAll('.reverse-btn');
  let departureArr = document.querySelectorAll('.departure');
  let arrivalArr = document.querySelectorAll('.arrival');
  for (let btn of reverseBtnArr) {
    btn.addEventListener('click', function() {
      for (let departure of departureArr) {
        for (let arrival of arrivalArr) {
          [
            departure.textContent,
            arrival.textContent
          ] = [
            arrival.textContent,
            departure.textContent
          ];
          createCalendar();
        }
      }
    });
  }
}

// add block to the page
window.addEventListener('load', function() {
  passengersBtnArr.forEach((item) => item.classList.add('checked'));
  addOrderContents(passengers);
  reverse();
  createCalendar();
  getFields(passengers);
});

// change block contents
orderBtnArr.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    removeOrderContents();

    if (event.target.classList.contains('order__passengers')) {
      passengersBtnArr.forEach((item) => item.classList.add('checked'));
      euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
      cargoBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(passengers);
      reverse();
      createCalendar();
      getFields(passengers);

    } else if (event.target.classList.contains('order__euro-passengers')) {
      euroPassengersBtnArr.forEach((item) => item.classList.add('checked'));
      passengersBtnArr.forEach((item) => item.classList.remove('checked'));
      cargoBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(euroPassengers);
      createCalendar();
      getFields(euroPassengers);

    } else if (event.target.classList.contains('order__cargo')) {
      cargoBtnArr.forEach((item) => item.classList.add('checked'));
      passengersBtnArr.forEach((item) => item.classList.remove('checked'));
      euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(cargo);
      reverse();
      createCalendar();
      getFields(cargo);
    }
  });
});

// getting form fields
function getFields(form) {

  if (form === passengers) {
    form = document.forms.passengers;
  } else if (form === euroPassengers) {
    form = document.forms.euroPassengers;
  } else if (form === cargo) {
    form = document.forms.cargo;
  }

  form.addEventListener('submit', formSend);

  async function formSend(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let formName = form.id;
    formData.append('formName', formName);
    let departure = form.querySelector('.departure') ? form.querySelector('.departure').textContent : '';
    formData.append('departure', departure);
    console.log(formData.get('formName'));

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();

    } else {
      alert('Error, please try again in a few minutes');
    }
  }
}
