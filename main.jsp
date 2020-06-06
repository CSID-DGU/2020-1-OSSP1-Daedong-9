<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content = "width=device-width" initial-scale = "1">
<link rel = "stylesheet" href = "css/bootstrap.css">
<link rel = "stylesheet" href = "css/custom.css">
<title>날씨에 따른 옷 추천</title>
</head>
<body>
   <%
      String userID = null;
      if(session.getAttribute("userID")!=null){
         userID = (String)session.getAttribute("userID");
      }
   %>
   <nav class = "navbar navbar-default">
      <div class = "navbar-header">
         <button type = "button" class = "navbar-toggle collapsed"
         data-toggle = "collapse" data-target="#bs-example-navbar-collapse-1"
         aria-expanded = "false">
            <span class = "icon-bar"></span>
            <span class = "icon-bar"></span>
            <span class = "icon-bar"></span>            
         </button>
         <a class = "navbar-brand" href = "main.jsp">HOME</a>
      </div>
      <div class = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1">
         <%
            if (userID == null) {//로그인을 안 한 경우-로그인과 회원가입 버튼 나오게
         %>
         <ul class = "nav navbar-nav navbar-right">
            <li class ="dropdown">
               <a href = "#" class = "dropdown-toggle"
               data-toggle="dropdown" role = "button" aria-haspopup="true"
               aria-expanded="false">Log In<span class = "caret"></span></a>
               <ul class = "dropdown-menu">
                  <li><a href = "login.jsp">로그인</a></li>
                  <li><a href = "join.jsp">회원가입</a></li>
               </ul>
            </li>
         </ul>
         <%}else{
         %>
         <ul class = "nav navbar-nav navbar-right">
            <li class ="dropdown">
               <a href = "#" class = "dropdown-toggle"
               data-toggle="dropdown" role = "button" aria-haspopup="true"
               aria-expanded="false"><span class = "caret"></span></a>
               <ul class = "menu">
                  <li><a href = "logoutAction.jsp">로그아웃</a></li>
               </ul>
            </li>
         </ul>
         <%   
         }
         %>
      </div>
   </nav>
   <div class= "container">
      <div class ="jumbotron">
         <div class = "container">
            <h1>날씨에 따른 옷 추천 웹</h1>
            <div style="float:right">대동단결</div>
            <br>
<!--          <p><a class = "btn btn-primary btn-pull" href = "#" role ="button">자세히 알아보기</a></p> -->
<%
   if(userID==null){//로그인을 안 한 경우-로그인 홈페이지로 이동
%>

            <p><a class = "btn btn-primary btn-pull" href = "login.jsp" role ="button">자세히 알아보기</a></p>


<%}else{//로그인 한 경우-날씨 화면창으로 이동
   %>


            <p><a class = "btn btn-primary btn-pull" href = "liveweather.html" role ="button">자세히 알아보기</a></p>

<%} %>

         </div>
      </div>
   </div>
   <div class = "container">
      <div id = "myCarousel" class = "carousel slide" data-ride ="carousel">
         <ol class = "carousel-indicators">
            <li data-target="#myCarousel" data-slide-to ="0" class = "active"></li>
            <li data-target="#myCarousel" data-slide-to ="1"></li>
            <li data-target="#myCarousel" data-slide-to ="2"></li>
            
         </ol>
         <div class="carousel-inner">
            <div class = "item active">
               <img src="images/1.JPG">
            </div>         
            <div class = "item">
               <img src="images/2.JPG">
            </div>   
            <div class = "item">
               <img src="images/3.JPG">
            </div>
         </div>   
         <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class = "glyphicon glyphicon-chevron-left"></span>
         </a>
         <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class = "glyphicon glyphicon-chevron-right"></span>
         </a>
      </div>
   </div>
   <script src = "https://code.jquery.com/jquery-3.1.1.min.js"></script>
   <script src = "js/bootstrap.js"></script>
</body>
</html>
