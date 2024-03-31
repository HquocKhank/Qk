// Bài 2


function send() {
    var arr = document.getElementsByClassName("input-grp2");
    var hvt = arr[0].value;
    var sdt = arr[1].value;
    var mathe = arr[2].value;
    var email = arr[3].value;
    var hoadon = arr[4].value;
    var diachi = arr[5].value;
    var select = document.getElementById('select-value').value;
    var required = document.getElementById('input-description').value;
    
    // Hàm đặt thêm
    var fullname = 'Họ và tên:';
    var tel = 'Số điện thoại:';
    var codecard ='Mã thẻ:';
    var mail ='Email:';
    var bill ='Mã hóa đơn:';
    var choice = 'Lựa chọn:';
    var require = 'Chi tiết mô tả:';
    var address = 'Địa chỉ:';

    if(hvt == "" || sdt == "" || mathe == "" || email == "" || hoadon == "" || diachi ==""){
        alert ("please fill all fields");
        return;
    }
    if(isNaN(sdt)){
        alert (" Số điện thoại Must be a number");
        return;
    }
    if(isNaN(mathe)){
        alert (" Mã thẻ Must be a number");
        return;
    }
    if(isNaN(hoadon)){
        alert (" Mã hóa đơn Must be a number");
        return;
    }
    var co = confirm('confirm your information:\n'+ fullname+" " +hvt+"\n"+tel+" "+sdt+"\n"+codecard+" "+ mathe+"\n"+mail+" "+email+"\n"+bill+" "+hoadon+"\n"+address+" "+diachi+"\n"+choice+" "+select+"\n"+require+" "+required+"\n");
     if(co==1){
        alert('information sent');
        return;
     }

}   
