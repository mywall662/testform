document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    fetch('https://script.google.com/macros/s/AKfycbzP94x0sxlmg-M60xBhLOaefujzJHjpjlLTx0hh797e2a3LkGVTJPPB9FpVhPPObBoyxg/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
});
