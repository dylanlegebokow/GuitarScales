// Global variables
var counter = 0;
var frets = 12;


// Edits the array of notes to get an array only with the notes in a chord
function getChord(chord_array, string_array) {
  for (var i=0; i<string_array.length; i++) {
    if ((getNote(chord_array[0]) != string_array[i]) && (getNote(chord_array[1]) != string_array[i]) && (getNote(chord_array[2]) != string_array[i]) && (getNote(chord_array[3]) != string_array[i]))  {
      string_array[i] = '';
    }
  }
  return string_array;
}


// Clears the notes arrays
function clearArrays() {
  $(".notes1 ul").empty();
  $(".notes2 ul").empty();
  $(".notes3 ul").empty();
  $(".notes4 ul").empty();
  $(".notes5 ul").empty();
  $(".notes6 ul").empty();
}


// Turns a note value into an integer value
function getInt(x) {
    switch(x) {
      case "E": return 0;
      case "F": return 1;
      case "F#": return 2;
      case "G": return 3;
      case "G#": return 4;
      case "A": return 5;
      case "A#": return 6;
      case "B": return 7;
      case "C": return 8;
      case "C#": return 9;
      case "D": return 10;
      case "D#": return 11;
    }
}


// Turns an integer value into a note value
function getNote(x) {
    switch(x) {
      case 0: return "E";
      case 1: return "F";
      case 2: return "F#";
      case 3: return "G";
      case 4: return "G#";
      case 5: return "A";
      case 6: return "A#";
      case 7: return "B";
      case 8: return "C";
      case 9: return "C#";
      case 10: return "D";
      case 11: return "D#";
      default: return "-";
    }
}


// Gets all the notes in a particular chord
// WILL HAVE TO CHANGE INSTEAD TO READING A TEXT FILE OR SOMETHING ELSE
function getFullChord(y, x) {
  switch(y) {
    case "Major": return [(x+0)%frets, (x+4)%frets, (x+7)%frets];
    case "Minor": return [(x+0)%frets, (x+3)%frets, (x+7)%frets];
    case "Seventh": return [(x+0)%frets, (x+4)%frets, (x+7)%frets, (x+10)%frets];
    default: return "error";
  }
}


function launch() {

  clearArrays();

  var string6 = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'];
	var	string5 = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C'];
	var	string4 = ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F'];
	var	string3 = ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#'];
	var	string2 = ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'];
  var string1 = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'];


  // Gets the elements in the drop down boxes
  var root = document.getElementById("root");
  root = root.options[root.selectedIndex].text;
  var type = document.getElementById("type");
  type = type.options[type.selectedIndex].text;
  var root_int = getInt(root);
  var root_value = getNote(root_int);
  var chord = getFullChord(type, root_int);

  string1 = getChord(chord, string1);
  string2 = getChord(chord, string2);
  string3 = getChord(chord, string3);
  string4 = getChord(chord, string4);
  string5 = getChord(chord, string5);
  string6 = getChord(chord, string6);


  for (var i=0; i<frets; i++){
    $(".notes1 ul").append('<li>'+string1[(i+1)%frets]+'</li>');
    $(".notes2 ul").append('<li>'+string2[(i+1)%frets]+'</li>');
    $(".notes3 ul").append('<li>'+string3[(i+1)%frets]+'</li>');
    $(".notes4 ul").append('<li>'+string4[(i+1)%frets]+'</li>');
    $(".notes5 ul").append('<li>'+string5[(i+1)%frets]+'</li>');
    $(".notes6 ul").append('<li>'+string6[(i+1)%frets]+'</li>');
  }

}
