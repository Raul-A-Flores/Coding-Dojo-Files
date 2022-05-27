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
	<h1>Edit Expense</h1>
	<form:form  action="/editingName/${id}" method="post" modelAttribute="expense">
    	<input type="hidden" name="user" value="${user.id}"/>
    	<input type="hidden" name="_method" value="put"/>
      
        <div class="form-group">
            <label>Name:</label>
            <form:input path="name" class="form-control"/>
            <form:errors path="name" class="text-danger" />
            
        </div>
        <div class="form-group">
            <label>Gender:</label>
            <form:input path="vendor" class="form-control"/>
            <form:errors path="vendor" class="text-danger" />
            
        </div>
        <div class="form-group">
            <label>Origin:</label>
            <form:input path="amount" class="form-control"/>
            <form:errors path="amount" class="text-danger" />
            
        </div>
        <div class="form-group">
            <label>Meaning:</label>
            <form:input path="description" class="form-control"/>
            <form:errors path="description" class="text-danger" />
            
        </div>
        <br>
      	<div class="col text-center">
        	<input type="submit" value="Submit" class="btn btn-primary">
        </div>
    	</form:form>
</body>
</html>