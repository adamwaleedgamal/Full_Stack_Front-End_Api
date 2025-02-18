
document.getElementById('makeOrderBtn').addEventListener('click', function() {
    document.getElementById('orderModal').classList.remove('hidden');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('orderModal').classList.add('hidden');
});

document.getElementById('closeSuccessModalBtn').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://formsubmit.co/ajax/adam.0522018@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            document.getElementById('orderModal').classList.add('hidden');
            document.getElementById('successModal').classList.remove('hidden');
            event.target.reset();
        }
    }).catch(error => {
        console.error('Failed to submit order:', error);
    });
});