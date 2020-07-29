document.addEventListener('DOMContentLoaded', function () {
  //define variables for the 4 dom elements where you will put the values entered via the form
  let nameEl = document.querySelector('#about > h3');
  let aboutEl = document.querySelector('#about > p');
  let ageEl = document.querySelector('#about > span.age-range');
  let interestsEl = document.querySelector('#interests');
  //form submit button
  let submitBtn = document.querySelector('#button');

  submitBtn.onclick = function () {
    /*
      define variables to hold the values entered into the form
    */
    let fullName = document.querySelector('#name').value;
    let aboutMe = document.querySelector('#aboutYou').value;
    let ageGroup = document.querySelector('#ageRange').value;
    let interests = document.querySelector('#interestsText').value;
    /*
      Inject the values into the DOM. Use the innerText property of each element.
      Assign the value you got from each form element to the variables for each
      of the 4 DOM elements defined earlier.
    */
    //let interestsCard = '<div class="text-centre">' + interests + '</div>';
    nameEl.innerText = fullName;
    aboutEl.innerText = aboutMe;
    ageEl.innerText = ageGroup;
    //interestsEl.innerHTML = interestsCard;
  };
});
