function loginID(){


let id = document.getElementById("userID").value;



if(id.trim()==""){


alert("Silahkan masukkan ID terlebih dahulu");


return;


}



localStorage.setItem(
"userID",
id
);



window.location.href="home.html";


}

function loginID(){


let id = document.getElementById("userID").value;



if(id.trim()==""){


alert("Silahkan masukkan ID terlebih dahulu");

return;


}



// simpan ID

localStorage.setItem(
"userID",
id
);



// tampilkan loading

document.getElementById("loading").style.display="flex";



// pindah ke home setelah loading

setTimeout(()=>{


window.location.href="home.html";


},1500);



}

// ===============================
// TARIK DANA NOMINAL
// ===============================


let nominalBtn = document.querySelectorAll(".nominal-btn");


nominalBtn.forEach(btn => {


    btn.addEventListener("click",()=>{


        let nominal = btn.innerText;


        showWithdrawPopup(nominal);


    });


});





function showWithdrawPopup(nominal){



let popup = document.createElement("div");


popup.className="popup";



popup.innerHTML=`

<div class="popup-box">


<i class="bi bi-wallet2"></i>


<h3>
Tarik Dana
</h3>


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






document
.getElementById("processWithdraw")
.onclick=function(){


processLoading(nominal);


};



}





function processLoading(nominal){



let popup=document.querySelector(".popup");


popup.innerHTML=`

<div class="popup-box">


<div class="loader"></div>


<h3>
Memproses...
</h3>


<p>
Mohon tunggu sebentar
</p>



</div>

`;




setTimeout(()=>{


popup.innerHTML=`

<div class="popup-box">


<i class="bi bi-check-circle-fill"
style="color:#2ecc71;font-size:50px">
</i>



<h3>
Berhasil Diproses
</h3>


<p>
Penarikan ${nominal}
sedang diverifikasi
</p>



<button onclick="closePopup()">

OK

</button>



</div>

`;



},2000);



}




function closePopup(){


document.querySelector(".popup").remove();


}