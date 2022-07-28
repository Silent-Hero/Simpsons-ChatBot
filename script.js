//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = "Bart"; //name of the chatbot

//edit this function to change what the chatbot says
function chatbotResponse() {
  botMessage = "Eat My Shorts "; //the default message

  if (lastUserMessage === "hello") {
    botMessage = "What up man!";
  }
  if (lastUserMessage === "hi") {
    botMessage = "What up man!";
  }
  if (lastUserMessage === "hey") {
    botMessage = "What up man!";
  }
  if (lastUserMessage === "whats up") {
    botMessage = "Nothing much man!";
  }
  if (lastUserMessage === "what is your father name") {
    botMessage = "Homer!";
  }
  if (lastUserMessage === "who is your favorite singer") {
    botMessage = "Michael Jackson man!";
  }
  if (lastUserMessage === "how come you do not like your sister") {
    botMessage = "She is lame man and not fun to hang around";
  }
  if (lastUserMessage === "what time is it") {
    botMessage = "it is time for you to get a watch";
  }

  if (lastUserMessage === "what is your mother name") {
    botMessage = "Marge";
  }
  if (lastUserMessage === "what is your sisters name") {
    botMessage = "lisa and maggie";
  }
  if (lastUserMessage === "what is your name") {
    botMessage = "I am Bart Simpson who the hell are you ";
  }
  if (lastUserMessage === "tell me about springfield") {
    botMessage =
      "how about you go to the Springfield musuem to learn more about my town";
  }
  if (lastUserMessage === "have you met stewie") {
    botMessage =
      "yeah man he is a great guy. I taught him how to ride a askateboard and use a slingshot rather than a lazergun. I wonder how he is doing";
  }
  if (lastUserMessage === "where do you see yourself after high school") {
    botMessage = "Jail";
  }
  if (lastUserMessage === "what is homer favorite food") {
    botMessage = "porkchops" + botName;
  }
  if (lastUserMessage === "how old are you") {
    botMessage = "10";
  }
  if (
    lastUserMessage === "can you name all the characters above left to right"
  ) {
    botMessage =
      "Ralph, Chief Wiggum, Edna, Principal Skinner, Krusty, Apu, Moe, Grandpa, Homer,Marge, Me, Lisa, Ned Flanders, Patty, Selma, Smithers, Mr.Burns, milhouse, Martin, Willie";
  }
  if (lastUserMessage === "how was Paris") {
    botMessage = "Paris was okay, I mess around with some hungry models";
  }
  if (lastUserMessage === "say something nice about your sister") {
    botMessage =
      "she got the brains and talent to go as far as she wants and when you do I will be right there to borrow money.";
  }

  //var n = lastUserMessage.search('milhouse'); //regular
  //var n = lastUserMessage.search(/milhouse/i); // caps or lowercase
  var n = lastUserMessage.search(/\milhouse\b/i); // words only any case
  if (n !== -1) {
    botMessage = "Milhouse is my partner in crime!";
  }
  var b = lastUserMessage.search(/\grandpa\b/i); // words only any case
  if (b !== -1) {
    botMessage =
      "He was a real father to me. He gave me a bike that I wanted on my 15th birthday and he taught me how to drive when I was little.";
  }
  var c = lastUserMessage.search(/\principal\b/i); // words only any case
  if (c !== -1) {
    botMessage =
      "At Springfield Elementary Principal Skinner is so easy to pull pranks on!";
  }
  var d = lastUserMessage.search(/\joke\b/i); // words only any case
  if (d !== -1) {
    botMessage =
      "I called Moe the other day telling him I was looking for a guy name Mike Rotch.";
  }
  var g = lastUserMessage.search(/\attitude\b/i); // words only any case
  if (g !== -1) {
    botMessage = "Don't have a cow man!";
  }
}

//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    document.getElementById("chatbox").placeholder = "";
    //adds the value of the chatbox to the message array
    messages.push(lastUserMessage);
    //takes the return value from chatbotResponse() and outputs it
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ("speechSynthesis" in window) {
    var utterance = new SpeechSynthesisUtterance(say);
    //utterance.volume = 1; // 0 to 1
    utterance.rate = 0.9; // 0.1 to 10
    utterance.pitch = 1.5; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US3';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log("hi");
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}
