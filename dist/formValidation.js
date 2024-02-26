
var btn = document.getElementById('button');
document.getElementById('form')
    .addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'Sending...';
    var serviceID = 'default_service';
    var templateID = 'template_sg84iws';
    emailjs.sendForm(serviceID, templateID, this)
        .then(function () {
        btn.value = 'Send Email';
        alert('Sent!');
    }, function (err) {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});
