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

