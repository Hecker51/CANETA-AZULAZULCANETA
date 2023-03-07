//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/
//https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/







//im mrbeats


function butaoserio()
{
navigator.mediaDevices.getUserMedia({audio: true})
    
classificador = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ag7IlYhxa/model.json', aodio) 
}

function aodio()
{
console.log("modelo_carregado");
classificador.classify(pegares);


}

function pegares(erro,results)
{
console.log(results)
  

img1 = document.getElementById('img1')
img2 = document.getElementById('img2')
img3 = document.getElementById('img3')
img4 = document.getElementById('img4')





var nome = results[0].label;
var precisao = results[0].confidence ;


document.getElementById("spansla").innerHTML = nome;
document.getElementById("spansla1").innerHTML = precisao;



if(nome == 'Background Noise'){


    img1.src = 'a1.jpeg'
    img2.src = 'a2.jpeg'
    img3.src = 'a3.jpeg'
    img4.src = 'esqueleto3.gif'
}

else if(nome == 'rage'){


    img1.src = 'a1.jpeg'
    img2.src = 'a2.jpeg'
    img3.src = 'esqueleto2.gif'
    img4.src = 'a4.jpg'
}


 else if(nome == 'estalo'){


    img1.src = 'a1.jpeg'
    img2.src = 'esqueleto1.gif'
    img3.src = 'a3.jpeg'
    img4.src = 'a4.jpg'
}

else{


    img1.src = 'esqueleto.gif'
    img2.src = 'a2.jpeg'
    img3.src = 'a3.jpeg'
    img4.src = 'a4.jpg'
}












}






/* 
'Background Noise', confidence: 0.5783065557479858}

1
: 
{label: 'rage', confidence: 0.24980902671813965}
2
: 
{label: 'palma', confidence: 0.11593083292245865}
3
: 
{label: 'estalo', confidence: 0.05595356971025467}
length
: 
4 */