


//BT1

/**
 * Khối 1:input
 *  a (số thứ 1)
 *  b (số thứ 2)
 *  c (số thứ 3)
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo và gán giá trị cho biến
 * B2: sữ dụng if else so sánh từng giá trị của các biến rồi sắp xếp thứ tự của từng biến
 *     (sử dụng lồng if trong if) => tối ưu được dòng code  
 *     gán thứ tự xắp xếp cho txtSapXep
 *      
 * b3 : in kết quả 
 * 
 * Khối 3:
 * txtSapXep (thứ tự sắp xếp của các biến)
 *  
 */

function sapXep(){
    var a = Number(document.getElementById("so1").value);
    var b = Number(document.getElementById("so2").value);
    var c = Number(document.getElementById("so3").value);
    var txtSapXep = "";
    if (a > b) {
        if (b > c) {
            //c<b<a
            txtSapXep = c + "< "+ b +"< "+ a;
        } else {
            if (a>c) {
                //b<c<a
                txtSapXep = b + "< "+ c +"< "+ a;
            }
            else {
                //b<a<c
                txtSapXep = b + "< "+ a +"< "+ c;
            }
        }
    } else {
        if (b>c) {
            if(a>c){
                //c<a<b
                txtSapXep = c + "< "+ a +"< "+ b;
            }else{
                //a<c<b
                txtSapXep = a + "< "+ c +"< "+ b;
            }
            
            
        } else {
            //a<b<c
            txtSapXep = a + "< "+ b +"< "+ c;
        }
    
    }

    document.getElementById("txtSapXep").innerHTML = txtSapXep;
}
document.getElementById("btnSapXep").onclick=sapXep;

//2

/**
 * Khối 1: input
 * user (giá trị value của option được chọn trong form)
 *
 * 
 * Khối 2: các bước xử lý
 * B1: Khai báo và gán giá trị cho biến
 * B2: sử dụng if else để gán giá trị cho text nội dung phụ hợp cho từng user
 * B3: in kết quả ra màn hình
 * 
 * Khói 3: Output
 * text (nội dung xin chào)
 * 
 */

function user(){
    var user = document.getElementById("user").value;
    var text = "";

    if (user == "B") {
        text = "Xin Chào Bố !";
    }else if(user == "M") {
        text = "Xin Chào Mẹ !";   
    }else if(user == "A"){
        text = "Xin Chào Anh Trai !";
    }else if(user == "E"){
        text = "Xin Chào Em Gái !";
    }else{
        text = "vui lòng chọn người sử dụng";
    }
    document.getElementById("txtLoiChao").innerHTML = text;
}

document.getElementById("btnUser").onclick = user;


//3

/**
 * Khối 1: Inpput
 * int1 (số nguyên thứ 1)
 * int2 (số nguyên thứ 2)  
 * int3 (số nguyên thứ 3)
 * 
 * Khối 2 : Các bước xử lý
 * B1: Khai báo và gán giá trị cho biến
 * B2: sử dụng if else với điều kiện %2 == 0 thì tăng soChan theo bước nhảy.
 *     soLe = 3-soChan;
 * B3 : in kết quả ra màn hình
 * Khối 3:
 * soChan ( số đếm của số chẵn)
 * soLe ( số đếm của số lẻ)
 * 
 */

function demChanLe(){
    var int1 = Number(document.getElementById("int1").value);
    var int2 = Number(document.getElementById("int2").value);
    var int3 = Number(document.getElementById("int3").value);
    var soChan = 0;
    var soLe = 0;

    if(int1%2==0){
        soChan++;
    }
    if(int2%2==0){
        soChan++;
    }
    if(int3%2==0){
        soChan++;
    }

    soLe=3-soChan;
    document.getElementById("txtChanLe").innerHTML = "Có "+ soChan +" số chẳn, " + soLe +" số lẻ";

}

    document.getElementById("btnChanLe").onclick = demChanLe;

//4 

/**
 * Khối 1: input
 * a (cạnh thứ 1 của tam giác)
 * b (cạnh thứ 2 của tam giác)   
 * c (cạnh thứ 3 của tam giác)
 * 
 * Khối 2: Các bước xử lý
 * B1: khai báo và gán giá trị cho biến
 * B2: sử dụng if else lồng nhau
 *  + if else đầu tiên: xem có phải là tam giác hay không (tổng 2 cạnh bất kí lớn hơn cạnh còn lại )
 *  + if else thứ 2 : dựa vào các đặc điểm của tam giấc để xác định tam giác đó là vuông,cân,đều hay là 1 loại tam giác khác
 * B3: in kết quả ra màn hình
 * 
 * Khối 3: Output
 * 
 */

function xacDinhTamGiac(){
    var a= Number(document.getElementById("canh1").value);
    var b= Number(document.getElementById("canh2").value);
    var c= Number(document.getElementById("canh3").value);
    var txtTamGiac = "";

    if(a<(b+c) && b<(a+c) && c<(a+b)){
        // xác định xem có phải là 3 cạnh của 1 tam giác hay không
        if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
            // xác định tam giác vuông (có 1 cạnh bình phương bằng tổng bình phương 2 cạnh còn lại)
            txtTamGiac= "Tam giác vuông";
        }else if(a==b || b==c || a==c){
            // xác định tam giác giác cân ( có 2 cạnh bằng nhau)
            txtTamGiac = "Tam giác cân";
        }else if(a==b==c){
            // xác định tam giác đều ( có 3 cạnh bằng nhau)
            txtTamGiac = "Tam giác đều";
        }else{
            txtTamGiac = "1 Tam giác khác";
        }

    }else{
        txtTamGiac = "Không phải là tam giác";
    }
    document.getElementById("txtTamGiac").innerHTML = txtTamGiac;

}
document.getElementById("btnTamGiac").onclick = xacDinhTamGiac;
