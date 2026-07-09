// ========================================
// LOGIN
// ========================================

function loginID() {

    const input = document.getElementById("userID");

    if (!input) return;

    const id = input.value.trim();

    if (id === "") {

        alert("Silahkan masukkan ID terlebih dahulu");
        input.focus();
        return;

    }

    // simpan ID
    localStorage.setItem("userID", id);

    const loading = document.getElementById("loading");

    if (loading) {

        loading.style.display = "flex";

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1500);

    } else {

        window.location.href = "home.html";

    }

}
// ========================================
// ANIMASI SALDO
// ========================================

function animateBalance(target){

    const balance=document.getElementById("balanceAmount");

    if(!balance) return;

    const duration=1800;

    const startTime=performance.now();

    function update(time){

        const progress=Math.min((time-startTime)/duration,1);

        const value=Math.floor(progress*target);

        balance.innerHTML="Rp"+value.toLocaleString("id-ID");

        if(progress<1){

            requestAnimationFrame(update);

        }else{

            balance.animate([
                {transform:"scale(1)"},
                {transform:"scale(1.08)"},
                {transform:"scale(1)"}
            ],{
                duration:300
            });

        }

    }

    requestAnimationFrame(update);

}
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

// ========================================
// PAGE TRANSITION
// ========================================

function goPage(url){

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = url;
    }, 300);

}

// ========================================
// LOGIN PROTECTION
// ========================================

(function () {

    const currentPage = window.location.pathname.split("/").pop();

    // Halaman yang boleh dibuka tanpa login
    const publicPages = [
        "",
        "index.html"
    ];

    if (publicPages.includes(currentPage)) return;

    const userID = localStorage.getItem("userID");

    if (!userID) {

        window.location.replace("index.html");

    }

})();

// ========================================
// LOGOUT
// ========================================

function logout() {

    if (!confirm("Yakin ingin keluar?")) return;

    localStorage.removeItem("userID");

    window.location.replace("index.html");

}
