let Dkilo = document.getElementById('weight');
let Dboy = document.getElementById('height');
let hesapla = document.getElementById('calc');
let sonucGoruntule = document.getElementById('BMIresult');
let sendButton = document.getElementById('sendMessage');
let navbar = document.getElementById('mobile-navbar');
let dropdown = document.querySelector('.dropdown');

eventListeners();

function eventListeners() {
    hesapla.addEventListener("click", BMICalculate);
    dropdown.addEventListener("click", dropdownMenu);
}

//index.html navbar
function dropdownMenu(e) {
    navbar.style.display = "block";
    dropdown.style.display = "block";
    e.preventDefault();
}
//contact.html navbar
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


function showAlert() {
    alert("Mesaj Gönderildi!");
}

function BMICalculate() {
    let kilo = Dkilo.value;
    let boyCM = Dboy.value;
    let boyM = boyCM / 100.0;
    let sonuc = kilo / (boyM * boyM);

    if (sonuc <= 18.5) {
        sonucGoruntule.innerHTML = "Vücut Kitle İndeksiniz : " + sonuc.toFixed(2) + " Durum: Zayıf";
    } else if (sonuc > 18.5 && sonuc <= 24.9) {
        sonucGoruntule.innerHTML = "Vücut Kitle İndeksiniz : " + sonuc.toFixed(2) + " Durum: Normal";
    } else if (sonuc > 24.9 && sonuc <= 29.9) {
        sonucGoruntule.innerHTML = "Vücut Kitle İndeksiniz : " + sonuc.toFixed(2) + " Durum: Kilolu";
    } else if (sonuc > 30) {
        sonucGoruntule.innerHTML = "Vücut Kitle İndeksiniz : " + sonuc.toFixed(2) + " Durum: Obez";
    }
}

$(function() {
    $(".toggle-menu").click(function() {
      $(this).toggleClass("active");
      $('.menu-drawer').toggleClass("open");
    });
  });


// Go to top   
let btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});