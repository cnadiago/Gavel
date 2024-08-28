// javascript untuk banner

var slideIndex = 1;
        showDivs(slideIndex);

        function showDivs(n) {
            var i;
            var imgList = document.getElementsByClassName("banner-container");
            if (n > imgList.length) slideIndex = 1;
            else if (n < 1) slideIndex = imgList.length;

            for (i = 0; i < imgList.length; i++) {
                imgList[i].style.display = 'none';
            }

            imgList[slideIndex - 1].style.display = 'block';
        }

        setInterval(function() {
            slideIndex++;
            showDivs(slideIndex);
        }, 5000); // Interval dalam milidetik (5000ms = 5 detik)

// javascript untuk portofolio1

var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
    showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
    var i;
    var imgList1 = document.getElementsByClassName("Portofolio1");
    if (n > imgList1.length) slideIndex1 = 1;
    else if (n < 1) slideIndex1 = imgList1.length;

    for (i = 0; i < imgList1.length; i++) {
        imgList1[i].style.display = 'none';
    }

    imgList1[slideIndex1 - 1].style.display = 'block';
}

// javascript untuk portofolio2

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
    var i;
    var imgList2 = document.getElementsByClassName("Portofolio2");
    if (n > imgList2.length) slideIndex2 = 1;
    else if (n < 1) slideIndex2 = imgList2.length;

    for (i = 0; i < imgList2.length; i++) {
        imgList2[i].style.display = 'none';
    }

    imgList2[slideIndex2 - 1].style.display = 'block';
}

// javascript untuk portofolio3

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
    var i;
    var imgList3 = document.getElementsByClassName("Portofolio3");
    if (n > imgList3.length) slideIndex3 = 1;
    else if (n < 1) slideIndex3 = imgList3.length;

    for (i = 0; i < imgList3.length; i++) {
        imgList3[i].style.display = 'none';
    }

    imgList3[slideIndex3 - 1].style.display = 'block';
}

// javascript untuk form+display

function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var purpose = document.getElementById('Purpose').value;
    var note = document.getElementById('Note').value;

    var resultHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Tujuan:</strong> ${purpose}</p>
    <p><strong>Pesan:</strong> ${note}</p>
    `;

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultHTML;

    resultDiv.classList.remove('no-border');
    resultDiv.classList.add('with-border');
     }



     window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }

function topFunction() {
            document.documentElement.scrollTop = 0;
    }