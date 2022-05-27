package com.codingdojo.helloworld;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;



	
@RestController 
public class HomeController {
    @RequestMapping("/")
    public String index(@RequestParam(value="q") String searchQuery) {
        return "Hello: " + searchQuery;
    }
}


