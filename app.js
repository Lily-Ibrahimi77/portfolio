
// contact form javascript
const username = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('my-form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (username.value === '' || username.value == null) {
    messages.push('Name is required')
  }

  if (email.value == '') {
    messages.push('Email is required')
  }

  if (messages.length < 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

//navigation menu Jquery
const hamburgerMenu = document.querySelector('header.menu-toggle-btn');
const navContent = document.querySelector('header .navigation-menu')

// jquery btn temp
$("#jQuery").click(function(){
  $(this).css({"backgroundColor" : "pink"});
});
