var korisniciURL = "https://bookstore-6100c-default-rtdb.firebaseio.com"
var xhttp = new XMLHttpRequest();
	xhttp.open('GET', korisniciURL + '/korisnici.json');
	xhttp.send();

var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('txtUsername').value.trim();
    var password = document.getElementById('txtPassword').value.trim();
    
    if(username == '' || password == '') {

        alert('You must enter all data.');

    }else {

        var request =  new XMLHttpRequest();

        request.onreadystatechange = function() {

            if(this.readyState == 4) {

                if(this.status == 200) {

                    var korisnici = JSON.parse(request.responseText);

                    var name = '';
					
					for(let korisnik in korisnici) {
						if(korisnici[korisnik].username == username && korisnici[korisnik].password == password) {
							
							name = korisnici[korisnik].name;
							console.log(korisnici);  
							break;
						}
					}
					
					if(name == '') {
						alert('Neispravni login podaci.');
					}else {
						
						window.location.replace(
							"bookstore.html?user=" + username
						);
					}
				}else {
					
					alert('GRESKA: ' + this.status)
				}
			}
		};
		
		// var url = loginForm.getAttribute('action');
		
		// request.open('GET', url);
		
		// request.send();
	}
});