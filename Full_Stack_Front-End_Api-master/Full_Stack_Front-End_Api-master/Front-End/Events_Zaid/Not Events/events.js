const API_BASE = "https://cyclenyprojj.runasp.net/api/Events";
     let eventsData = [];

     async function fetchEvents() {
         try {
             const response = await fetch(`${API_BASE}/GetAllEvents`);
             eventsData = await response.json();
             displayEvents(eventsData);
         } catch (error) {
             console.error("Error fetching events:", error);
         }
     }

     function displayEvents(events) {
        const eventsList = document.getElementById("eventsList");
        eventsList.innerHTML = "";
    
        if (events.length === 0) {
            document.getElementById("noEvents").classList.remove("hidden");
            return;
        }
        document.getElementById("noEvents").classList.add("hidden");
    
        const userEmail = localStorage.getItem("userEmail"); // Get logged-in user email
        const isAdmin = userEmail === "Admin@gmail.com"; // Check if user is admin
    
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("bg-white", "p-4", "rounded", "shadow");
    
            let buttonsHTML = "";
            if (isAdmin) {
                buttonsHTML = `
                    <button onclick="editEvent(${event.id})" class="bg-blue-600 text-white px-2 py-1 mt-2 rounded">Edit</button>
                    <button onclick="deleteEvent(${event.id})" class="bg-red-600 text-white px-2 py-1 mt-2 rounded">Delete</button>
                `;
            }
    
            eventCard.innerHTML = `
                <img src="${event.imageUrl}" class="w-full h-40 object-cover rounded mb-2" alt="Event image for ${event.name}">
                <h3 class="text-xl font-bold">${event.name}</h3>
                <p>${event.date} - ${event.location}</p>
                ${buttonsHTML} 
            `;
    
            eventsList.appendChild(eventCard);
        });
    
        // Hide "Add Event" button for non-admin users
        if (!isAdmin) {
            document.getElementById("addEventBtn").style.display = "none";
        }
    }
    
     function searchEvents() {
         const query = document.getElementById("searchInput").value.toLowerCase();
         const filteredEvents = eventsData.filter(event =>
             event.name.toLowerCase().includes(query) ||
             event.location.toLowerCase().includes(query)
         );
         displayEvents(filteredEvents);
     }

     function showAddEventForm() {
         document.getElementById("formTitle").innerText = "Add Event";
         document.getElementById("eventId").value = "";
         document.getElementById("eventName").value = "";
         document.getElementById("eventDate").value = "";
         document.getElementById("eventLocation").value = "";
         document.getElementById("eventImage").value = "";
         document.getElementById("eventForm").classList.remove("hidden");
     }
     
     function hideEventForm() {
         document.getElementById("eventForm").classList.add("hidden");
     }

     async function editEvent(id) {
         const event = eventsData.find(e => e.id === id);
         if (!event) return;

         document.getElementById("formTitle").innerText = "Edit Event";
         document.getElementById("eventId").value = event.id;
         document.getElementById("eventName").value = event.name;
         document.getElementById("eventDate").value = event.date;
         document.getElementById("eventLocation").value = event.location;
         document.getElementById("eventImage").value = event.imageUrl;
         document.getElementById("eventForm").classList.remove("hidden");
     }

     async function saveEvent() {
         const eventId = document.getElementById("eventId").value;
         const event = {
             name: document.getElementById("eventName").value,
             imageUrl: document.getElementById("eventImage").value,
             date: document.getElementById("eventDate").value,
             location: document.getElementById("eventLocation").value
         };
         
         const url = eventId ? `${API_BASE}/UpdateEvent?id=${eventId}` : `${API_BASE}/AddEvent`;
         const method = eventId ? "PUT" : "POST";
         
         await fetch(url, {
             method: method,
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(event)
         });
         hideEventForm();
         fetchEvents();
     }

     async function deleteEvent(eventId) {
         if (!confirm("Are you sure you want to delete this event?")) return;
         await fetch(`${API_BASE}/DeleteEvent?id=${eventId}`, { method: "DELETE" });
         fetchEvents();
     }

     fetchEvents();