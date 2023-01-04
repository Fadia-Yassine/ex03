class Personnage {
    constructor(nom,age, ville){
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.nom}!`);
    }
}

let fadia = new Personnage('Fadia',25, 'Bruxelles');
let julie = new Personnage('Julie', 28, "Bruxelles");

// console.log(k3);
fadia.sePresenter();
julie.sePresenter();