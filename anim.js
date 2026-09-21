var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "They say, you know when you know", time: 10.14 },
  { text: "So let's face it, you had me at hello", time: 17.14 },
  { text: "Hesitation never helps", time: 24.84 },
  { text: "How could this be anything, anything else?", time: 28.21 },

  { text: "When all I dream of is your eyes", time: 32.71 },
  { text: "All I long for is your touch", time: 37.78 },
  { text: "And, darling, something tells me that's enough, mmm", time: 41.29 },
  { text: "You can say that I'm a fool", time: 47.89 },
  { text: "And I don't know very much", time: 51.57 },
  { text: "But I think they call this love", time: 54.82 },

  { text: "One smile, one kiss, two lonely hearts is all that it takes", time: 64.93 },
  { text: "Now, baby, you're on my mind, every night, every day", time: 71.35 },
  { text: "Good vibrations getting loud", time: 79.69 },
  { text: "How could this be anything, anything else?", time: 83.15 },

  { text: "When all I dream of is your eyes", time: 87.42 },
  { text: "All I long for is your touch", time: 92.61 },
  { text: "And, darling, something tells me that's enough, mmm", time: 96.32 },
  { text: "You can say that I'm a fool", time: 103.02 },
  { text: "And I don't know very much", time: 106.38 },
  { text: "But I think they call this love", time: 109.75 },
  { text: "Oh, I think they call this love", time: 116.48 },

  { text: "What could this be?", time: 135.16 },
  { text: "Between you and me", time: 137.47 },

  { text: "All I dream of is your eyes", time: 141.88 },
  { text: "All I long for is your touch", time: 147.49 },
  { text: "And, darling, something tells me, tells me it's enough, mmm", time: 151.19 },
  { text: "You could say that I'm a fool", time: 157.56 },
  { text: "And I don't know very much", time: 161.22 },
  { text: "But I think they call", time: 164.43 },
  { text: "Oh, I think they call", time: 168.01 },
  { text: "Yes, I think they call this love", time: 171.34 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);