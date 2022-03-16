function register() {
    const enbestilling = {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };

    let inputTeller = 0;

    let feilMessage = "Feltet kan ikke være tomt"

    if(enbestilling.film == "Velg film") {
        document.getElementById("feilMeldingFilm").style.color = "red";
        document.getElementById("feilMeldingFilm").innerHTML = feilMessage;
    }
    else{
        document.getElementById("feilMeldingFilm").innerHTML="";
        inputTeller++;
    }

    if(enbestilling.antall == ""){
        document.getElementById("feilMeldingAntall").style.color="red";
        document.getElementById("feilMeldingAntall").innerHTML=feilMessage;
    }
    else{
        document.getElementById("feilMeldingAntall").innerHTML="";
        inputTeller++;
    }

    if(enbestilling.fornavn == ""){
        document.getElementById("feilMeldingFnavn").style.color="red";
        document.getElementById("feilMeldingFnavn").innerHTML=feilMessage;
    }
    else{
        document.getElementById("feilMeldingFnavn").innerHTML="";
        inputTeller++;
    }
    if(enbestilling.etternavn == "") {
        document.getElementById("feilMeldingEnavn").style.color = "red";
        document.getElementById("feilMeldingEnavn").innerHTML = feilMessage;
    }
    else{
        document.getElementById("feilMeldingEnavn").innerHTML="";
        inputTeller++;
    }
    if(enbestilling.telefonnr == "") {
        document.getElementById("feilMeldingTlf").style.color = "red";
        document.getElementById("feilMeldingTlf").innerHTML = feilMessage;
    }
    else{
        document.getElementById("feilMeldingTlf").innerHTML="";
        inputTeller++;
    }
    if(enbestilling.epost == ""){
        document.getElementById("feilMeldingEpost").style.color="red";
        document.getElementById("feilMeldingEpost").innerHTML=feilMessage;
    }
    else{
        document.getElementById("feilMeldingEpost").innerHTML="";
        inputTeller++;
    }

    /*if ((film != "Velg film") && (antall != "") && (fornavn != "") && (etternavn != "") && (telefonnr != "") && (epost != "")) {
     */

    if (inputTeller == 6) {
        $.post("/register", enbestilling, function () {
            getAll();
        });

        function getAll() {
            $.get("/getAll", function (data) {
                formatData(data);
            });
        }

        $('#film').val("Velg film");
        $('#antall').val("");
        $('#fornavn').val("");
        $('#etternavn').val("");
        $('#telefonnr').val("");
        $('#epost').val("");
    }
}

function formatData(Biletter) {
    let out = "<table class='table table-striped table-bordered'>" +
        "<tr>" +
            "<th>Film </th><th>Antall</th><th>Fornavn </th>" +
            "<th>Etternavn </th><th>Telefonnr </th><th>Epost </th>" +
        "</tr>";

    for (let p of Biletter) {
        out += "<tr>";
        out +=
            "<td>" + p.film + "</td>" +
            "<td>" + p.antall + "</td>" +
            "<td>" + p.fornavn + "</td>" +
            "<td>" + p.etternavn + "</td>" +
            "<td>" + p.telefonnr + "</td>" +
            "<td>" + p.epost + "</td>";
        out +=
            "</tr>"
    }
    out+=
        "</table>"

    $('#Biletter').html(out);
}

function deleteAll() {
    $.get("/deleteAll", function() {
        $('#Biletter').html("");
    });
}
