document.addEventListener('DOMContentLoaded', function () {
  /*
    Steps
    -----
    If login is successful:
    1) Capture the token from the response object and display it inside the #token element
    2) Then show the list of users from the 2nd endpoint, 
      starting at https://reqres.in/api/users?page=1
    3) Create pagination buttons for previous and next, use the query string '?page=' to show the relevant page of results
  */

  // This endpoint produces a successful login - returns a token
  const urlLogin = 'https://reqres.in/api/login';
  // This endpoint needs the query string ?page=n to work. Use it to paginate the data.
  const urlUsers = 'https://reqres.in/api/users?page=1';
  const token = document.querySelector('#token');

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

        // Get the full list of users on the server
        axios({
          method: 'get',
          url: urlUsers,
        }).then((response) => {
          console.log(response);
          // map over the data array and inject onto page using innerHTML
        });
      })
      .catch((err) => {
        // Do something for an error here
        console.log(err);
      });
  });
});
