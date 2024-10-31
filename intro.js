secret.addEventListener('click', function(){
    alert("This is the secret message... not so secret is it?");
})

//When the user clicks the 'light_on' button, change the 'lightbulb' image to show the lightbulb on version

light_on.addEventListener('click', function(){
    console.log("let there be light!");
    document.getElementById("lightbulb").src="lightbulb_on.webp";

    //When this button is pressed, turn the 'light_on' button to be invisible, and the 'light_off' button to be visible
    document.getElementById('light_on').style.display="none";
    document.getElementById('light_off').style.display="initial";
    
    document.body.classList.toggle('light');
})

light_off.addEventListener('click', function(){
    console.log("let there be darkness");
    document.getElementById("lightbulb").src="lightbulb_off.webp";

    //When this button is pressed, turn the 'light_off' button to be invisible, and the 'light_on' button to be visible
    document.getElementById('light_off').style.display="none";
    document.getElementById('light_on').style.display="initial";

    document.body.classList.toggle('light');
})

