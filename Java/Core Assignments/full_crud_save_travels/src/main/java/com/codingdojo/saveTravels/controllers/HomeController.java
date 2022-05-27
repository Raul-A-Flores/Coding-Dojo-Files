package com.codingdojo.saveTravels.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.saveTravels.models.Expense;
import com.codingdojo.saveTravels.services.ExpenseService;

@Controller
public class HomeController {
	
	private final ExpenseService expenseServ;
	
	
	public HomeController(ExpenseService expenseServ) {
		super();
		this.expenseServ = expenseServ;
	}
		
		
		
	@GetMapping("/")
	public String index(Model model) {
		
		model.addAttribute("expense", new Expense());
		model.addAttribute("allExpenses", expenseServ.allExpenses());
		return "index.jsp";
	}
	
	
	
	
	@GetMapping("/expense/{id}")
	public String viewExpense(@PathVariable("id")Long id, Model model) {
		model.addAttribute("expense",expenseServ.findOne(id));
		
		return "show.jsp";
	}
	
	@PutMapping("/addexpense")
	public String makingPlant(@Valid @ModelAttribute("expense")Expense expense, BindingResult result, Model model) {
		
	
		
		expenseServ.create(expense);
		return "redirect:/";
	}
	
	
	
	@GetMapping("/editName/{id}")
	public String editName(@PathVariable("id")Long id, @ModelAttribute("expense")Expense expense, Model model) {
		model.addAttribute("expense",expenseServ.findOne(id));
		

		
		return "edit.jsp";
	}	
	
	@PutMapping("/editingName/{id}")
	public String editingName(@PathVariable("id")Long id,@Valid @ModelAttribute("expense")Expense expense, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("expense",expenseServ.findOne(id));

			return "edit.jsp";
		}
		expenseServ.update(expense);
		
		return "redirect:/";
	}
	
	
	
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id")Long id) {
		expenseServ.delete(id);
		return "redirect:/";
	}
	
	

}
