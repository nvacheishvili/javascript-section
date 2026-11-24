const songCount = 0;

if (songCount === 1) {
  console.log("1 song");
} else if (songCount === 0) {
  console.log("No songs yet");
} else {
  console.log(`${songCount} songs`);
}

const word = songCount === 1 ? "song" : "songs";
console.log(`${songCount} ${word}`);

const playlistName = "Nata's Mix";
console.log(playlistName ? playlistName : "Untitled playlist");
