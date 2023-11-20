 
function myFunction() {
    var element = document.getElementById("section-hero");
    element.classList.toggle("section-change");
}

// const nameToggle = () => {
//     var line = document.getElementsByClassName('line')[0];
//     var text = document.getElementsByTagName('span')[0];
    
//     line.style.display = 'inline-block';
//     text.style.display = 'inline-block';
// }

function testHead(){
    var lineHead = document.getElementsByClassName('line')[0];
    var textHead = document.getElementsByTagName('p')[1];

    // Head
    if((lineHead.style.display == 'block')&&(textHead.style.display == 'block')){
        lineHead.style.display = 'none';
        textHead.style.display = 'none';
    }else{
        lineHead.style.display = 'block';
        textHead.style.display = 'block';
    }

}

// Right Hand
function testRightHand(){
    var lineRightHand = document.getElementsByClassName('line')[1];
    var textRightHand = document.getElementsByTagName('p')[2];

    
    if((lineRightHand.style.display == 'block')&&(textRightHand.style.display == 'block')){
        lineRightHand.style.display = 'none';
        textRightHand.style.display = 'none';
    }else{
        lineRightHand.style.display = 'block';
        textRightHand.style.display = 'block';
    }

}

// Left Hand
function testLeftHand(){
    var lineLeftHand = document.getElementsByClassName('line')[2];
    var textLeftHand = document.getElementsByTagName('p')[3];


    if((lineLeftHand.style.display == 'block')&&(textLeftHand.style.display == 'block')){
        lineLeftHand.style.display = 'none';
        textLeftHand.style.display = 'none';
    }else{
        lineLeftHand.style.display = 'block';
        textLeftHand.style.display = 'block';
    }

}

// Right Leg
function testRightLeg(){
    var lineRightLeg = document.getElementsByClassName('line')[3];
    var textRightLeg = document.getElementsByTagName('p')[4];

    
    if((lineRightLeg.style.display == 'block')&&(textRightLeg.style.display == 'block')){
        lineRightLeg.style.display = 'none';
        textRightLeg.style.display = 'none';
    }else{
        lineRightLeg.style.display = 'block';
        textRightLeg.style.display = 'block';
    }

}

// Left Leg
function testLeftLeg(){
    var lineLeftLeg = document.getElementsByClassName('line')[4];
    var textLeftLeg = document.getElementsByTagName('p')[5];


    if((lineLeftLeg.style.display == 'block')&&(textLeftLeg.style.display == 'block')){
        lineLeftLeg.style.display = 'none';
        textLeftLeg.style.display = 'none';
    }else{
        lineLeftLeg.style.display = 'block';
        textLeftLeg.style.display = 'block';
    }

}