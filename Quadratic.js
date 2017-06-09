function calculate(){
// User's input:
 var a=prompt("enter value of a (must be numerical)"),
     b=prompt("enter value of b (must be numerical)"),
     c=prompt("enter value of c (must be numerical)"),
// end of User's input. 
// 2a:
     a2=2*a,
//end of 2a.
//Discriminant (dis):
     ac=4*a*c,
     dis=b*b,
     dis=dis-ac,
//end of Discriminant (dis).
// Axis of symmetry:
     ax = -b/a2,
// End of Axis of symmetry.
// Vertex (k):
     vx = (ac - b*b)/ 4*a,
// End of Vertex (k).
// Square the Discriminant:
     dis_sqrt=Math.sqrt(dis),
// End of Discriminant.
// 1st root:
     x1=-b+dis_sqrt,
     x1=x1/a2,
// End of 1st root.
// 2nd root:
     x2=-b-dis_sqrt,
     x2=x2/a2,
// End of 2nd root.
// Negative Discriminant:
     negB= -1 *b,
// end of Discriminant.
//Positive Discriminant:
     posDis = -1 * dis;
//end of Positive Discriminant.

//check the user's input:
//If the a coefficient is equal to zero, then alert the user and return to the function:
     if(a == 0){
        alert("your don't have an input or it is zero so you need to input a number that is greater than zero!");
        return calculate();
        }
// end of if a coefficient is equal to zero.
//If a,b and c coefficient is not a number, then alert the user and return to the function.
   if(isNaN(a)){
          alert("Your input is a letter or special key, input a number therefore try again!");
          return calculate();
        }
     if(isNaN(b)){
          alert("Your input is a letter or special key, input a number therefore try again!");
          return calculate();
        }
     if(isNaN(c)){
          alert("Your input is a letter or special key, input a number therefore try again!");
          return calculate();
        }
// end of a,b and c coefficient is not a number.
// end of check user's input.

//If discriminant is less than zero:    
     if(dis<0){
//If Discriminant remainder is equal to zero then simplify it:
     if(Math.sqrt(posDis) % 1 === 0){
   var posDis = Math.sqrt(posDis);
//Display results if discriminant is less than zero and if the discriminant can be simplify:
        document.getElementById('Equation').innerHTML='No real roots exist since Discriminant < 0, which mean complex numbers!<br />Discriminant = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML="Alpha (x') = " + negB + "+" + posDis + "<i>i</i>" + "/" + 2*a;
        document.getElementById('x2').innerHTML="Beta (x'') = "  + negB + "-" + posDis + "<i>i</i>" + "/" + 2*a;
        document.getElementById('axis').innerHTML=' Axis of symmetry = '  + ax;
        document.getElementById('vertex').innerHTML=' Vertex = ('  + ax + ' ; ' + vx + ')';
        }
//If the discriminant cannot be simplify then display this result:
     else{
       document.getElementById('Equation').innerHTML='No real roots exist since Discriminant < 0, which mean complex numbers!<br />Discriminant = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
        document.getElementById('x1').innerHTML="Alpha (x') = " + negB + "+" + "&radic;"+ posDis + "<i>i</i>" + "/" + 2*a;
        document.getElementById('x2').innerHTML="Beta (x'') = "  + negB + "-" + "  &radic;"+ posDis + "<i>i</i>" + "/" + 2*a;
        document.getElementById('axis').innerHTML=' Axis of symmetry = '  + ax;
        document.getElementById('vertex').innerHTML=' Vertex = ('  + ax + ' ; ' + vx + ')';
    }
     }
// end of discriminant is less than zero.
//If the discriminant is equal to zero:
     else if(dis===0){
//Display results if the discriminant is equal to zero:
        document.getElementById('Equation').innerHTML=" Equation = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML=" Alpha (x') = " + x1;
        document.getElementById('axis').innerHTML=' Axis of symmetry = '  + ax;
        document.getElementById('vertex').innerHTML=' Vertex = ('  + ax + ' ; ' + vx + ')';
        document.getElementById('Type_root').innerHTML='The roots are repeated real number solutions because the Discriminant is zero';
     }
//If the discriminant is greater than zero:
     else{
//Display results:
        document.getElementById('Equation').innerHTML=" Equation = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML=" Alpha (x') = " + x1;
        document.getElementById('x2').innerHTML=" Beta (x'') = "  + x2;
        document.getElementById('axis').innerHTML=' Axis of symmetry = '  + ax;
        document.getElementById('vertex').innerHTML=' Vertex = ('  + ax + ' ; ' + vx + ')';
        document.getElementById('Type_root').innerHTML='The roots are two distinct real number solutions because the Discriminant is positive';
        }
// end of display results.
}
