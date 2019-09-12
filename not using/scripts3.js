var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


  var recognition = new webkitSpeechRecognition();
      recognition.maxAlternatives = 10;
      recognition.onresult = function(eve) {
        if (eve.results.length > 0) {
          var result = eve.results[0];
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

    function toggleStartStop2() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {
        var recognizing;
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (eve) {
      for (var i = eve.resultIndex; i < eve.results.length; ++i) {
      if (eve.results[i]) {
      date.value += eve.results[i][0].transcript;
    }
  }
}
        recognition.start();
        recognizing = true;
        // button.innerHTML = "Click to Stop";
      }
    }
