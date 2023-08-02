const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('#contact-form');
const loader = document.querySelector('.lds-ripple');
const circles = document.querySelectorAll('.lds-ripple div');

// sending form data to backend
const form = document.querySelector("#contact-form");
form.addEventListener("submit", async (e) => {
  try{
    e.preventDefault();
    loader.style.display = "block";
    circles[0].classList.add("run-animation");
    circles[1].classList.add("run-animation");

    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const message = document.querySelector("#messageArea").value;
  
    const newData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newData),
    }
  
    const response = await fetch("https://portfolio-v0vw.onrender.com/api/v1/createUser", options);
    const res = await response.json();
    console.log("data", res.status);

    loader.style.display = "none";
    circles[0].classList.remove("run-animation");
    circles[1].classList.remove("run-animation");
    alert("Form is submitted successfully");
  }
  catch(err){
    console.log("error occurred while submitting the form")
  }
});

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
});

function closeMobileNav(){
  mobileNav.classList.remove('active');
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener("click", closeMobileNav);


// auto typing text
var typeData = new Typed(".role", {
    strings: [
      "Web Developer",
      "Frontend Developer",
      "Full Stack Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

