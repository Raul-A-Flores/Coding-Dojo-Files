package com.codingdojo.omikujiform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/omikuji")
public class HomeController {
		@RequestMapping("")
	    public String index() {
	        return "index.jsp";
	    }
		
		
		@RequestMapping(value = "/show", method=RequestMethod.POST)
	    public String show(
	    		@RequestParam(value="person") String person) {
	        return "show.jsp";
	    }
}
