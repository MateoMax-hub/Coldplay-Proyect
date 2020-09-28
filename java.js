
// BOTON BURGUESAHAM
function navbar() {
    if (document.getElementById('navbar').style.display == 'none'){
    document.getElementById('navbar').style.display = 'block'
    } else {
        document.getElementById('navbar').style.display = 'none'
    }
}


// SUBMIT DEL FORM
function validateForm(event) {
    event.preventDefault()


    let Name = document.forms['formCont']['fname'].value;
    let Email = document.forms['formCont']['femail'].value;
    let Tel = document.forms['formCont']['ftel'].value;
    let Text = document.forms['formCont']['ftext'].value;

    let NameC = false
    let EmailC = false
    let TelC = false
    let TextC = false

    let input = document.getElementById('input')
    let input1 = document.getElementById('input1') 
    let input2 = document.getElementById('input2')


    if (Name == null || Name == "") {
        document.getElementById("required").style.display = 'block'
        input.className += "p-1 m-inputs w-100 m-border m-radius"
    } else {
        NameC = true
        document.getElementById("required").style.display = 'none'
        input.className += "p-1 m-inputs w-100 m-border m-radius m-m-i"
    }

    if (Email == null || Email == "") {
        document.getElementById("required1").style.display = 'block'
        input1.className += "p-1 m-inputs w-100 m-border m-radius"

    } else {
        EmailC = true
        document.getElementById("required1").style.display = 'none'
        input1.className += "p-1 m-inputs w-100 m-border m-radius m-m-i"
        
    }

    if (Tel == null || Tel == "") {
        document.getElementById("required2").style.display = 'block'
        input2.className += "p-1 m-inputs w-100 m-border m-radius"

    } else {
        TelC = true
        document.getElementById("required2").style.display = 'none'
        input2.className += "p-1 m-inputs w-100 m-border m-radius m-m-i"

    }

    if (Text == null || Text == "") {
        document.getElementById("required3").style.display = 'block'
        input3.className += "m-inputs m-border m-radius"
    } else {
        TextC = true
        document.getElementById("required3").style.display = 'none'
        input3.className += "m-inputs m-border m-radius m-m-i"

    }






    if (NameC == true && EmailC == true && TelC == true && TextC == true) {
        $('#modalform').modal('show')
    } else {
    }

}