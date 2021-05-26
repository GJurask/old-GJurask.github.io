(function () {
    busAnimation.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById("bus").style.animationDuration = "8s";
        document.getElementById("bus").style.animationName = "animarCarro"
        // Start the animation.
        //document.getElementById("bus").classList.add("carro2");
        setTimeout(() => {
            var a = document.createElement('a');

            // Create the text node for anchor element.
            var link = document.createTextNode("This is link");

            // Append the text node to anchor element.
            a.appendChild(link);

            // Set the title.
            a.title = "This is Link";

            // Set the href property.
            a.href = "https://docs.google.com/forms/d/e/1FAIpQLSdUhiGdIVX3ZxFgEnTCsL0QJIQie8PA2Nk9KGH-mAlSpCH7MA/viewform";
            a.click();
        }, 6000);
        // Create anchor element.

        // Append the anchor element to the body.
        //document.body.prepend(a); 

    });


}());
