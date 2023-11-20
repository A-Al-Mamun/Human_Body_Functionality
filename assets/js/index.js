 
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
    if((lineHead.style.display == 'none')&&(textHead.style.display == 'none')){
        lineHead.style.display = 'block';
        textHead.style.display = 'block';
    }else{
        lineHead.style.display = 'none';
        textHead.style.display = 'none';
    }

}

// Right Hand
function testRightHand(){
    var lineRightHand = document.getElementsByClassName('line')[1];
    var textRightHand = document.getElementsByTagName('p')[2];

    
    if((lineRightHand.style.display == 'none')&&(textRightHand.style.display == 'none')){
        lineRightHand.style.display = 'block';
        textRightHand.style.display = 'block';
    }else{
        lineRightHand.style.display = 'none';
        textRightHand.style.display = 'none';
    }

}

// Left Hand
function testLeftHand(){
    var lineLeftHand = document.getElementsByClassName('line')[2];
    var textLeftHand = document.getElementsByTagName('p')[3];


    if((lineLeftHand.style.display == 'none')&&(textLeftHand.style.display == 'none')){
        lineLeftHand.style.display = 'block';
        textLeftHand.style.display = 'block';
    }else{
        lineLeftHand.style.display = 'none';
        textLeftHand.style.display = 'none';
    }

}

// Right Leg
function testRightLeg(){
    var lineRightLeg = document.getElementsByClassName('line')[3];
    var textRightLeg = document.getElementsByTagName('p')[4];

    
    if((lineRightLeg.style.display == 'none')&&(textRightLeg.style.display == 'none')){
        lineRightLeg.style.display = 'block';
        textRightLeg.style.display = 'block';
    }else{
        lineRightLeg.style.display = 'none';
        textRightLeg.style.display = 'none';
    }

}

// Left Leg
function testLeftLeg(){
    var lineLeftLeg = document.getElementsByClassName('line')[4];
    var textLeftLeg = document.getElementsByTagName('p')[5];


    if((lineLeftLeg.style.display == 'none')&&(textLeftLeg.style.display == 'none')){
        lineLeftLeg.style.display = 'block';
        textLeftLeg.style.display = 'block';
    }else{
        lineLeftLeg.style.display = 'none';
        textLeftLeg.style.display = 'none';
    }

}