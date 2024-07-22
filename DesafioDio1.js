let nomeHeroi = ["JJ" , "Jota" , "Jotinha" , "Pacheca" , "GG" , "Manoel" , "Alê" , "Ferreira"] 
let nivel= ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Radiante" , "Supremo" ]
let xp = 10.001

switch (true) {
    case xp <= 1.000:
        console.log(`${nomeHeroi[2]} está no nível ${nivel[0]}`)
        break;

    case xp>1.001 && xp<=2.000:
        console.log(`${nomeHeroi[0]} está no nível ${nivel[1]}`)
        break;

    case xp>2.001 && xp<=5.000:
        console.log(`${nomeHeroi[5]} está no nível ${nivel[2]}`)
        break

    case xp>5.001 && xp<=7.000:
        console.log(`${nomeHeroi[7]} está no nível ${nivel[3]}`)
        break
    
    case xp>7.001 && xp<=8.000:
        console.log(`${nomeHeroi[1]} está no nível ${nivel[4]}`)
        break

    case xp>8.001 && xp<9.000:
        console.log(`${nomeHeroi[4]} está no nível ${nivel[5]}`)
        break
    
    case xp>9.001 && xp<=10.000:
        console.log(`${nomeHeroi[6]} está no nível ${nivel[6]}`)
        break

    case xp>=10.001:
        console.log(`${nomeHeroi[3]} está no nível ${nivel[7]}`)
        break        
}

