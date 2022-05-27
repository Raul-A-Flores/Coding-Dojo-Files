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
        
      
       	
       	
    </div> <!-- End of Container -->
    <h1>Expense Details</h1>
    <a href="/">Go Back</a>
    <div class="text-center">	
    		
    		<h3>Expense Name: <c:out value="${ expense.name}"></c:out> </h3>
  			<p> Expense Description: <c:out value="${expense.description }"></c:out></p>
  			<p> Vendor: <c:out value="${amount.vendor }"></c:out></p>
  			<p> Amount Spent: <c:out value="${amount.amount}"></c:out></p>
  			<p>----------------------------------------------------</p>
    </div>
    <br>
    <div class="col-md-12 text-center">
    	<a class="btn btn-success" href="/editName/${id}">Edit</a>
    </div>
</body>
</html>