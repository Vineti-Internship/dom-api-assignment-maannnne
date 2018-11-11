window.onload = () => {
//container
   let container = document.createElement("div");
   document.body.appendChild(container); 


//start button    
   let startButton = document.createElement("button");
   let startText = document.createTextNode("Start!");
   startButton.appendChild(startText);
   container.appendChild(startButton);
   startButton.setAttribute('id', 'startButtonId');
   startButton.setAttribute('style',' border-radius: 50%; font-size: 15px; padding: 10px; margin: 4px; background-color: #4286f4; color: #383a38; position: relative;');


//stop button
   let stopButton = document.createElement("button");
   let stopText = document.createTextNode("Stop!");
   stopButton.appendChild(stopText);
   container.appendChild(stopButton);
   stopButton.setAttribute('style','  border-radius: 50%; font-size: 15px; padding: 10px; margin: 4px; background-color: #4286f4; color: #383a38; position: absolute;');


//big circle
   let bigCircle = document.createElement("div");
   container.appendChild(bigCircle);
   bigCircle.setAttribute('style','width: 400px; height: 400px; border: 2px solid #4d564d; border-radius: 50%; position: fixed;');
   
//small ball
   let smallBall = document.createElement("div");
   container.appendChild(smallBall);
   smallBall.setAttribute('style', 'height: 34px; width: 34px; border-radius: 50%;  position: fixed; background-color: #3366b7;');

   let angle = 0;
   let cx;  //smallBall center x
   let cy;  //smallBall center y
   let stop_start;  //for set/clear time out
   let bigCircleRadius = bigCircle.style.width.split('px')[0]/2; //2 ժամ ա քեզ գտնելու ձևն եմ ման գալիս, անամոթ -_-


//main spinIt() function   
    
   startButton.onclick = spinIt = () => {
       document.getElementById('startButtonId').disabled = true;
       let big = bigCircle.getBoundingClientRect();
       //console.log(big.top, big.right, big.bottom, big.left);

       let smallBallRadius = smallBall.style.width.split('px')[0]/2;
       let centerX = bigCircleRadius + big.left;
       let centerY = bigCircleRadius + big.top; 
       cx = centerX - smallBallRadius + bigCircleRadius * Math.cos(angle * Math.PI/ 180); 
       cy = centerY - smallBallRadius + bigCircleRadius * Math.sin(angle * Math.PI/ 180); 

       
       smallBall.style.left = cx + 2 + 'px'; //border too
       smallBall.style.top =  cy + 2 + 'px'; //border too

       angle++;
       if (angle > 360) {
           angle = 0;
       }
       
       stop_start = setTimeout(spinIt,6); 
       
    }

   stopButton.onclick = stopIt = () => {
       document.getElementById('startButtonId').disabled = false;
       console.log(stop_start); 
       clearTimeout(stop_start);
  }
}
