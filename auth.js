// ========================================
// AUTH SYSTEM
// ========================================


// LOGIN DARI INDEX
// ========================================

function loginID(){


    const input = document.getElementById("userID");


    if(!input) return;



    const id = input.value.trim();



    if(id === ""){


        alert("Silahkan masukkan ID terlebih dahulu");

        input.focus();

        return;


    }



    // simpan ID

    localStorage.setItem(
        "userID",
        id
    );



    // loading jika tersedia

    const loading = document.getElementById("loading");



    if(loading){


        loading.style.display="flex";



        setTimeout(()=>{


            window.location.replace("home.html");


        },1500);



    }else{


        window.location.replace("home.html");


    }


}






// LOGOUT
// ========================================


function logout(){


    const confirmLogout = confirm(
        "Yakin ingin keluar?"
    );



    if(!confirmLogout){

        return;

    }



    localStorage.removeItem(
        "userID"
    );



    window.location.replace(
        "index.html"
    );


}







// PROTEKSI HALAMAN
// ========================================


(function(){



    const currentPage = window.location.pathname
    .split("/")
    .pop();



    const publicPages = [

        "",
        "index.html"

    ];



    const userID = localStorage.getItem(
        "userID"
    );



    // kalau halaman bukan public
    // dan tidak ada ID

    if(
        !publicPages.includes(currentPage)
        &&
        !userID
    ){


        window.location.replace(
            "index.html"
        );


    }




})();







// JIKA SUDAH LOGIN,
// JANGAN KEMBALI KE LOGIN
// ========================================


(function(){



    const currentPage = window.location.pathname
    .split("/")
    .pop();



    const userID = localStorage.getItem(
        "userID"
    );



    if(

        userID
        &&
        (
            currentPage === ""
            ||
            currentPage === "index.html"

        )

    ){


        window.location.replace(
            "home.html"
        );


    }



})();
