function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'MNX-09-REV'; // Cambia esto por la contraseña correcta
    const messageDiv = document.getElementById('message');

    if (password === correctPassword) {
        window.location.href = 'final.html';
    } else {
        messageDiv.innerText = 'INCORRECTO';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("audio");
    audio.play();
});
