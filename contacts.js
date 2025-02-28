document.getElementById("contact-form").addEventListener("submit", function(event) {
    var valid = true; 

    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Моля, въведете вашето име.");
        valid = false;
    }

    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        alert("Моля, въведете вашия имейл.");
        valid = false;
    } else if (!emailRegex.test(email)) {
        alert("Моля, въведете валиден имейл адрес.");
        valid = false;
    }

    var phone = document.getElementById("phone").value;
    if (phone !== "" && !/^\+?\d{10,15}$/.test(phone)) {
        alert("Моля, въведете валиден телефонен номер.");
        valid = false;
    }

    var subject = document.getElementById("subject").value;
    if (subject === "") {
        alert("Моля, въведете предмета на съобщението.");
        valid = false;
    }

    var message = document.getElementById("message").value;
    if (message === "") {
        alert("Моля, въведете съобщение.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
