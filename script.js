document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, address })
        });

        const result = await response.json();

        if (response.ok) {
            responseMessage.innerText = `User : ${result.user.name} and Address saved successfully.`;
        } else {
            responseMessage.innerText = `Error: ${result.message}`;
        }

    } catch (error) {
        responseMessage.innerText = 'Failed to connect to server. Please try again later.';
    }

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
});