
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('login-message');

        fetch('https://cyclenyweb2.runasp.net/api/Login/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('🔍 API Response:', data);

            if (data.status === true) {
                message.style.color = 'green';
                message.textContent = 'Login successful! Redirecting...';

                // Store user data in localStorage
                const userData = {
                    email: email,   // Storing email
                     name: data.name // If API returns a name, store it
                };
                localStorage.setItem('user', JSON.stringify(userData));

                // Redirect to profile page
                setTimeout(() => {
                    window.location.href = '../Home_Page/Home_Page/index.html';
                }, 1500);
            } else {
                message.style.color = 'red';
                message.textContent = data.message || 'Invalid email or password';
            }
        })
        .catch(error => {
            console.error('❌ Fetch error:', error);
            message.style.color = 'red';
            message.textContent = 'Error: ' + error.message;
        });
    });
  