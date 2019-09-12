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

    function toggleStartStop3() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {
        var recognizing;
    var recognition = new webkitSpeechRecognition();
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
