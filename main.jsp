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

<style>
h1{
text-align:center;
}
.carousel {
    margin-bottom: 0;
    padding: 0 40px 30px 40px;
}
/* The controlsy */
.carousel-control {
   left: -12px;
    height: 40px;
   width: 40px;
    background: none repeat scroll 0 0 #222222;
    border: 4px solid #FFFFFF;
    border-radius: 23px 23px 23px 23px;
    margin-top: 90px;
}
.carousel-control.right {
   right: -12px;
}
/* The indicators */
.carousel-indicators {
   right: 50%;
   top: auto;
   bottom: -10px;
   margin-right: -19px;
}
/* The colour of the indicators */
.carousel-indicators li {
   background: #cecece;
}
.carousel-indicators .active {
background: #428bca;
}
.edges{
border:0;
}
</style>
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
         <a class = "navbar-brand" href = "main.jsp">HOME</a>
      </div>
      <div class = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1">
         <%
            if (userID == null) {//로그인을 안 한 경우-로그인과 회원가입 버튼 나오게
         %>
         <ul class = "nav navbar-nav navbar-right">
            <li><a href = "login.jsp">LOGIN</a></li>
            <li><a href = "join.jsp">JOIN</a></li>
         </ul>
         <%}else{
         %>
         <ul class = "nav navbar-nav navbar-right">
             <li><a href = "logoutAction.jsp">LOGOUT</a></li>
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
<center>
            <p><a class = "btn btn-primary btn-pull" href = "login.jsp" role ="button">날씨 보기</a></p>

</center>
<%}else{//로그인 한 경우-날씨 화면창으로 이동
   %>

<center>
            <p><a class = "btn btn-primary btn-pull" href = "liveweather.html" role ="button">날씨 보기</a></p>
</center>
<%} %>

         </div>
      </div>
   </div>
   
   <div class="container">
    <div class="row">
      <div class="col-md-12">
                <div id="Carousel" class="carousel slide">
                 
                <ol class="carousel-indicators">
                    <li data-target="#Carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#Carousel" data-slide-to="1"></li>
                </ol>
                 
                <!-- Carousel items -->
                <div class="carousel-inner">
                    
                <div class="item active">
                   <div class="row">
                     <div class="col-md-3 edges thumbnail"><img src="images/1.JPG" alt="Image" style="max-width:100%;"></div>
                     <div class="col-md-3 edges thumbnail"><img src="images/2.JPG" alt="Image" style="max-width:100%;"></div>
                     <div class="col-md-3 edges thumbnail"><img src="images/3.JPG" alt="Image" style="max-width:100%;"></div>
                     <div class="col-md-3 edges thumbnail"><img src="images/4.JPG" alt="Image" style="max-width:100%;"></div>
                   </div><!--.row-->
                </div><!--.item-->
                 
                <div class="item">
                   <div class="row">
                      <div class="col-md-3 edges thumbnail"><img src="images/5.JPG" alt="Image" style="max-width:100%;"></div>
                      <div class="col-md-3 edges thumbnail"><img src="images/6.JPG" alt="Image" style="max-width:100%;"></div>
                      <div class="col-md-3 edges thumbnail"><img src="images/7.JPG" alt="Image" style="max-width:100%;"></div>
                      <div class="col-md-3 edges thumbnail"><img src="images/8.JPG" alt="Image" style="max-width:100%;"></div>
                   </div><!--.row-->
                </div><!--.item-->
                 
                </div><!--.carousel-inner-->
                  <a data-slide="prev" href="#Carousel" class="left carousel-control">‹</a>
                  <a data-slide="next" href="#Carousel" class="right carousel-control">›</a>
                </div><!--.Carousel-->
                 
      </div>
   </div>
</div><!--.container-->

   <script src = "https://code.jquery.com/jquery-3.1.1.min.js"></script>
   <script src = "js/bootstrap.js"></script>
</body>
</html>
