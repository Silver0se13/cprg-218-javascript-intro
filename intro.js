secret.addEventListener('click', function(){
    alert("This is the secret message... not so secret is it?");
})

//When the user clicks the 'light_on' button, change the 'lightbulb' image to show the lightbulb on version

light_on.addEventListener('click', function(){
    console.log("let there be light!");
    document.getElementById("lightbulb").src="lightbulb_on.webp";
})

light_off.addEventListener('click', function(){
    console.log("let there be darkness");
    document.getElementById("lightbulb").src="lightbulb_off.webp";
})