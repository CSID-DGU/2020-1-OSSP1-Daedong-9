<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content = "width=device-width" initial-scale = "1">
<link rel = "stylesheet" href = "css/bootstrap.css">
<title>Join</title>
</head>
<body>
	<nav class = "navbar navbar-default">
		<div class = "navbar-header">

			<a class = "navbar-brand" href = "main.jsp">HOME</a>
		</div>
		 <ul class = "nav navbar-nav navbar-right">
         	<li><a href = "login.jsp">LOGIN</a></li>
            <li><a href = "join.jsp">JOIN</a></li>
         </ul>
	</nav>
	<div class = "container">
		<div class ="col-lg-4"></div>
		<div class ="col-lg-4">
			<div class = "jumbotron" style="padding-top:20px;">
				<form method = "post" action = "joinAction.jsp">
					<h3 style = "text-align: center;">회원가입 화면</h3>
					<div class = "form-group">
						<input type = "text" class= "form-control" placeholder="아이디" name ="userID" maxlength="20">
					</div>
					<div class = "form-group">
						<input type = "password" class= "form-control" placeholder="비밀번호" name ="userPassword" maxlength="20">
					</div>
					
					<div class = "form-group" style="text-align: center;">
						<div class = "btn-group" data-toggle="buttons">
						<label class= "btn btn-primary active">
							<input type="radio" name="userGender" autocomplete="off" value="M" checked>남자
						</label>
						<label class= "btn btn-primary">
							<input type="radio" name="userGender" autocomplete="off" value="F">여자
						</label>  									
						</div>
					</div>	

					<div class = "form-group">
						<input type="text" class= "form-control" placeholder="ㅇㅇ시ㅇㅇ동" name = "userAddress" maxlength="20">
					</div>
					<div class = "form-group">
						<input type = "email" class= "form-control" placeholder="이메일" name = "userEmail" maxlength="50">
					</div>
					
					<input type = "submit" class = "btn btn-primary form-control" value = "회원가입">					
				</form>
			</div></div></div>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src = "js/bootstrap.js"></script>
</body>
</html>
