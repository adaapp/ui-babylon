;(function(){
    
    // Defines that JavaScript code should be executed in "strict mode",
    // this helps with js type errors
    // https://www.w3schools.com/js/js_strict.asp
    "use strict";
    
    //
    // get elements
    //
    var userForm = document.getElementById("user-input");
    var initialForm = document.getElementById("intial-message");
    var currentView = document.querySelector("section.current"); // .querySelector is relatively new and works in a similar way to jquery selectors
    
    //
    // event listeners
    //
    initialForm.addEventListener("submit",function(e){
        
        // handle first form submit from user
        handleInitialFormSubmit(e);

        addUserMessage(e);
        
        // stop the default browser submit
        event.preventDefault();
    });

    userForm.addEventListener("submit",function(e){
        
        // handle subsequent form submits
        addUserMessage(e);
        
        // stop the default browser submit
        event.preventDefault(e);
    });

    //
    // handle form submissions
    //

    function handleInitialFormSubmit(e){
        
        // hide welcome section view
        removeClass(currentView,"current");
        // go find the form action refer on the page, in this case #chatbot
        currentView = document.querySelector(e.target.attributes.action.value);
        
        addClass(currentView,"current");
    }

    // add user input to the page
    function addUserMessage(e){
        // get user input message
        var msg = e.target[0].value;

        // reset input value
        e.target[0].value = "";


        var article = document.querySelector("article#conversation");
        var p = document.createElement("p");
        p.innerText = msg;
        
        addClass(p,"bubble");
        addClass(p,"user");

        // p.classList.add("user");
        article.appendChild(p);

        
        // add bot bubble
        var pBot = document.createElement("p");
        addClass(pBot,"bubble");
        addClass(pBot,"bot");

        // var span1 = document.createElement("span");
        // var span2 = document.createElement("span");
        // var span3 = document.createElement("span");

        // span1.innerText = ".";
        // span2.innerText = ".";
        // span3.innerText = ".";
        
        // pBot.appendChild(span1);
        // pBot.appendChild(span2);
        // pBot.appendChild(span3);

        // this is abit of a hacky way of doing it, you should really do it as above
        // some browsers now block .innerHTML from js from external domains 
        var dots = `<span>.<span>
                    <span>.<span>
                    <span>.<span>`;

        pBot.innerHTML = dots;
        
        article.appendChild(pBot);

        // scroll section to bottom
        // Challenge: this is a bit hacky and can be made better
        window.scrollTo(0,10000000);
    }

    // 
    // utilities
    //
    var addClass = function(el,className){
        if(!el.classList.contains(className)) el.classList.add(className);
    }
    var removeClass = function(el,className){
        if(el.classList.contains(className)) el.classList.remove(className);
    }
})();