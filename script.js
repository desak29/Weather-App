$(document).read(function(){
    var apiKey ='c67844a34051bc35ed809ffaa4f66b25';
    
    var weatherURL='http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID='+apiKey;
    $.getJSON
    // draw the inner circle
    context.fillStyle="#ccc";
    context.beginpath();
    context.fill;
    
    context.lineWidth=10;
    conrtext.strokeStyle="ff0000";
    context.beginPath();
    context.arc(155,75,75,-Math.PI*1.5,(currTemp/100)*Math.PI*1);
    context.stroke();
    
    
});
       
       
       
        var canvas = document.getElementById('the-canvas');
        var context= canvas.getContext('2d');
    //     console.dir(context);
    //         context.beginPath();
    //         context.moveTo(50,0);
    //         context.lineTo(100,100);
    //         context.stroke();
    //         context.beginPath();
    //         context.arc(75,75,50, 0*Math.PI,1.5*Math.PI);
    //         context.stroke();
    //         context.beginPath();
    //         context.rect(300,20,100,200);
    //         context.stroke();
    //        var canvas1 = document.getElementByID('the-canvas2') 
    //        var context1 =canvas1.getContext1('2d');
    //         canvas.beginPath(); 
    //    canvas.moveTo(50,50);
    //     canvas.lineTo(120,150);
    //   canvas.lineTo(0,180); 
    //  canvas.lineTo(120,210);
    //   canvas.lineTo(50,310);  
    //   canvas.lineTo(160,250);
    //    canvas.lineTo(190,370);
    //   canvas.lineTo(220,250);
    //   canvas.lineTo(330,310);
    //  canvas.lineTo(260,210);
    //   canvas.lineTo(380,180);
    //    canvas.closePath();
    //     canvas.stroke();
            
    //     console.log(canvas);
        
     var x =150;
     var y =150;
     var radius =10;
    function draw(){
         context.clearRect(0,0,500,500);
         context.beginPath()
         context.arc(x+i,y+i,radius, 0,Math.PI*2)
         context.fill();
         x+= 4;
         y +=2;
     }
     setInterval(draw,15)