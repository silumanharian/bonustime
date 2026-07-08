// ========================================
// TARIK DANA
// ========================================

document.querySelectorAll(".nominal-btn").forEach(btn => {

    btn.addEventListener("click", () => {
        showWithdrawPopup(btn.innerText);
    });

});



// ========================================
// POPUP TARIK DANA
// ========================================

function showWithdrawPopup(nominal) {

    if (document.querySelector(".popup")) return;

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerHTML = `
        <div class="popup-box">

            <i class="bi bi-wallet2"></i>

            <h3>Tarik Dana</h3>

            <p>
                Anda memilih penarikan
                <br>
                <b>${nominal}</b>
            </p>

            <button id="processWithdraw">
                LANJUTKAN
            </button>

        </div>
    `;

    document.body.appendChild(popup);

    // klik area luar popup
    popup.addEventListener("click", function(e){

        if(e.target === popup){

            closePopup();

        }

    });

    document
        .getElementById("processWithdraw")
        .addEventListener("click", function(e){

            e.stopPropagation();

            processLoading(nominal);

        });

}



// ========================================
// LOADING
// ========================================

function processLoading(nominal){

    const popup = document.querySelector(".popup");

    popup.innerHTML = `
        <div class="popup-box">

            <div class="loader"></div>

            <h3>Memproses...</h3>

            <p>Mohon tunggu sebentar...</p>

        </div>
    `;

    setTimeout(()=>{

        popup.innerHTML=`

            <div class="popup-box">

                <i class="bi bi-check-circle-fill"
                style="font-size:55px;color:#2ecc71"></i>

                <h3>Berhasil Diproses</h3>

                <p>
                    Penarikan <b>${nominal}</b><br>
                    Silakan aktivasi akun
                </p>

                <button id="btnWebsite">
                    OK
                </button>

            </div>

        `;

        document
        .getElementById("btnWebsite")
        .addEventListener("click",function(e){

            e.stopPropagation();

            goToWebsite();

        });

    },2000);

}



// ========================================
// CLOSE POPUP
// ========================================

function closePopup(){

    const popup=document.querySelector(".popup");

    if(!popup) return;

    popup.classList.add("hide");

    setTimeout(()=>{

        popup.remove();

    },350);

}



// ========================================
// WEBSITE
// ========================================

function goToWebsite(){

    const popup=document.querySelector(".popup");

    if(popup){

        popup.classList.add("hide");

        setTimeout(()=>{

            popup.remove();

            window.location.href="https://pagarnaga.me/";

        },350);

    }else{

        window.location.href="https://pagarnaga.me/";

    }

}
