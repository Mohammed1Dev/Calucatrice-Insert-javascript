

class Personne{
    constructor(nom, prenom, adresse, phone, adresseEmail){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.phone = phone;
        this.adresseEmail = adresseEmail;

    }
}

function addRow(){
    let row = "<tr>";
    let personne = new Personne(
        document.getElementById("Nom").value,
        document.getElementById("Prenom").value,
        document.getElementById("Adresse").value,
        document.getElementById("Phone").value,
        document.getElementById("Adresse_em").value
    )
    row += "<td>"+personne.nom+"</td>";
    row += "<td>"+personne.prenom+"</td>";
    row += "<td>"+personne.adresse+"</td>";
    row += "<td>"+personne.phone+"</td>";
    row += "<td>"+personne.adresseEmail+"</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML += row;

}
