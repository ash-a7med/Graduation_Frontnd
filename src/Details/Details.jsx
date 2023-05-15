import React from 'react'

function Details() {
  return (
    <section class="signup">
        <div class="container">
            <form class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                        <h1 
                        class="text-center mb-5 fs-4"
                        >سورة الناس - سورة 114 - عدد آياتها 6</h1>
                        <p class="text-center mb-5">
                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ      <br />               
                            قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)   
                        </p>
                        <div class="details_btns d-flex justify-content-between align-items-center ">
                            <button>
                                اخفاء النص
                            </button>
                            <button>
                                تسميع
                            </button>
                            <button>
                                تكرار استماع
                            </button>
                        </div>
                </div>
                <div class="col-md-4"></div> 
            </form>
        </div>
    </section>
  )
}

export default Details