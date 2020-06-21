package closet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import user.User;

public class ClosetDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	//데이터베이스에 접근하는 객체  생성
	public ClosetDAO() {
		try {
			String dbURL = "jdbc:mysql://localhost:3307/weather?serverTimezone=UTC";
			String dbID="root";
			String dbPassword = "0000";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL,dbID,dbPassword);
			}catch(Exception e) {
				e.printStackTrace();			
			}		
	}
	public int add(String userID, String clothCategory) {
		String SQL = "INSERT INTO CLOSET VALUES (?, ?, ?)";
		try {
			pstmt=conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			pstmt.setString(2, clothCategory);
			pstmt.setString(3,"1");
			
			return pstmt.executeUpdate();//성공적으로 수행했을 때 0 이상 반환	
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;//데이터베이스 오류 ***
	}	
}
