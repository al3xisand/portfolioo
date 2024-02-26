"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var emailjs = require("emailjs-com"); // Assuming you have emailjs-com installed
var btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    btn.value = 'Sending...';
    var serviceID = 'default_service';
    var templateID = 'template_sg84iws';
    emailjs.sendForm(serviceID, templateID, _this)
        .then(function () {
        btn.value = 'Send Email';
        alert('Sent!');
    })
        .catch(function (err) {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});
