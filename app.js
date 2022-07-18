let Name = document.querySelector('#nameForm')
let Team = document.querySelector('#teamForm')
let Mail = document.querySelector('#mailTo')
let ButtonForm = document.getElementById('submit');
let CheckboxForm = document.getElementById('cbox');
let Conditions = document.querySelector("#Conditions");

window.addEventListener("load", function() {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        draggable: true,
        dots: "#dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
    });
});


ButtonForm.addEventListener("click", function(event) {
    event.preventDefault();
});

function sendMail() {
    if (CheckboxForm.checked) {
        console.log(Mail.value);
        let tempParms = {
            from_name: Name.value,
            to_name: Team.value,
            mail: Mail.value,
        };
        emailjs.send("gmail", "template_flipa", tempParms).then(function(res) {
            console.log("success", res.status);
            ButtonForm.innerHTML = "Enviado!";
            Conditions.innerHTML = " ";
        });
    } else {
        Conditions.innerHTML =
            "<p>tenes que aceptar los terminos y condiciones 😊</p>";
        Conditions.style.color = "white";
    }
}
