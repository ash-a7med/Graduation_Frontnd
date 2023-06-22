function createAudio(currentSurah, start, end) {
  let AyatAudio = [];
  let zeros = currentSurah <= 9 ? `00` : currentSurah <= 99 ? `0` : ``;
  for (let i = start; i <= end; ++i) {
    AyatAudio.push(
      new Audio(
        `https://everyayah.com/data/Abdullah_Basfar_32kbps/${zeros}${currentSurah}0${
          i < 10 ? `0${i}` : i
        }.mp3`
      )
    );
  }

  return AyatAudio;
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
