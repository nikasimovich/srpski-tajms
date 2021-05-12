let form = document.getElementById('form');

function cirilicaCheck() {
  let radios = document.getElementsByName('jezik');

  for (let i = 0, length = radios.length; i < length; i++) {
    let value = radios[i].value;
    console.log(value);

    if (radios[i].checked) {
      let element = document.getElementById(value);
      if ( element ) {
        element.style.display = 'flex';
      }
    } else {
      let element = document.getElementById(value);
      if ( element ) {
        element.style.display = 'none';
      }
    }
  }

    // if (document.getElementById("radioCirilica").checked) {
    //     document.getElementById("cirilica").style.visibility = 'visible';
    // }
    // else document.getElementById("cirilica").style.visibility = 'hidden';

}

let cirilica = document.querySelector("#radioCirilica");

form.addEventListener("change", cirilicaCheck)
