function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(msg) {
  console.log(shout(msg));
}

function logWhisper(msg) {
  console.log(whisper(msg));
}