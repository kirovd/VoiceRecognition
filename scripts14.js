// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


//   var recognition = new webkitSpeechRecognition();
//       recognition.maxAlternatives = 10;
//       recognition.onresult = function(event) {
//         if (event.results.length > 0) {
//           var result = event.results[0];
//           for (var i = 0; i < result.length; ++i) {
//             var text = result[i].transcript;
//             select.options[i] = new Option(text, text);
//           }
//         }
//       }

//       function start() {
//         select.options.length = 0;
//         recognition.start();
        
//       }

  

//      // var recognizing;
//     // var recognition = new webkitSpeechRecognition();
//     // recognition.continuous = true;
//     // reset();
//     // recognition.onend = reset;

//     // recognition.onresult = function (event) {
//     //   for (var i = event.resultIndex; i < event.results.length; ++i) {
//     //   if (event.results[i]) {
//     //   name1.value += event.results[i][0].transcript;
//     }
//     //   if (event.results[i]) {
//     //   lastname.value += event.results[i][0].transcript;
//     // }
//     //   if (event.results[i]) {
//     //   date.value += event.results[i][0].transcript;
//     // }

//     //   if (event.results[i]) {
//     //   to.value += event.results[i][0].transcript;
//     // }
//   }
// }


//     function reset() {
//       recognizing = false;
//       // button.innerHTML = "Click to Speak";
//     }

//     function toggleStartStop() {
//       if (recognizing) {
//         recognition.stop();
//         reset();
//       } else {
//     var recognition = new webkitSpeechRecognition();
//     recognition.continuous = true;
//     reset();
//     recognition.onend = reset;

//     recognition.onresult = function (event) {
//       for (var i = event.resultIndex; i < event.results.length; ++i) {
//       if (event.results[i]) {
//       name1.value += event.results[i][0].transcript;

//         recognition.start();
//         recognizing = true;
//         // button.innerHTML = "Click to Stop";
//       }
//     }
//   }
// }
// }

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


  var recognition = new webkitSpeechRecognition();
      recognition.maxAlternatives = 10;
      recognition.onresult = function(ev) {
        if (ev.results.length > 0) {
          var result = ev.results[0];
          for (var i = 0; i < result.length; ++i) {
            var text = result[i].transcript;
            select.options[i] = new Option(text, text);
          }
        }
      }

      function start() {
        select.options.length = 0;
        recognition.start();
        
      }

  
    function reset() {
      recognizing = false;
      // button.innerHTML = "Click to Speak";
    }

    function toggleStartStop14() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {

         var recognizing;

    var recognition = new webkitSpeechRecognition();
    recognition.start();
        recognizing = true;
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (ev) {
      for (var i = ev.resultIndex; i < ev.results.length; ++i) {
      if (ev.results[i]) {
      to.value += ev.results[i][0].transcript;
    }
  }
}
        recognition.start();
        recognizing = true;
        // button.innerHTML = "Click to Stop";
      }
    }
