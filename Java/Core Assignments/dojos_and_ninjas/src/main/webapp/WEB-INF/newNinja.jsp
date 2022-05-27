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
        <h1>New Ninja</h1>
        <div id="container">
		<div id="leftpanel">
			<h1>New Ninja</h1>
			<form:form action="/addninja" method="post" modelAttribute="ninjaObject">
   			    <h2>
   			        <form:label cssClass="label left" path="dojo">Dojo:</form:label>
   			    	<form:select cssClass="box" path="dojo">
   			    		<c:forEach items="${dojos}" var="d">
   			    			<form:option value="${d}"><c:out value="${d.name}"/></form:option>
		    			</c:forEach>
 			    	</form:select>
			    </h2>		  
			    <h2>
			        <form:label cssClass="label left" path="firstName">First Name:</form:label>
			        <form:input cssClass="box" path="firstName"/>
			    </h2>
   			    <h2>
			        <form:label cssClass="label left" path="lastName">Last Name:</form:label>
			        <form:input cssClass="box" path="lastName"/>
			    </h2>
   			    <h2>
			        <form:label cssClass="label left" path="age">Age:</form:label>
			        <form:input cssClass="box" path="age"/>
			    </h2>
			    <input id="btn" type="submit" value="Create"/>	 
			</form:form>
		</div>
		<div id="rightpanel">
		<form:errors cssClass="red" path="ninjaObject.*"/>
		</div>
	</div>
    </div> <!-- End of Container -->
</body>
</html>