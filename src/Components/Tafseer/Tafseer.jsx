import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Tafseer.css";
import { useParams } from 'react-router-dom';
function Tafseer({ surahs }) {
  const params = useParams();
  const id = params.surahID;
  const [surasTafsser, setSuarsTafsser] = useState([]);
  useEffect(() => {
    axios.get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`)
      .then(response => {
        setSuarsTafsser(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="tafseer">
      <div className='container'>
        {
          surasTafsser.map((surah) => {
            return (
              <div key={surah.id} className='quran-tafseer'>
                <span className="ayah">({ surah.aya}) {surah.arabic_text } : </span>
                <span  className="tafseer">{surah.translation }</span>
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default Tafseer