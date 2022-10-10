{/* <meta name="19434551" content="Hồ Thị Hồng Thủy"> */}
$(document).ready(function(e)
{
    $("#myBtn").click(function()
    {
        $("#myModal").modal();
    });
    var i=1;
    $("#btnSave").click(function()
    {
        var ma = $("#txtMASV").val();
        var ten = $("#txtName").val();
        var ngay = $("#txtDay").val();
        var mail = $("#txtMail").val();
        var anh= ($("#txtAnh").val()).lastIndexOf('\\');
        if(true)
        {
            var trnew = "<tr><td>"+(i++)+"</td><td>"+ma+"</td><td>"+ten+"</td><td>"+ngay+"</td><td>"+mail+"</td><td>"+($("#txtAnh").val()).slice(anh+1)+"</td></tr>";
            $("#table").append(trnew);
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    });
});