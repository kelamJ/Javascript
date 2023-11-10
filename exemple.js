function prevoirAge() {

    let age = prompt("Quel est votre âge ?");
    // age = parseInt(age);
    // age = parseFloat(age);
    age = Number(age);

    // nombre = 45;
    // nombreEnString = nombre + "";
    // nombreEnString = nombre.toString();
    alert("Bientôt vous aurez " + (age + 1) + " ans");

}

prevoirAge();