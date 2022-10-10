$(document).ready(function() {
    onload();

    var txtTenDN = $("#nameDN");
    var tbTenDN = $("#tbTen");

    function ktraTenDN() {
        var re = /^[A-Za-z0-9_-]{6,18}$/;
        if (txtTenDN.val() == "") {
            tbTenDN.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(txtTenDN.val())) {
            tbTenDN.html("* tên chỉ được có chữ và số");
            return false;
        }
        tbTenDN.html("*");
        return true;
    }
    txtTenDN.blur(ktraTenDN);

    //ktra pass
    var pwddkDN = $("#pwd");
    var tbPwddDN = $("#tbPwd");

    function ktraMKDN() {
        re = /^[a-z0-9_-]{6,14}$/;
        if (pwddkDN.val() == "") {
            tbPwddDN.html("* chưa nhập password");
            return false;
        }
        if (!re.test(pwddkDN.val())) {
            tbPwddDN.html("* mật khẩu phải có ít nhất 8 kí tự, không gồm kí tự đặc biệt");
            return false;
        }
        tbPwddDN.html("*");
        return true;
    }
    pwddkDN.blur(ktraMKDN);


    $("#btnDongYDN").click(function() {
        if (!ktraTenDN() || !ktraMKDN()) {
            return false;
        }
        for (var i = 0; i < taiKhoan.length; i++) {
            if (txtTenDN.val() == taiKhoan[i].tenDangNhap) {
                if (pwddkDN.val() == taiKhoan[i].matKhau) {
                    setSession("username", txtTenDN.val());
                    location.assign('http://127.0.0.1:5500/index.html');
                    return;
                } else {
                    alert("Mật Khẩu Sai");
                    return;
                }
            }
        }
        alert("Tài Khoản Không Tồn Tại");

        return true;
    });

    function onload() {
        checkDangKy();
    }
    $("#textDangNhap").click(function() {
        if (checkSession() == true) {
            if (confirm("Bạn Có Muốn Đăng Xuất Không?") == true) {
                dangXuat();
            } else location.reload();
        } else {
            location.assign('http://127.0.0.1:5500/login.html');
        }
    });

    function checkDangKy() {
        if (checkSession() == true) {
            $("#textDangNhap").html(sessionStorage.getItem("username"));
        } else console.log("ko co session khuc nay");
    }

    function setSession(username, usernamevalue) {
        sessionStorage.setItem(username, usernamevalue);
    }

    function checkSession() {
        var userName = sessionStorage.getItem("username");
        if (userName) {
            return true;
        } else {
            return false;
        }
    }

    function dangXuat() {
        var href = window.location.href;
        sessionStorage.setItem("username", "");
        $("#textDangNhap").text("Đăng nhập/đăng ký");
        location.reload();
    }
});

//======================================