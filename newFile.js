const { xp, nivel } = require(".");

switch (true) {
    case xp <= 1000:
        nivel = "Ferro";
        console.log("Seu nível é " + nivel + ". Continue para subir de nível");
        break;

    case xp > 1001 && xp <= 2000:
        nivel = "Bronze";
        console.log("Seu nível é " + nivel + ". Precisa de mais XP para subir de nível");
        break;

    case xp > 2001 && xp <= 5000:
        nivel = "Prata";
        console.log("Seu nível é " + nivel + ". Você precisa de mais XP para subir de nível");

    case xp > 5001 && xp <= 7000:
        nivel =
        ;
}
