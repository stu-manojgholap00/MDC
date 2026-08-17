/* =========================================
   MATOSHREE DENTAL CLINIC
   JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ================= APPOINTMENT FORM ================= */

const appointmentForm =
    document.getElementById("appointmentForm");

const formMessage =
    document.getElementById("formMessage");


if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const date =
                document.getElementById("date").value;

            const service =
                document.getElementById("service").value;


            if (!name || !phone || !date || !service) {

                formMessage.textContent =
                    "Please fill all the details.";

                return;

            }


            if (phone.length < 10) {

                formMessage.textContent =
                    "Please enter a valid mobile number.";

                return;

            }


            const selectedDate =
                new Date(date);

            const today =
                new Date();

            today.setHours(0, 0, 0, 0);


            if (selectedDate < today) {

                formMessage.textContent =
                    "Please select a future appointment date.";

                return;

            }


            formMessage.textContent =
                "Thank you! Your appointment request has been received.";


            appointmentForm.reset();

        }
    );

}


/* ================= SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .doctor-profile, .why-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    element.classList.add("animate");

    observer.observe(element);

});