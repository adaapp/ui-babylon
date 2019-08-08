;(function(){
    
    //
    // get elements
    //
    var userForm = document.getElementById("user-input");
    var initialForm = document.getElementById("intial-message");
    var currentView = document.querySelector("section.current");
    
    //
    // event listeners
    //
    userForm.addEventListener("submit",function(){
        
        handleUserFormSubmit();
        
        // stop the default browser submit
        event.preventDefault();
    });
    initialForm.addEventListener("submit",function(e){
        
        handleInitialFormSubmit(e);
        
        // stop the default browser submit
        event.preventDefault();
    });

    //
    // handle form submissions
    //
    function handleUserFormSubmit(){
        // get user input message
        var message = event.target[0].value;
        
        // set bubble user message
        addUserMessage(message);

        // reset input value
        event.target[0].value = "";
    }

    function handleInitialFormSubmit(e){
        
        // hide welcome section view
        removeClass(currentView,"current");
        // go find the form action refer on the page, in this case #chatbot
        currentView = document.querySelector(e.target.attributes.action.value);
        
        addClass(currentView,"current");

        var message = e.target[0].value;
        addUserMessage(message);
    }

    // add user input to the page
    function addUserMessage(msg){

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
        var dots = `<span>.<span>
                    <span>.<span>
                    <span>.<span>`;

        pBot.innerHTML = dots;
        
        article.appendChild(pBot);

        // scroll section
        currentView.scrollTo(0,100000000);
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