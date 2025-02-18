
// Retrieve user data from localStorage
     document.addEventListener("DOMContentLoaded", function() {
         const userData = JSON.parse(localStorage.getItem("user"));

         if (userData && userData.email) {
             document.getElementById("username").textContent = userData.name || "User";
             document.getElementById("email").textContent = userData.email;
         } else {
             window.location.href = "login.html";
         }
     });

   
     document.getElementById("fileInput").addEventListener("change", function(event) {
         const file = event.target.files[0];
         if (file) {
             const reader = new FileReader();
             reader.onload = function(e) {
                 document.getElementById("profilePic").src = e.target.result;
                 // Optionally, you can save the new profile picture URL to localStorage or send it to the server
             };
             reader.readAsDataURL(file);
         }
     });
