var firebaseUrl = 'https://bookstore-6100c-default-rtdb.firebaseio.com';

function getAllBooks() {

    var request = new XMLHttpRequest();
    var listaKnjiga = []

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                knjige = JSON.parse(request.responseText);
                for (k in knjige) {
                    knjige[k]['id'] = k
                    listaKnjiga.push(knjige[k]);
                }
                var sveKnjige = document.getElementsByClassName('knjige')[0];
                for (i = 0; i < listaKnjiga.length; i++) {
                    var divKnjige = document.createElement('div');
                    divKnjige.setAttribute('id', 'divKnjiga');
                    sveKnjige.appendChild(divKnjige);
                    var imgTag = document.createElement('img');
                    imgTag.src = listaKnjiga[i]['slika']+'.jpg';
                    divKnjige.appendChild(imgTag);
                    //aTag.setAttribute('href', 'book1review.html?id='+listaKnjiga[i]['id']);
                    //aTag.appendChild(imgTag);
                    var h3Tag = document.createElement('h3');
                    h3Tag.innerText = listaKnjiga[i]['naziv'];
                    divKnjige.appendChild(h3Tag);
                    var pTag = document.createElement('p');
                    pTag.innerText = listaKnjiga[i]['autor'];
                    divKnjige.appendChild(pTag);
                    var pTag = document.createElement('p');
                    pTag.innerText = listaKnjiga[i]['cena'] + 'RSD';
                    divKnjige.appendChild(pTag)

                }
                
            } else {
                alert('Greška prilikom učitavanja knjiga.');
            }
        }
    }
    request.open('GET', firebaseUrl + '/knjige.json');
    request.send();
}


getAllBooks()

