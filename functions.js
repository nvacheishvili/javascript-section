function printTracklist(count) {
  for (let track = 1; track <= count; track++) {
    console.log(`Track ${track}`);
  }
}

// printTracklist(2);
// printTracklist(4);
/**
 * How long a playlist plays, in minutes
 * @param {number} songCount how many songs are in it
 * @returns its length in minutes
 */
function playlistMinutes(songCount) {
  const minutes = songCount * 4;
  return minutes;
}

const total = playlistMinutes(30);
console.log(total);
