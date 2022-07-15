(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('4D8PJfNYxidc32JD-');
})();

function onSubmit(token) {
  console.log("pouet")
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
    });
  });
}

function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

window.addEventListener("DOMContentLoaded", (event) => {

  let mybutton = document.getElementById("btn-back-to-top");
  mybutton.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }); 

  $(document).scroll(function() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
    var scroll = $(window).scrollTop();
    document.getElementById("masthead").style.backgroundPosition = "center " +  (scroll *0.1) + "px";
  });

  const navToggler = document.querySelector('.nav-toggler');
  const navMenu = document.querySelector('.site-navbar ul');

  navToggler.addEventListener('click', function(){
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
  });

  $('.site-navbar a').on('click', function() {
    if(navMenu.classList.contains('open')) {
      navToggler.click();
    }
  });
  const element = document.querySelector('#message');

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

  async function writeEffect(el){

    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    let delay = 0;

    for (let i = 0; i < textArray.length; i++){
      
      if        (i > 0 && textArray[i-1] == '!') delay = 500;
      else if   (i > 0 && textArray[i-1] == ',') delay = 350;
      else      delay = 100;

      await sleep(delay);
      el.innerHTML += textArray[i];
    }    
  }
  writeEffect(element)

  $( "#gallery .item" ).hover(
    function() {
      $( '#gallery' ).addClass( "hover" );
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
      $( '#gallery' ).removeClass( "hover" );
    }
  );
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_pukcqwc', 'template_yl4p1di', this)
        .then(function() {
            alert("Votre message a bien été envoyé.")
        }, function(error) {
            alert("Une erreur s'est produite, veuillez réessayer.")
        });
  });

});