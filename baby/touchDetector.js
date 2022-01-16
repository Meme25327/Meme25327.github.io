document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    const colors = ["red", "blue", "purple", "green", "brown", "pink"]

    var color = colors[Math.floor(Math.random()*colors.length)];
    alert(color);
    document.body.style.backgroundColor = color;
};