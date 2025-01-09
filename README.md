I decided to make a duck. I first started with a circle for the head, an arc for the body, a triangle for the beak and two circles for the eye. When creating arcs there tends to be an area that is not covered by a stroke so I used a line to cover that bit so that the body and the head looked more connected. After making the duck I put it into a function called "makeduck()" and tried to make it flexible so that it would work like the lollipop function that is shown in the workshop video. The function was then modified to "makeduck(x,y)" which would allow it to take in different x and y coordinates. To test it out i put in the code 

 let newduck = random(0, width);
 makeduck(newduck, newduck+10);

This would make it so that the duck would be proportionally correct, I was afraid of the head and the body being mismatched. However when running this code the duck seemed to only appear on a diagonal line. Sidenote, When modifying the makeduck function I had "line(x+15,y+20,150,120)" and when I ran the makeduck function the duck seemed to have a line attached to it which made the duck appear to be bouncing on a string. I then changed it to "line(x+15,y+20,x+23 + (75/2),y+20)" which removed the string. 

let newduck = random(0, width);
makeduck(newduck, newduck+10);

The above code is what I had put in which made it only appear on a diagonal line it then started to appear all around the canvas when I placed "makeduck(random(0,width),random(0,height)); "

  for(x=0;x<30;x++){
    makeduck(random(0,width),random(0,height)); 
  }

The above code is the for loop I used and it was pretty easy as I was just copying the code from the workshop but for some reason the ducks were randomly moving around. I then realised that I had put the for loop in the draw function rather than the setup this was also what made the duck bounce on a string before as I had also written the code in the draw function. After placing the for loop in the setup function, everything worked perfectly.
