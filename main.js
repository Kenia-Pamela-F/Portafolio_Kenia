let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de ingeniería mécanica y me interesa el desarrollo web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
