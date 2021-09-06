async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#unInput').value.trim();
    const password = document.querySelector('#pwInput').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#unSignUpInput').value.trim();
    const password = document.querySelector('#pwSignUpInput').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.loginBtnDiv').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signUpAnchor').addEventListener('submit', signupFormHandler);
  