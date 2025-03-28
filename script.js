fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('location').textContent = `${data.city}, ${data.country_name}`;
    })
    .catch(error => console.error('Error:', error));
