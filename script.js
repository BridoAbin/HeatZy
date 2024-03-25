document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
  
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const bio = document.getElementById('bio').value;
            const profileImg = document.getElementById('profile-img').files[0]; //  profile image file
  
            const formData = new FormData(); // Create a FormData object
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('bio', bio);
            formData.append('profileImg', profileImg); 
  
            fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                body: formData // Send the FormData object instead of JSON string
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                window.location.href = 'signin.html';
            })
            .catch(error => console.error('Error:', error));
        });
    }

  if (signinForm) {
      signinForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          // Submit the form data to the server using fetch API
          fetch('http://localhost:3000/api/users/signin', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Invalid email or password');
              }
              return response.json();
          })
          .then(data => {
              alert('Sign in successful!');
              // Redirect or perform any actions upon successful sign-in
          })
          .catch(error => {
              alert(error.message); // Display error message to the user
              console.error('Error:', error)
          });
      });
  }
});
