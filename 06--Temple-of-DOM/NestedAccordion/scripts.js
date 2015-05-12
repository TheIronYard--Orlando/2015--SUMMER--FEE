// Just a tracer...
// alert("It's alive!");
// debugger;

document.head.parentElement.className = "js"; // It's alive!

var elements = document.querySelectorAll('h3');

// elements[0].addEventListener('click', function(){
//     elements[0].parentElement.classList.toggle('cbp-ntopen');
// });
//
// elements[1].addEventListener('click', function(){
//     elements[1].parentElement.classList.toggle('cbp-ntopen');
// });

// WHY JAVASCRIPT WHY!?!?
// for ( var index = 0; index < elements.length; index++ ){
//     var element = elements[index]
//     element.addEventListener('click', function(){
//         console.log(elements, index, element);
//         element.parentElement.classList.toggle('cbp-ntopen');
//     });
// }
// console.log(index);

_.forEach(elements, function(element, index, elements){
    element.addEventListener('click', function(){
        console.log(elements, index, element);
        element.parentElement.classList.toggle('cbp-ntopen');
    });
});
