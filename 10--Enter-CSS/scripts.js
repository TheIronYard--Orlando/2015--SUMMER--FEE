// TO OPEN THE ACCORDION:
// What event should I listen for? `click`
// What element should listen for that event? `.cbp-nttrigger`
// _.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element){
//     // What should I do when that event fires?
//     element.addEventListener('click', function(){
//         //   1. Toggle `.cbp-ntopen` from parent `<li>` element
//         element.parentElement.classList.toggle('cbp-ntopen');
//     });
// });

$('.cbp-nttrigger').on('click', function(event){
    $(event.target).parent().toggleClass('cbp-ntopen');
});
