document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    fetch('https://script.google.com/macros/s/AKfycbxlWYLM-Z8xQ_NZR9zIjFNlMqeV8A8hqY8L_iKlfeSILZshRNkhah-biV99D7Z1F32EFQ/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
});