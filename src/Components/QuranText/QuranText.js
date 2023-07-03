import React from "react";
import "./QuranText.css";

function QuranText() {
  return (
    <div class="embed-container">
      <iframe
        src="https://epub.qurancomplex.gov.sa/issues/hafs/mumtaz/"
        style={{ border: 0, overflow: "-moz-hidden-unscrollable" }}
      ></iframe>
    </div>
  );
}

export default QuranText;
