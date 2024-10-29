//Find  start button element by ID and store reference to in variable named startButton.
let startButton = document.getElementById('startButton');
//Find tempo slider element by ID and store reference to in variable named tempoSlider
let tempoSlider = document.getElementById('tempoSlider');
// Find bpm display element by ID and store reference to in variable named bpmDisplay
let bpmDisplay = document.getElementById('bpmDisplay');
// Assign the value of tempoSlider to innerHTML property bpmDisplay.
//
//
//oninput event occurs when the value of an <input> element is changed.
//
//Declare an annonomyous function and assign it the value of the oninput eventhandler of the property tempoSlider
//in other words // when the value of the tempoSlider changes---> update the BPM display
//Assign value of BPM property of the Tone.transport object to the value of tempoSlider //updates bpm dynamically as user adjusts slider
//Assign the innnerHtml property of the bpmDisplay to this.value, which refers to the value of the tempoSlider
//
//Transport definition:The transport emits the events: “start”, “stop”, “pause”, and “loop” which are called with the time of that event as the argument

// Initialize sound variable
//
//Initialize new variable loop// Assign it to new instance of Tone Sequence // passing in an anonymous function that take time and note paramenter
// Tone sequence is a class // when the new keyword is used you create an instance of Tone Sequence class // creating an objecrt
//
//console.log current step
//
//within Code block , call sound / triggerAttackRelease triggers a note / note C6 and 64n note duration are passed in (this is the callback)
//
//Array represent a series of steps the callback function will iterate over //"8n" specifies that each step occurs at an interval of 1/8th of a note// .start method begins sequence at 0
//
//let sequence = new Tone.Sequence(callback, events, subdivision);
//
//When transport emits "stop" // it will execute a function that logs "loop stopped"// not necessary
//Assign value of BPM property of the Tone.transport object to the value of tempoSlider // sets initial bpm
//
//Assign on click event of start button to annomouys function
//On click Calls a function when a button is clicked
//
//within code block: 
//if sound is null, assign sound to a new instance of Tone.Synth
//Tone.Synth is a basic synthesizer with a single oscillator. toMaster() connects Tone.Synth to master output // routes sound to your speakers
//console.log created synth //this condition creates synth if sound doesnt exist
// if state of tone.transport is NOT started, then call tone.transport.start()
//reassign the inner text property to the string "stop"
//else - call tone.transport.stop(), 
// reassign the inner text property to the string "start"





