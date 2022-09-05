$('.nav1').click(function() {
    $('#list1').toggle('show')
})
$('.footer').click(function() {
    $('#date_show_info').toggle('show')
})

$('#butt_form').click(function() {
    $('.frame').toggle('show')
})



function calc() {
    var num1 = parseInt(document.getElementById("one").value);
    var num2 = parseInt(document.getElementById("two").value);
    var num3 = parseInt(document.getElementById("sum_item").value);
    document.getElementById("num").innerHTML = ((((num1 + num2 + num3) * 1.5) / 50) / 100) * 45
    console.log(num1 + num2 + num3)
}


const themeToggle = document.getElementById('theme-toggle')
const app = document.getElementById('app')

function chosenTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        app.classList.add('dark');

    }
    if (localStorage.getItem('theme') === 'light') {
        app.classList.add('light');

    }
}
const themeChange = () => {
    if (app.classList.contains('light')) {
        app.classList.remove('light');
        app.classList.add('dark');
        localStorage.removeItem('theme', 'light')
        localStorage.setItem('theme', 'dark')
    } else {
        app.classList.remove('dark');
        app.classList.add('light');
        localStorage.removeItem('theme', 'dark')
        localStorage.setItem('theme', 'light')
    }
}
themeToggle.addEventListener('click', themeChange)
chosenTheme()
$('document').ready(function() {
    setTimeout(function() {
        $('.preloader1').addClass('preloader_in_top');
    }, 100);
    setTimeout(function() {
        $('.preloader2').addClass('preloader_in_top');
    }, 200);
    setTimeout(function() {
        $('.preloader3').addClass('preloader_in_top');
    }, 300);
    setTimeout(function() {
        $('.preloader4').addClass('preloader_in_top');
    }, 400);
    setTimeout(function() {
        $('.preloader5').addClass('preloader_in_top');
    }, 500);
});


date = new Date().getFullYear()
document.getElementById('date').innerHTML = date

date_info_year = date - 2015
console.log(date_info_year)
console.log(date)
document.getElementById('date_info').innerHTML = ' ' + date_info_year + ' '