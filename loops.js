for (let track = 1; track <= 30; track++) {
  console.log(`Track ${track}`);
}

let minutes = 0;
let songs = 0;

while (minutes < 120) {
  songs++;
  minutes = minutes + 4;
}
console.log(`${songs} songs, ${minutes} minutes`);
