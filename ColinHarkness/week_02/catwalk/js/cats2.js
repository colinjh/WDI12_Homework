(function(window){
       var imgLeft = 0, imgTop = 0;
       var imgObj, screenWidth, screenHeight, finalTop, finalLeft, 
           slope, imgHeight, imgWidth;

       var animateImage = function(){
           imgObj.style.left = imgLeft < finalLeft ? imgLeft + 'px' : finalLeft + 'px';
           imgObj.style.top = imgTop < finalTop ? imgTop + 'px' : finalTop + 'px';

           if(imgLeft !== finalLeft || imgTop !== finalTop){
               requestAnimationFrame(animateImage);
           }

           imgLeft++;
           imgTop += slope;
       };

       window.onload = function(){
           imgObj = document.getElementById('cat');

           screenWidth = window.innerWidth;
           screenHeight = window.innerHeight;

           imgHeight = imgObj.offsetHeight;
           imgWidth = imgObj.offsetWidth;

           slope = (screenHeight - imgHeight) / (screenWidth - imgWidth);

           finalTop = screenHeight - imgHeight;
           finalLeft = screenWidth - imgWidth;

           requestAnimationFrame(animateImage);
       };
    })(window);