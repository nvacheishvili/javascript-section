const songCount = 30;
const songMinutes = 4;
const totalMinutes = songCount * songMinutes;
console.log(totalMinutes, totalMinutes / 60);

const extraMinutes = totalMinutes % 60;
const hours = (totalMinutes - extraMinutes) / 60;
console.log(hours, extraMinutes);

const driveMinutes = 2 * 60;
console.log(totalMinutes >= driveMinutes);
console.log(totalMinutes === driveMinutes);

const isDownloaded = true;
const hasSignal = false;
const canPlay = isDownloaded || hasSignal;
const readyForDrive = totalMinutes >= driveMinutes && canPlay;
console.log(canPlay, readyForDrive, !readyForDrive);
