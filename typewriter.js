const sentence = "Hello lighthouse labs";
let time = 0;

const typewriter = (sentence) => {

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
}
  setTimeout(() => {
    console.log(``)
  }, time)

}

typewriter(sentence);