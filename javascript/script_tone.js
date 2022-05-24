

var setupBtn = document.querySelector('.setup');
var CorrectBtn = document.getElementById('Correct');
var IncorrectBtn = document.getElementById('Incorrect');

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.2
    },
    envelope: {
      attack: 0,
      decay: 0.1,
      sustain: 0,
      release: 0.1,
    }
  }).toMaster();
}

function boop() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(440, '8n');
}

//CorrectBtn.addEventListener('click', boop);