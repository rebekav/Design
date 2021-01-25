function validations()
    {

    var x = document.forms["registracija"]["name"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["surname"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["adress"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["email"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["bday"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["pnumber"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["username"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }

    var x = document.forms["registracija"]["password"].value;
    if (x == "") {
      alert("You need to enter all informations");
      return false;
    }
    }

function pitanje()
    {
        confirm("Are you sure ?")
    }
