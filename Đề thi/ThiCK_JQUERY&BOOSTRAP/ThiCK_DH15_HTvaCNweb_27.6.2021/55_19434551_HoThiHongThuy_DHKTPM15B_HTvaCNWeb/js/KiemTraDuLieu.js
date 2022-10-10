$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    //KIEM TRA TEN Tên (name) phải bao gồm các chữ cái, có thể có khoảng trắng.
    function KiemTraName() {
        var ten = $("#txtName").val();
        var re = /^([A-Za-z\s])*$/;
        if (ten == "") {
            $("#tbName").html("Không được bỏ trống");
            return false;//Mac dinh:
        }
        if (!re.test(ten)) {
            $("#tbName").html("Tên (name) phải bao gồm các chữ cái, có thể có khoảng trắng.");
            return false;
        }
        $("#tbName").html("<br>");
        return true;
    }
    $("#txtName").blur(KiemTraName);
    //KIEM TRA EMAIL
    function KiemTraMail() {
        var mail = $("#txtMail").val();
        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
        if (mail == "") {
            $("#tbMail").html("Không được bỏ trống");
            return false;
        }
        if (!re.test(mail)) {
            $("#tbMail").html("Email theo đúng chuẩn email: abc@gmail.com");
            return false;
        }
        $("#tbMail").html("<br>");
        return true;
    }
    $("#txtMail").blur(KiemTraMail);
    //SDT (Phone No) có định dạng như sau: (08)-(084)-xxxxxxxx.
    function KiemTraPhone() {
        var phone = $("#txtPhone").val();
        var re = /^(\(08\))-(\(084\))-[0-9]{8}$/;
        if (phone == "") {
            $("#tbPhone").html("Không được bỏ trống");
            return false;
        }
        if (!re.test(phone)) {
            $("#tbPhone").html("(Phone No):(08)-(084)-xxxxxxxx.");
            return false;
        }
        $("#tbPhone").html("<br>");
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);
    var count = 1;
    $("#btnAdd").click(function () {
        var ten = $("#txtName").val();
        var mail = $("#txtMail").val();
        var phone = $("#txtPhone").val();
        var check = $("input[type='radio']:checked").val();
        var cmt = $("#txtCmt").val();
        if ( KiemTraName()==true 
        &&KiemTraMail() ==true
        &&KiemTraPhone() ==true) {
            var newRow = "<tr><td>" + (count) + "</td><td>" + ten + "</td><td>" + mail + "</td><td>" + phone + "</td><td>" + check + "</td><td>" + cmt + "</td></tr>"
            $("#table").append(newRow);
            count++;
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    });
});