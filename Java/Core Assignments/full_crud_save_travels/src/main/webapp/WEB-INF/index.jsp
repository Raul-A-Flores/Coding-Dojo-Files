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
        <h1>Save Travels</h1>
    </div> 
    	
	    <table class="table">
	    
		  <thead>
		    <tr>
		      <th scope="col">Expense</th>
		      <th scope="col">Vendor</th>
		      <th scope="col">Amount</th>
		      <th scope="col">Actions</th>
		    </tr>
		  </thead>
		  <tbody>
		  	<c:forEach var="i" items="${allExpenses}">
		    <tr>
		     
		      <td><a href="/expense/${i.id}"> ${i.name } </a></td>
		      <td>${i.vendor}</td>
		      <td>${i.amount}</td>
		      <td><a class="btn btn-danger" href="/delete/${i.id }">Delete</a></td>
		    </tr>
			</c:forEach>
		  </tbody>
		  
		</table>
		
    <div>
    	<h2>Add an expense</h2>
    	
    	<form:form action="/addexpense" method="post" modelAttribute="expense">
	    	
	    	<input type="hidden" name="user" value="${user.id}"/>
	    	<input type="hidden" name="_method" value="put"/>
	      
	        <div class="form-group">
	            <label>Name:</label>
	            <form:input path="name" class="form-control"/>
	            <form:errors path="name" class="text-danger" />
	            
	        </div>
	        <div class="form-group">
	            <label>Vendor:</label>
	            <form:input path="vendor" class="form-control"/>
	            <form:errors path="vendor" class="text-danger" />
	            
	        </div>
	        <div class="form-group">
	            <label>Amount:</label>
	            <form:input path="amount" class="form-control"/>
	            <form:errors path="amount" class="text-danger" />
	            
	        </div>
	        <div class="form-group">
	            <label>Description:</label>
	            <form:input path="description" class="form-control"/>
	            <form:errors path="description" class="text-danger" />
	            
	        </div>
	      	<div class="col text-center">
	      		<input type="submit" value="Submit" class="btn btn-primary">
	      	</div>
	        
	    </form:form>
    </div>
</body>
</html>