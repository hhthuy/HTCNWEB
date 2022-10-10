{/* <meta name="19434551" content="Hồ Thị Hồng Thủy"> */}
$(document).ready(function(e)
{
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });

    function KiemTraMASV()
    {
        var ma = $("#txtMASV").val();
        var re = /^[0-9]{10}$/;
        if(ma == "")
        {
            $("#tbMASV").html("Không được bỏ trống");
            return false;
        }
        if(!re.test(ma))
        {
            $("#tbMASV").html("Phải nhập số và đúng định dạng (10 số)");
            return false;
        }
        $("#tbMASV").html("<br>");
        return true;
    }
    $("#txtMASV").blur(KiemTraMASV);

    function KiemTraName()
    {
        var ten = $("#txtName").val();
        var re = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/;
        if(ten == "")
        {
            $("#tbName").html("Không được bỏ trống");
            return false;
        }
        if(!re.test(ten))
        {
            $("#tbName").html("Tên phải nhập chữ hoa đầu tiên!");
            return false;
        }
        $("#tbName").html("<br>");
        return true;
    }
    $("#txtName").blur(KiemTraName);

    function KiemTraNgay()
    {
        var ngay = $("#txtDay").val();
        if(ngay == "")
        {
            $("#tbDay").html("Bat buoc");
            return false;
        }
        var day = new Date($("#txtDay").val());
        var today = new Date();
        today.setDate(today.getDate()+7);
        if(day < today)
        {
            $("#tbDay").html("Phải sau ngày hiện hành 7 ngày!");
            return false;
        }
        $("#tbDay").html("<br>");
        return true;
    }
    $("#txtDay").blur(KiemTraNgay);

    function KiemTraMail()
    {
        var mail = $("#txtMail").val();
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+(\.\w{2,3})+$/;
        if(mail == "")
        {
            $("#tbMail").html("Không được bỏ trống");
            return false;
        }
        if(!re.test(mail))
        {
            $("#tbMail").html("Phải nhập đúng định dạng xxx@iuh.edu.vn");
            return false;
        }
        $("#tbMail").html("<br>");
        return true;
    }
    $("#txtMail").blur(KiemTraMail);

 
    
    var i=1;
    $("#btnSave").click(function()
    {
        var ma = $("#txtMASV").val();
        var ten = $("#txtName").val();
        var ngay = $("#txtDay").val();
        var mail = $("#txtMail").val();
        var anh= ($("#txtAnh").val()).lastIndexOf('\\');
        if(KiemTraMASV()==true 
        && KiemTraName()==true 
        && KiemTraNgay()==true
        && KiemTraMail()==true 
         ){
            var trnew = "<tr><td>"+(i++)+"</td><td>"+ma+"</td><td>"+ten+"</td><td>"+ngay+"</td><td>"+mail+"</td><td>"+($("#txtAnh").val()).slice(anh+1)+"</td></tr>";
            $("#table").append(trnew);
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    });
});