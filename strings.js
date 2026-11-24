const songCount = 1;
const hours = 2;

console.log(songCount + " songs" + ", " + hours + " hours of music");
const summary = `${songCount} songs, ${hours} hours of music`;
console.log(summary);
console.log(summary.length, summary.includes("music"));
console.log(summary.toUpperCase());
console.log(`That's ${hours * 60} minutes`);
