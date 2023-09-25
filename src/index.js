let nome = "Felipão o mais brabo da tropa"
let nivelExperiencia = 1000
let nivelJogador = ""

if(nivelExperiencia < 1000){
    nivelJogador = "Ferro"
}else if (nivelExperiencia >= 1001 && nivelExperiencia <= 2000){
    nivelJogador = "Bronze"
}else if (nivelExperiencia >= 2001 && nivelExperiencia <= 5000){
    nivelJogador = "Prata"
}else if (nivelExperiencia >= 6001 && nivelExperiencia <=7000){
    nivelJogador = "Ouro"
}else if (nivelExperiencia >= 7001 && nivelExperiencia <= 8000){
    nivelJogador = "Platina"
}else if (nivelExperiencia >= 8001 && nivelExperiencia <= 9000){
    nivelJogador = "Ascendente"
}else if (nivelExperiencia >= 9001 && nivelExperiencia <= 1000){
    nivelJogador = "Imortal"
}else {
    nivelJogador = "Radiante nada, tu é maravilhosoooo filipão kk"
}
    console.log("O Herói de nome" + nome + "está no nível de" + nivelJogador)