// Global variables
var counter = 0;
var frets = 12;

var minorPentatonic = "The minor pentatonic scale is the most widely used in lead guitar. It can be played in five different, distinct shapes.";
var majorPentatonic = "The major pentatonic scale can be seen as playing a minor pentatonic of that scale but slid down three frets on the guitar neck. Thus, it is same to say that the major pentatonic for scale of base X is the same as the minor pentatonic for the scale for base X-3 frets.";
var major = "This is a major scale.";
var minor = "This is a minor scale.";
var harmonicMajor = "This is the harmonic major scale.";
var harmonicMinor = "This is the harmonic minor scale.";
var melodicMajor = "This is the melodic major scale.";


// Edits the array of notes to get an array only with the notes in the scale
function getChord(chord_array, string_array) {
  for (var i=0; i<string_array.length; i++) {
    if ((getNote(chord_array[0]) != string_array[i]) && (getNote(chord_array[1]) != string_array[i]) && (getNote(chord_array[2]) != string_array[i]) && (getNote(chord_array[3]) != string_array[i]) && (getNote(chord_array[4]) != string_array[i]) && (getNote(chord_array[5]) != string_array[i]) && (getNote(chord_array[6]) != string_array[i]))  {
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
function getFullChord(y, x) {
  switch(y) {
    case "Minor Pentatonic": return [(x+0)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+10)%frets];
    case "Major Pentatonic": return [(x-3)%frets, (x+0)%frets, (x+2)%frets, (x+4)%frets, (x+7)%frets, (x+9)%frets];
    case "Major": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+9)%frets, (x+11)%frets];
    case "Minor": return [(x+0)%frets, (x+2)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+10)%frets];
    case "Harmonic Major": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+11)%frets];
    case "Harmonic Minor": return [(x+0)%frets, (x+2)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+11)%frets];
    case "Melodic Major": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+10)%frets];
    default: return "error";
  }
}


// Reads what type of chord is being requested, returns text based on that chord
function getText() {
    var text;
    var type = document.getElementById("type").value;
    switch(type) {
      case "Minor Pentatonic":
        text = minorPentatonic;
        break;
      case "Major Pentatonic":
        text = majorPentatonic;
        break;
      case "Major":
        text = major;
        break;
      case "Minor":
        text = minor;
        break;
      case "Harmonic Major":
        text = harmonicMajor;
        break;
      case "Harmonic Minor":
        text = harmonicMinor;
        break;
      case "Melodic Major":
        text = melodicMajor;
        break;
      default:
        text = "";
    }
    document.getElementById("varText").innerHTML = text;
}



function launch() {

  $("#div1").fadeOut(0);
  clearArrays();
  $("#div1").fadeIn(500);

  var string6 = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#'];
	var	string5 = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
	var	string4 = ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'];
	var	string3 = ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'];
	var	string2 = ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#'];
  var string1 = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#'];


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



  for (var i=0; i<14; i++){
    $(".notes1 ul").append('<li>'+string1[(i)]+'</li>');
    $(".notes2 ul").append('<li>'+string2[(i)%frets]+'</li>');
    $(".notes3 ul").append('<li>'+string3[(i)%frets]+'</li>');
    $(".notes4 ul").append('<li>'+string4[(i)%frets]+'</li>');
    $(".notes5 ul").append('<li>'+string5[(i)%frets]+'</li>');
    $(".notes6 ul").append('<li>'+string6[(i)%frets]+'</li>');
  }

  $("#varText").fadeOut(0);
  getText();
  $("#varText").fadeIn(500);

}
