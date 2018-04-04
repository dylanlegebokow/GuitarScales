// Global variables
var counter = 0;
var frets = 12;

var minorPentatonic = "The minor pentatonic scale is the most widely used in lead guitar. It can be played in five different, distinct shapes.";
var majorPentatonic = "The major pentatonic scale is the same as playing the minor pentatonic slid down three frets on the guitar neck. Thus, the C major pentatonic scale is the same as the A minor pentatonic scale.";
var ionian = "The Ionian mode, also known as the natural major scale, is the first of the seven musical modes.";
var aeolian = "The Aeolian mode, also known as the natural minor scale, is the sixth of the seven musical modes. The Aeolian mode is the scale that appears when the Ionian mode (natural major scale) is started from the sixth note, ending a full octave above. Thus, the C Ionian mode is the same as the A Aeolian mode.";
var harmonicMajor = "The harmonic major is similar to the Ionian mode (natural major scale) except for a lowered sixth note.";
var harmonicMinor = "The harmonic minor is similar to the Aeolian mode (natural minor scale) except for a raised seventh note.";
var dorian = "The Dorian mode is the second of the seven musical modes. It is similar to the natural minor scale (Aeolian mode) except for the raised sixth note. The Dorian mode is the minor scale that appears when the Ionian mode (natural major scale) is started from the second note, and ending a full octave above. Thus, the C Ionian mode is the same as the D Dorian mode.";
var phrygian = "The Phrygian mode is the third of the seven musical modes. It is similar to the natural minor scale (Aeolian mode) except for the lowered second note. The Phrygian mode is the minor scale that appears when the Ionian mode (natural major scale) is started from the thrid note, and ending a full octave above. Thus, the C Ionian mode is the same as the E Phrygian mode.";
var lydian = "The Lydian mode is the fourth of the seven musical modes. It is similar to the natural major scale (Ionian mode) except for the raised fourth note. The Lydian mode is the major scale that appears when the Ionian mode (natural major scale) is started from the fourth note, and ending a full octave above. Thus, the C Ionian mode is the same as the F Lydian mode.";
var mixolydian = "The Mixolydian mode is the fifth of the seven musical modes. It is similar to the natural major scale (Ionian mode) except for the lowered seventh note. The Mixolydian mode is the major scale that appears when the Ionian mode (natural major scale) is started from the fifth note, and ending a full octave above. Thus, the C Ionian mode is the same as the G Mixolydian mode.";
var locrian = "The Locrian mode is the seventh of the seven musical modes. It is similar to the natural minor scale (Aeolian mode) except for the lowered second and fifth notes. The Locrian mode is the minor scale that appears when the Ionian mode (natural major scale) is started from the seventh note, and ending a full octave above. Thus, the C Ionian mode is the same as the B Locrian mode.";
var blues = "The blues scale is similar to the minor pentatonic with an additional lowered fifth note.";

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
    case "Ionian": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+9)%frets, (x+11)%frets];
    case "Dorian": return [(x+0)%frets, (x+2)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+9)%frets, (x+10)%frets];
    case "Phrygian": return [(x+0)%frets, (x+1)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+10)%frets];
    case "Lydian": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+6)%frets, (x+7)%frets, (x+9)%frets, (x+11)%frets];
    case "Mixolydian": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+9)%frets, (x+10)%frets];
    case "Aeolian": return [(x+0)%frets, (x+2)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+10)%frets];
    case "Locrian": return [(x+0)%frets, (x+1)%frets, (x+3)%frets, (x+5)%frets, (x+6)%frets, (x+8)%frets, (x+10)%frets];
    case "Harmonic Major": return [(x+0)%frets, (x+2)%frets, (x+4)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+11)%frets];
    case "Harmonic Minor": return [(x+0)%frets, (x+2)%frets, (x+3)%frets, (x+5)%frets, (x+7)%frets, (x+8)%frets, (x+11)%frets];
    case "Blues": return [(x+0)%frets, (x+3)%frets, (x+5)%frets, (x+6)%frets, (x+7)%frets, (x+10)%frets];
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
      case "Ionian":
        text = ionian;
        break;
      case "Dorian":
        text = dorian;
        break;
      case "Phrygian":
        text = phrygian;
        break;
      case "Lydian":
        text = lydian;
        break;
      case "Mixolydian":
        text = mixolydian;
        break;
      case "Aeolian":
        text = aeolian;
        break;
      case "Locrian":
        text = locrian;
        break;
      case "Harmonic Major":
        text = harmonicMajor;
        break;
      case "Harmonic Minor":
        text = harmonicMinor;
        break;
      case "Blues":
        text = blues;
        break;
      default:
        text = "";
    }
    document.getElementById("varText").innerHTML = text;
}



function launch() {

  $("#div1").fadeOut(0);
  clearArrays();
  $("#div1").fadeIn(350);

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
  $("#varText").fadeIn(350);

}
