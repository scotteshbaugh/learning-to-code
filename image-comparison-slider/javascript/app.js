function onReady(completed) {
    if (document.readyState === "complete") {
        setTimeout(completed);
    } else {
        document.addEventListener("DOMContentLoaded", completed, false);
    }
}

onReady(function() {
    var divisor, slider;

    divisor = document.getElementById("divisor");

    slider = document.getElementById("slider");

    slider.addEventListener("input", function() {
        divisor.style.width = slider.value.toString() + "%";
    });

    divisor.style.width = slider.value.toString() + "%";
});





// originally the javascript was this:

// divisor = document.getElementById("divisor");
// slider = document.getElementById("slider");
// function moveDivisor() {
//	divisor.style.width = slider.value+"%";
// }

// but, Sean changed it for me. He said:

// 99.9% of the time using addEventListener is preferred to having an onwhatever attribute
// so what that code does is define an "onReady" function that makes sure the page is loaded
// and then it executes a callback function, and then it calls onReady with an anonymous function
// that then defines an event handler for the slider

// there's several reasons for this, 1 it ensures that your code that interacts with the DOM waits
// until the DOM is actually loaded (in this case it's not a huge deal, but it's an important habit 
// to get into because when it does matter things will break in mysterious ways). 2 it defines all\
// of our behavior inside of an anonymous function which means that nothing we do inside of it can 
// leak out into the global scope. if some other script was using variables named slider and divisor
// your script might clobber them and then who knows what would happen. by containing the scope 
// of your script you ensure that it's self contained and plays nice with others 3 the event handler
// being defined in the script means that your markup knows nothing of the behavior of the document.
// this is good because sometimes the behavior and the markup need to change separately. if they're 
// too tightly coupled (again in this case it's not a huge deal, but i've seen it get really hairy
// real fast on pages only a little more complicated, so it's a good habit to get into) it can be
// really hard to reason about things and even worse making changes can become a nightmare

// also the event handler being defined entire in the js allows you to have much more control, 
// like let's say you didn't know what even you were binding on until some time later (not sure
//  why you'd want to do that, but who knows), if you use an onwhatever attribute you cant do that.
//  with dynamically defined event binding you can

// you can also add multiple event listeners
// if you overwrite the onwhatever attribute of an element it removes previous event listeners
// which is really bad!

// also, just a fun note, the onReady function is more or less lifted from the jQuery onReady function
// you don't need all of jQuery just for the sane "wait until the DOM is loaded" behavior
// since it's only like 7 lines of code you can easily add it to any project by itself