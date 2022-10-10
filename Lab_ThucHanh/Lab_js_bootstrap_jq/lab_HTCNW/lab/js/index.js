$(document).ready(function() {
    
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });

    function KiemTraName() {
        var re = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("Không được bỏ trống");
            return false;
        }
        //var ten = $("#txtten").val(); if(regten.test(ten)){....}
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("Ký tự đầu phải viết hoa!");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName);

    function KiemTraNgay() {
        if ($("#txtDe").val() == "") {
            $("#tbDe").html("Không được bỏ trống");
            return false;
        }
        var day = new Date($("#txtDe").val());
        var today = new Date();
        
        today.setDate(today.getDate() + 3);
        if (day < today) {
            $("#tbDe").html("Phải sau ngày hiện tại 3 ngày");
            return false;
        }
        $("#tbDe").html("*");
        return true;
    }
    $("#txtDe").blur(KiemTraNgay);

    function KiemTraMail() {
        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;

        if ($("#txtMail").val() == "") {
            $("#tbMail").html("Không được bỏ trống");
            return false;
        }
        if (!re.test($("#txtMail").val())) {
            $("#tbMail").html("Nhập đúng định dạng mail abc@gmail.com");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(KiemTraMail);

    function KiemTraAdd() {
        if ($("#txtAdd").val() == "") {
            $("#tbAdd").html("Địa chỉ không được bỏ trống");
            return false;
        }
        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(KiemTraAdd);

    function KiemTraPhone() {
        var re = /^(09|03|08)-[0-9]{4}-[0-9]{3}$/;

        if($("#txtPhone").val() == "") {
            $("#tbPhone").html("Không được bỏ trống");
            return false;
        }
        if (!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("Nhập theo đúng dạng (09|03|08)-xxxx-xxx");
            return false;
        }
        $("#tbPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);

    var count = 1;
    $("#btnSave").click(function() {
        if (
        KiemTraName() == true && 
        KiemTraAdd() == true &&
        KiemTraNgay() == true &&  
        KiemTraMail() == true && 
        KiemTraPhone() == true) 
        {
            var newRow = "<tr><td>"+(count)+"</td><td>"+$("#txtName").val()+"</td><td>"+$("#txtAdd").val()+"</td><td>"+$("#txtDe").val()+"</td><td>"+$("#txtMail").val()+"</td><td>"+$("#txtPhone").val()+"</td></tr>"
            $("#table").append(newRow);
            count++;
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    });
});
