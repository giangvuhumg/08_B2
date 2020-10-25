// JS TRANG ĐĂNG KÝ
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('fullName').onkeyup = function(){
        if(document.getElementById('fullName').value == ""){
            document.getElementById('mes-user').innerHTML = 'Bạn không được bỏ trống';
            document.getElementById('mes-user').style.color ="red";
            document.getElementById('mes-user').style.fontSize = "1.6rem";
        }else{
            document.getElementById('mes-user').innerHTML = "";
        }
    }
    //check mail
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    document.getElementById('inputEmail').onkeyup = function(){
        if(document.getElementById('inputEmail').value.match(mailformat)){
            document.getElementById('mes-email').innerHTML = "";
        }else{
            document.getElementById('mes-email').innerHTML = "Email không hợp lệ";
            document.getElementById('mes-email').style.color = 'red';
            document.getElementById('mes-email').style.fontSize = "1.6rem";
        }
    }
    //check phone
    var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    document.getElementById('inputTel').onkeyup = function(){
        if(document.getElementById('inputTel').value.match(phoneformat)){
            document.getElementById('mes-phone').innerHTML = "";
        }else{
            document.getElementById('mes-phone').innerHTML = "Số điện thoại không hợp lệ";
            document.getElementById('mes-phone').style.color = 'red';
            document.getElementById('mes-phone').style.fontSize = "1.6rem";
            }
    }

});

    // JS TRANG DỊCH VỤ
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
    
        if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Xem tiếp";
        moreText.style.display = "none";
        } else {
        dots.style.display = "none";
        btnText.innerHTML = "Thu lại";
        moreText.style.display = "inline";
        }
    }

    // JS TRANG GIỚI THIỆU
    function setNewImages(){
        document.getElementById('img-about').src = "img/medical.png";
    }

    function setOldImages(){
        document.getElementById('img-about').src = "img/doctor01.jpg";
    }
    
            
    //JS ĐỒNG HỒ
    function dongho() {
        var time = new Date();
        var gio = time.getHours();
        var phut = time.getMinutes();
        var giay = time.getSeconds();

        if(gio<10){
            gio = "0"+gio;
        }
        if(phut<10){
            phut = "0"+phut;
        }
        if(giay<10){
            giay = "0"+giay;
        }
        var thoigian = gio+":"+phut+":"+giay;
        document.querySelector("#time").innerHTML = thoigian;
        setTimeout("dongho()",1000);
    }
    dongho();
    

