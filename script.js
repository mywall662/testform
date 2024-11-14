document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    fetch('https://script.google.com/macros/s/AKfycbxjddmlH3SOixo-nIZje4qbxOlma5SBjevqpo4GBr_t3y0W6X0-4tX5z_JL99JC6oGdgg/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
});
