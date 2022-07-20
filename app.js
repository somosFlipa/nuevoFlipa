let team = document.querySelector('#service').value

let ButtonForm = document.getElementById('submit');
let CheckboxForm = document.getElementById('cbox');
let Conditions = document.querySelector("#condition");


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

const btn = document.getElementById('button');
console.log()
document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
        if (CheckboxForm.checked && team != "Selecciona") {
            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_6uvofny';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });

        } else {
            Conditions.innerHTML = "<p>Recorda selccionar una opcion y aceptar los terminos y condiciones 😊</p>";
            Conditions.style.color = "white";
        }
    });