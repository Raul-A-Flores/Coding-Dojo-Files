<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
   <!-- c:out ; c:forEach ; c:if -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
   <!-- Formatting (like dates) -->
 <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
   <!-- form:form -->
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
   <!-- for rendering errors on PUT routes -->
 <%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title Here</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container"> <!-- Beginning of Container -->
        <h1>Location</h1>
        <div id="container">
		<h1><c:out value="${dojo.name}"/> Ninjas</h1>
		<table class="table table-striped table-dark table-hover ">
			<thead>
				<tr>
			    	<th scope="col">First Name</th>
			      	<th scope="col">Last Name</th>
			      	<th scope="col">Age</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${dojo.ninjas}" var="ninja">
				<tr>
				    <td><c:out value="${ninja.firstName}"/></td>
				    <td><c:out value="${ninja.lastName}"/></td>
				    <td><c:out value="${ninja.age}"/></td>
				 </tr>
				 </c:forEach>
			 </tbody>
		</table>
	</div>
    </div> <!-- End of Container -->
</body>
</html>