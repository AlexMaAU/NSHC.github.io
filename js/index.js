//page load
window.onload = function() {
    let bodyNode = document.querySelector('.page_container')
    makeAppoinment_btn_onload()
    navbarOnLoad()
    pageScrollOnLoad()
    docProfileOnLoad()
    serviceListOnLoad()
    sendContactForm()
    setTimeout(function(){
        bodyNode.classList.remove('noshow')
        bodyNode.style.transition = 'opacity 1s'
    }, 200)
}

//header Make appointment button
function makeAppoinment_btn_onload() {
    document.querySelector('.button_makeAppointment').addEventListener('click', function(){
        let element = document.querySelector('.main_section--contact');
        let topOffset = element.offsetTop;
        window.scrollTo({ left: 0, top: `${topOffset-50}`, behavior: "smooth" })
    })
}

// Nav
function navbarOnLoad() {
    let nav_div_box = document.querySelectorAll('.header_nav--list a')
    nav_div_box.forEach(item=>{
        item.addEventListener('click', function() {
            //kill all
            //nav_div_box.children
            nav_div_box.forEach(item=>{
                item.className = ''
            })
            //recover self
            this.className = 'active'
        })
    })
}

//EmailJS package - send form data to email
function sendContactForm() {
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_0o4la1f', 'template_xl25dal', this, '5zSMVKGCq4GF5Vn-p')
            .then(function() {
                console.log('Email Send SUCCESS!');
            }, function(error) {
                console.log('Email FAILED TO SEND', error);
            });
    });
}
