var dynamicText = document.getElementById('dynamic-text');
var messages = ["Zain Khan", "a web developer", "a student"];
var index = 0;
function changeText() {
    dynamicText.textContent = `I am `+ messages[index];
    index = (index + 1) % messages.length; // Cycle through messages
}
// Change text every 2 seconds (2000 ms)
setInterval(changeText, 2000);
// Initialize with the first message
changeText();
