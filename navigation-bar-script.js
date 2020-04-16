function func()
        {
            $(document).ready(function() { $(".carousel-caption").animate({top:"30%"});});
        }
        
        
      window.onscroll = function() {myFunction()};
        function myFunction() {
            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) 
            {
                document.getElementById("myheader").className = "header22";
                $(".a2").css({"color":"black" , "opacity":"1"}) ;
                $(".active").css("color","#edb305");
                $(".a2").mouseover(function(){$(this).css("color","#edb305");});
                $(".a2").mouseout(function(){$(this).css("color","black");});
                $("#brand").css("color","black");
                
                
            }
            else {
                document.getElementById("myheader").className = "header";
                $(".a2").css({"color":"white" , "opacity":""}) ;
                $(".a2").mouseover(function(){$(this).css("color","white");});
                $(".a2").mouseout(function(){$(this).css("color","white");});
                $(".active").css("color","white");
                $("#brand").css("color","white");
                
        
            }
            }
      