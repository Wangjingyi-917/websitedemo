
//user name input
 var username = prompt("请输入您的ID：");

        
        // define database url
        var dta_url = "https://WangJingyi.eu.pythonanywhere.com/get_mousedata";
        
        // page log
        $.getJSON(
          dta_url,
          {username: username,
          timeMark: Date.now(),
          objname: window.location.pathname,
          action: "landing",
          x: 0,
          y: 0 })
                 
        // mouse enter detection
        $('*[id^=tracks]:visible').each(function(){
            $(this).mouseenter(function(event){
                $.getJSON(
                  dta_url,
                  {username: username,
                  timeMark: Date.now(),
                  objname: this.id,
                  action: "mouseenter",
                  x: event.originalEvent.x,
                  y: event.originalEvent.x })
            });
        });
        
        // mouse leave detection
        $('*[id^=tracks]:visible').each(function(){
            $(this).mouseleave(function(event){
                $.getJSON(
                  dta_url,
                  {username: username,
                  timeMark: Date.now(),
                  objname: this.id,
                  action: "mouseleave",
                  x: event.originalEvent.x,
                  y: event.originalEvent.x })
            });
        });

        // mouse up detection
        $('*[id^=tracks]:visible').each(function(){
            $(this).mouseup(function(event){
                $.getJSON(
                  dta_url ,
                  {username: username,
                  timeMark: Date.now(),
                  objname: this.id,
                  action: "mouseup",
                  x: event.originalEvent.x,
                  y: event.originalEvent.x })
            });
        });

        // mouse down detection
        $('*[id^=tracks]:visible').each(function(){
            $(this).mousedown(function(event){
                $.getJSON(
                  dta_url ,
                  {username: username,
                  timeMark: Date.now(),
                  objname: this.id,
                  action: "mousedown",
                  x: event.originalEvent.x,
                  y: event.originalEvent.x })
            });
        });
