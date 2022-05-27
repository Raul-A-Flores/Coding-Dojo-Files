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
<title>Form</title>
  <!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

</head>
<body>
    <div class="container">
    	
     
        
		    <form action='/omikuji/show' method='post'>
		     	<div class="form-group">
			    	<label>Pick any number from 5 to 25:</label>
			    		<select name="number" id="number" class="form-control">
						  <option value="5">5</option>
						</select>
					<label>Enter the name of any city :</label>
				    	<input class="form-control" type="text" name='city'>
					<label>Enter the name of any real person:</label>
				    	<input  class="form-control" type='text' name='person'>
				    <label>Enter professional endeavor or hobby:</label>
				    	<input  class="form-control" type='text' name='hobby'>
				    <label>Enter any type of living thing.</label>
				    	<input class="form-control" type='text' name='living'>
				    <label>Say something nice to someone:</label>
				   		<input class="form-control" type='text' name='nice'>
				    <p>Send and show a friend</p>
				    	<input type='submit' value='Send'>
				    </div>
		    </form>
		
    </div> 
</body>
</html>