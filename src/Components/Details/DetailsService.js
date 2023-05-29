let AyatAudio = [];
let num_t = 1;
function createAudio(currentSurah, start, end, num) {
  num_t = num;
  AyatAudio = [];
  let zeros = currentSurah <= 9 ? `00` : currentSurah <= 99 ? `0` : ``;
  for (let i = start; i <= end; ++i) {
    AyatAudio.push(
      new Audio(
        `https://everyayah.com/data/Abdullah_Basfar_32kbps/${zeros}${currentSurah}00${i}.mp3`
      )
    );
  }

  playAudio(0);
}

function playAudio(audioPointer) {
  if (audioPointer < AyatAudio.length) {
    AyatAudio[audioPointer].addEventListener("ended", () => {
      playAudio(audioPointer + 1);
    });
    AyatAudio[audioPointer].play();
  } else {
    if (num_t > 1) {
      num_t = num_t - 1;
      playAudio(0);
    }
  }
}

function numbers(len) {
  let startOptions = [];
  for (let i = 1; i <= len; ++i) {
    startOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return startOptions;
}

export { createAudio, numbers };
