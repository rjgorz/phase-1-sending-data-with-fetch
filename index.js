// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(object => {
        const h1 = document.createElement('h1');
        h1.textContent = object.id;
        document.querySelector('body').appendChild(h1);
    })
    .catch(error => {
        const h1 = document.createElement('h1');
        h1.textContent = error.message;
        document.querySelector('body').appendChild(h1);
    });
}

submitData('Robert', 'robert@gmail.com');