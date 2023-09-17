function setCookies() {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
  
    document.cookie = "firstname=" + encodeURIComponent(firstname);
    document.cookie = "email=" + encodeURIComponent(email);
  }
  
  function showCookies() {
    var cookies = document.cookie.split(';');
  
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Cookies: ' + cookies.join(', ');
  
    document.body.appendChild(paragraph);
  }