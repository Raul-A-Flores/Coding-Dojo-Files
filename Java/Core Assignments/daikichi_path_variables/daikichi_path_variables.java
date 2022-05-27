package com.codingdojo.helloworld;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
@SpringBootApplication
// 1. Annotation
@RestController
@RequestMapping("/daikichi")
public class DaikichiRoutes {
		@RequestMapping("")
	    public String index(){
	      return "Welcome!";
	    }
	    
	    
	    @RequestMapping("/today")
	    public String today(){
	      return "Today you will find luck in all your endeavors!";
	    }
	    
	    @RequestMapping("/tomorrow")
	    public String tomorrow(){
	      return "Tomorrow, an opportunity will arize, os be sure to open to new ideas!";
	    }
	    
	    @RequestMapping("/travel/{city}")
	    public String city(@PathVariable("city")String city){
	    	return "Congratuations! You will soon travel to  " + city ;
	    }
	    
	    
	    @RequestMapping("/{lotto}")
	    public String lotto(@PathVariable("lotto")String lotto){
	    	return "You have enojyeod the furits of you labor but now is a gera titme to spend time with family and friends";
	    }
	    
	    
}
