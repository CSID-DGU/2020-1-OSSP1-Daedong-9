<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="closet.ClosetDAO" %>
<%@ page import="java.io.PrintWriter" %>
<% request.setCharacterEncoding("UTF-8");%>
<jsp:useBean id="closet" class="closet.Closet" scope="page" />
<jsp:setProperty name="closet" property="userID" />
<jsp:setProperty name="closet" property="clothCategory" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Data Upload</title>
</head>
<body>	
	<%
		String userID = null;
		if(session.getAttribute("userID")!=null){
		userID=(String)session.getAttribute("userID");
		}
		if(userID==null){
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('로그인을 하세요.')");
		script.println("location.href='login.jsp'");
		script.println("</script>");
		
		}else{		
				ClosetDAO closetDAO = new ClosetDAO();
				int result = closetDAO.add(userID,closet.getClothCategory());
				if(result==-1){
					PrintWriter script = response.getWriter();
					script.println("<script>");
					script.println("alert('데이터 업로드에 실패했습니다.')");
					script.println("history.back()");
					script.println("</script>");
				}
				else{
					PrintWriter script = response.getWriter();
					script.println("<script>");
					script.println("alert('업로드 성공!')");
					script.println("location.href= 'closetmain.html'");
					script.println("</script>");
				}
			
		}	
	%>		
</body>
</html>