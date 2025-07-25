// Particle effect for falling hearts and flowers
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const isHeart = Math.random() > 0.5;
  particle.style.backgroundImage = isHeart
    ? "url('https://img.icons8.com/emoji/40/000000/heart-suit.png')"
    : "url('https://img.icons8.com/emoji/40/000000/rose-emoji.png')";
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = Math.random() * 4 + 3 + 's';
  particle.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 7000);
}

setInterval(createParticle, 200);

// Button interaction
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const pleadContainer = document.getElementById('plead');
const pleadText = document.getElementById('plead-text');
const pleadImage = document.getElementById('plead-image');
const successScreen = document.getElementById('success');
const audio = document.getElementById('background-music');
const toggleAudioBtn = document.getElementById('toggle-audio');
let yesScale = 1;
let noClicks = 0;

const pleas = [
  { text: 'Anh hứa sẽ yêu thương em hết lòng! 🥺'},
  { text: 'Đừng từ chối anh mà, em ơi! 😢'},
  { text: 'Trái tim anh chỉ có mình em thôi! 💖'},
  { text: 'Làm ny anh đi, anh sẽ cho em cả thế giới! 🌍'},
  { text: 'Em là ánh sáng của đời anh, đồng ý nhé? ✨'}
];

// Audio control
audio.play().catch(e => console.log("Audio play failed:", e));
toggleAudioBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleAudioBtn.textContent = 'Pause Music';
  } else {
    audio.pause();
    toggleAudioBtn.textContent = 'Play Music';
  }
});

noBtn.addEventListener('click', () => {
  noClicks++;
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;
  pleadContainer.style.display = 'block';
  const randomPlea = pleas[Math.floor(Math.random() * pleas.length)];
  pleadText.textContent = randomPlea.text;
  pleadImage.src = randomPlea.image;
});

yesBtn.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
  successScreen.style.display = 'flex';
});
