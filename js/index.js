document.addEventListener('DOMContentLoaded', function () {
  /*
    Steps
    -----
    If login is successful:
    1) Capture the token from the response object and display it inside the #token element
    2) Then show the list of users from the 2nd endpoint, 
      starting at https://reqres.in/api/users?page=1
    3) Create pagination buttons for previous and next, use the query string '?page=' to show the relevant page of results
    4) Only show the pagination buttons if there are results on the page.
  */

  // This endpoint produces a successful login - returns a token
  const urlLogin = 'https://reqres.in/api/login';
  // This endpoint needs the query string ?page=n to work. Use it to paginate the data.
  const urlUsers = 'https://reqres.in/api/users';
  const token = document.querySelector('#token');
  const userList = document.querySelector('#results');
  const btnPrevious = document.querySelector('#btnPrevious');
  const btnNext = document.querySelector('#btnNext');
  let currentPage = 1;

  //form submit button
  const loginButton = document.querySelector('#button');

  //attach a click event handler to the button element
  loginButton.addEventListener('click', () => {
    // define variables to hold the values entered into the form
    // have to use an existing account, and password must not be blank, but seems to take anything else
    const email = 'michael.lawson@reqres.in';
    const password = document.querySelector('#password').value;

    //send post request to login endpoint
    axios({
      method: 'post',
      url: urlLogin,
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        // this is where the action happens
        console.log(response);
        // Grab the token from response and inject it into the badge element (#token) on the page
        token.innerText = response.data.token;
        // Get the full list of users on the server
        axios({
          method: 'get',
          url: `${urlUsers}?page=1`,
        }).then((response) => {
          console.log(response);
          // call the displayResults function, passing in the response object
          displayResults(response.data.data);
        });
      })
      .catch((err) => {
        // Do something for an error here
        console.log(err);
      });
  });

  /*{id: 1, email: "george.bluth@reqres.in", first_name: "George", last_name: "Bluth", 
  avatar: "https://reqres.in/img/faces/1-image.jpg"} */

  const displayResults = (results) => {
    /*
      Map over the data array (see Array.prototype.map) and create an ES6 template literal which you will 
      inject into the #results element using innerHTML.
    */
    console.log(results);
    let resultsHTML = '';
    results.map((user) => {
      resultsHTML += `
        <div class="list-group-item">
          <p>${user.first_name} ${user.last_name}</p>
        </div>
      `;
    });
    userList.innerHTML = resultsHTML;
  };

  btnPrevious.addEventListener('click', () => {
    // decrement currentPage
    if (currentPage > 1) {
      --currentPage;
    } else {
      currentPage = 1;
    }
    axios({
      method: 'get',
      url: `${urlUsers}?page=${currentPage}`,
    }).then((response) => {
      console.log(response);
      // call the displayResults function, passing in the response object
      displayResults(response.data.data);
    });
  });

  btnNext.addEventListener('click', () => {
    // increment currentPage
    ++currentPage;
    axios({
      method: 'get',
      url: `${urlUsers}?page=${currentPage}`,
    }).then((response) => {
      console.log(response);
      // call the displayResults function, passing in the response object
      if (response.data.data.length > 0) {
        displayResults(response.data.data);
      } else {
        userList.innerHTML = '<p>End of records</p>';
      }
    });
  });
});
