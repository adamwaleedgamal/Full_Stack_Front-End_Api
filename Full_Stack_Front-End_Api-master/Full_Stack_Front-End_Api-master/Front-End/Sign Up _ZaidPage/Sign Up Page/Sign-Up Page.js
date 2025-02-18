// document.getElementById('signup-form').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
//     let message = document.getElementById('signup-message');

//     // Create message element if it doesn't exist
//     if (!message) {
//         message = document.createElement('p');
//         message.id = 'signup-message';
//         message.style.marginTop = '10px';
//         document.getElementById('signup-form').appendChild(message);
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         message.textContent = "Passwords do not match!";
//         message.style.color = "red";
//         return;
//     }

//     try {
//         const response = await fetch('https://cyclenyweb2.runasp.net/api/SignUp/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({ username: name, email, password, confirmPassword }),
//         });

//         const data = await response.json();
//         console.log('API Response:', data);

//         if (response.ok && (data.success || data.status === 'success' || data.message.includes('success'))) {
//             message.style.color = 'green';
//             message.textContent = 'Sign-up successful! Redirecting...';

//             setTimeout(() => {
//                 window.location.href = '../Home_Page/Home_Page/index.html'; // Redirect
//             }, 1500);
//         } else {
//             message.textContent = data.message || 'Sign-up failed';
//             message.style.color = 'red';
//         }
//     } catch (error) {
//         console.error('Fetch error:', error);
//         message.textContent = 'Error: ' + error.message;
//         message.style.color = 'red';
//     }
// });
