fetch('https://script.google.com/macros/s/AKfycbxjddmlH3SOixo-nIZje4qbxOlma5SBjevqpo4GBr_t3y0W6X0-4tX5z_JL99JC6oGdgg/exec', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(formData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
