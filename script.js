
// Inyectar estilos dinámicamente
const style = document.createElement('style');
style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #0d1a26 0%, #000000 100%);
  color: #fff;
  font-family: 'Great Vibes', cursive;
  transition: background 1.5s ease, color 1.5s ease;
}

body.iluminado {
  background: #aee1f9;
  color: #000000;
}

.estrellas::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: transparent url('imagenes/estrellas.png') repeat;
  background-size: contain;
  animation: moverEstrellas 100s linear infinite;
  z-index: -1;
}

@keyframes moverEstrellas {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100px); }
}

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
}

.estrella {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #fffacd, #ffd700);
  border-radius: 50%;
  box-shadow: 0 0 20px 10px #ffff99;
  animation: brillar 1s infinite alternate;
  position: relative;
}

.texto-estrella {
  color: #fdfcfc;
  font-size: 1rem;
  text-align: center;
  margin-top: 110px;
  font-family: 'Great Vibes', cursive;
  width: 150px;
}

@keyframes brillar {
  0% { box-shadow: 0 0 20px 10px #ffff99; }
  100% { box-shadow: 0 0 40px 20px #ffffff; }
}

#mensaje {
  display: none;
  margin-top: 30px;
  max-width: 600px;
}

.texto-principal {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: inherit;
  overflow: hidden;
  white-space: normal;
  display: inline-block;
  position: relative;
}

.texto-principal::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  animation: revealText 6s steps(100) forwards;
  top: 0;
  left: 0;
}

.firma {
  font-size: 1.2rem;
  color: #007BFF;
  margin-top: 10px;
  opacity: 0;
  animation: aparecerFirma 2s ease 6s forwards;
}

@keyframes revealText {
  from { width: 100%; }
  to { width: 0%; }
}

@keyframes aparecerFirma {
  from { opacity: 0; }
  to { opacity: 1; }
}

#ramo {
  display: none;
  margin-top: 30px;
}

#ramo img {
  width: 200px;
  animation: aparecer 2s ease-in-out forwards;
}

@keyframes aparecer {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}

.burbujas {
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.burbuja {
  position: absolute;
  bottom: -100px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: flotar 10s linear infinite;
}

@keyframes flotar {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-120vh) scale(0.5);
    opacity: 0;
  }
}

.mariposas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  display: none;
}

.mariposa {
  position: absolute;
  width: 50px;
  height: 50px;
  background: url('imagenes/mariposa.png') no-repeat center center;
  background-size: contain;
  animation: volar 10s linear infinite;
}

@keyframes volar {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-200px) translateX(100px) rotate(180deg);
  }
  100% {
    transform: translateY(-400px) translateX(200px) rotate(360deg);
    opacity: 0;
  }
}


.texto-principal {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  white-space: pre-line;
  color: #050505;
  background: rgba(255,255,255,0.92);
  padding: 1em 1.5em 1em 1em;
  border-radius: 0.7em;
  box-shadow: 0 2px 16px #e6002611;
  opacity: 0;
  max-width: 600px;
  transition: opacity 1s ease;
}

.texto-principal.visible {
  opacity: 1;
}

.firma {
  font-family: 'Dancing Script', 'Pacifico', cursive, sans-serif;
  font-size: 2.2rem;
  color: #e60026;
  margin-top: 1.5em;
  white-space: pre;
  opacity: 0;
  transition: opacity 0.7s;
}

.firma.visible {
  opacity: 1;
  animation: signature-draw 2.2s steps(24) forwards;
}

@keyframes signature-draw {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}

@keyframes fadeInText {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;
document.head.appendChild(style);

// Generar estructura HTML desde JavaScript
document.body.className = 'estrellas';
document.body.innerHTML = `
  <div class="contenedor">
    <div id="estrella" class="estrella">
      <p class="texto-estrella">Eres la persona que ilumina mi vida</p>
    </div>
    <div class="mensaje" id="mensaje">
      <p class="texto-principal" id="texto-principal">
        Te admiro y valoro por la persona increíble que eres, llena de fuerza y ternura.
        Me inspiras y das sentido a mi vida con solo ser tú.
        Quiero estar a tu lado, apoyarte y compartir cada instante contigo.
      </p>
      <p class="firma" id="firma">Con cariño y amor, Machapa.</p>
    </div>
    <div class="ramo" id="ramo">
      <img src="imagenes/tulipanes.png" alt="Ramo de tulipanes">
    </div>
  </div>

  <div class="burbujas">
    <div class="burbuja" style="left: 10%; animation-delay: 0s;"></div>
    <div class="burbuja" style="left: 30%; animation-delay: 2s;"></div>
    <div class="burbuja" style="left: 50%; animation-delay: 4s;"></div>
    <div class="burbuja" style="left: 70%; animation-delay: 1s;"></div>
    <div class="burbuja" style="left: 90%; animation-delay: 3s;"></div>
  </div>

  <audio id="bg-music" autoplay loop>
    <source src="No.5 The Day I Met Her - Esther Abrami.mp3" type="audio/mpeg" />
    Tu navegador no soporta la reproducción de audio.
  </audio>

  <div class="mariposas" id="mariposas">
    <div class="mariposa" style="left: 10%; animation-delay: 0s;"></div>
    <div class="mariposa" style="left: 30%; animation-delay: 1s;"></div>
    <div class="mariposa" style="left: 50%; animation-delay: 2s;"></div>
    <div class="mariposa" style="left: 70%; animation-delay: 3s;"></div>
    <div class="mariposa" style="left: 90%; animation-delay: 4s;"></div>
  </div>
`;

// Resto de la lógica original
document.addEventListener("DOMContentLoaded", () => {
  const estrella = document.getElementById("estrella");
  const mensaje = document.getElementById("mensaje");
  const ramo = document.getElementById("ramo");
  const body = document.body;
  const mariposas = document.getElementById("mariposas");

  setTimeout(() => {
    estrella.style.display = "none";
    body.classList.add("iluminado");
    mensaje.style.display = "block";
    mensaje.classList.add("escribiendo");
    ramo.style.display = "block";
    mariposas.style.display = "block";
  }, 5000);
});


// Mostrar texto y firma con efecto máquina de escribir
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("texto-principal");
  const firmaElement = document.getElementById("firma");
  const fullText = textElement.textContent.trim();
  textElement.textContent = "";
  let i = 0;

  function typeChar() {
    if (i <= fullText.length) {
      textElement.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeChar, fullText[i - 2] === '\n' ? 350 : 45);
    } else {
      textElement.classList.add("visible");
      setTimeout(() => {
        firmaElement.classList.add("visible");
      }, 1000);
    }
  }

  typeChar();
});

