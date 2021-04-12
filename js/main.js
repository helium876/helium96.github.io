$(function(){
        $(".typed").typed({
            strings: 
            [
            "Beef Patty Consumer.", 
            "Information Security Consultant",
            "Former IEEE UTech Student Chapter Chair",
            "UTech's Former Personal ATM",
            "Blog and Security Research Papers Coming Soon"
            ],
            contentType: 'html',
            typeSpeed: 60, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: true, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    });


setTimeout(function(){
        $(".element0").typed({
            strings: ["rm -rf /"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 0);

setTimeout(function(){
        $(".element1").css("display", "inherit");
        $(".element1").typed({
            strings: ["pc fucked"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".element2").css("display", "inherit");
        $(".element2").typed({
            strings: ["rip"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 4000);

setTimeout(function(){
        $(".element3").css("display", "inherit");
        $(".element3").typed({
            strings: ['echo "Good Bye World"'],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 6000);

setTimeout(function(){
        $(".element4").css("display", "inherit");
        $(".element4").typed({
            strings: ["rass"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 8000);
