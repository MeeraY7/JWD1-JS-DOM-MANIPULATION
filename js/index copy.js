document.addEventListener('DOMContentLoaded', function () {
  let name = document.querySelector('#about > h3');
  let aboutParagraph = document.querySelector('#about > p');
  let ageGroup = document.querySelector('#about > span.age-range');
  let interestsParagraph = document.querySelector('#interests > p');
  let submitBtn = document.querySelector('#submitBtn');

  submitBtn.onclick = function () {
    let fullName = document.querySelector('#name').value;
    console.log(fullName);
    let ageRange = document.querySelector('#ageRange').value;
    let aboutYou = document.querySelector('#aboutYou').value;
    let interests = document.querySelector('#yourInterests').value;
    //Inject the values into the DOM
    name.innerText = fullName;
    ageGroup.innerText = ageRange;
    aboutParagraph.innerText = aboutYou;
    interestsParagraph.innerText = interests;
  };
});
