// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


//   var recognition = new webkitSpeechRecognition();
//       recognition.maxAlternatives = 10;
//       recognition.onresult = function(n) {
//         if (n.results.length > 0) {
//           var result = n.results[1];
//           for (var i = 0; i < result.length; ++i) {
//             var text = result[i].transcript;
//             select.options[i] = new Option(text, text);
//           }
//         }
//       }

//       // function start() {
//       //   select.options.length = 0;
//       //   recognition.start();
        
//       // }

  

//      var recognizing;
// //     var recognition = new webkitSpeechRecognition();
// //     recognition.continuous = true;
// //     reset();
// //     recognition.onend = reset;

// //     recognition.onresult = function (event) {
// //       for (var i = event.resultIndex; i < event.results.length; ++i) {
// //       if (event.results[i]) {
// //       lastname.value += event.results[i][0].transcript;
// //     }
// //   }
// // }


//     function reset() {
//       recognizing = false;
//       // button.innerHTML = "Click to Speak";
//     }

//     function toggleStartStop1() {
//       if (recognizing) {
//         recognition.stop();
//         reset();
//       } else {
//          var recognizing;
//     var recognition = new webkitSpeechRecognition();
//     recognition.continuous = true;
//     reset();
//     recognition.onend = reset;

//     recognition.onresult = function (n) {
//       for (var i = n.resultIndex; i < n.results.length; ++i) {
//       if (n.results[i]) {
//       lastname.value += n.results[i][1].transcript;

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
      recognition.onresult = function(even) {
        if (even.results.length > 0) {
          var result = even.results[0];
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

    function toggleStartStop1() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {
         var recognizing;
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (even) {
      for (var i = even.resultIndex; i < even.results.length; ++i) {
      if (even.results[i]) {
      lastname.value += even.results[i][0].transcript;
    }
  }
}
        recognition.start();
        recognizing = true;
        // button.innerHTML = "Click to Stop";
      }
    }

