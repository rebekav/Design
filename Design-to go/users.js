var firebaseURL = "https://bookstore-6100c-default-rtdb.firebaseio.com"

var userId= [];
var users = {};
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {  
        userIds = [];        
        removeTableRows('allusers');

        users = JSON.parse(this.responseText);  

        
        for (var id in users) {
            var user = users[id];
            console.log(user);
            appendKorisniciRow('allusers', user);
            
            
            userIds.push(id);
        }
    }
}

xhttp.open('GET', firebaseURL + '/korisnici.json');
xhttp.send();

function removeTableRows(tBody) {
    var tBody = document.getElementById(tBody);
    while (tBody.firstChild) {
        tBody.removeChild(tBody.lastChild);
    }
}

function appendKorisniciRow(position, user) {
    var row = document.createElement('tr');

    var td1 = document.createElement('td');
    td1.innerText = user.ime;
    row.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerText = user.prezime;
    row.appendChild(td2);

    var td3 = document.createElement('td');
    td3.innerText = user.adresa;
    row.appendChild(td3);

    var td4 = document.createElement('td');
    td4.innerText = user.datumRodjenja;
    row.appendChild(td4);

    var td5 = document.createElement('td');
    td5.innerText = user.email;
    row.appendChild(td5);

    var td6 = document.createElement('td');
    td6.innerText = user.telefon;
    row.appendChild(td6);

    var td7 = document.createElement('td');
    td7.innerText = user.username;
    row.appendChild(td7);

    var td8 = document.createElement('td');
    var link = "editUser.html";
    var aTag = document.createElement('a');
    aTag.setAttribute('href',link);
    aTag.innerHTML = 'Edit user';
    td8.appendChild(aTag);
    row.appendChild(td8);



    document.getElementById(position).appendChild(row);
}