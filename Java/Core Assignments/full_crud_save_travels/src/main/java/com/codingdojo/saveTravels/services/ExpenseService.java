package com.codingdojo.saveTravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.saveTravels.models.Expense;
import com.codingdojo.saveTravels.repositories.ExpenseRepository;


@Service
public class ExpenseService {

	
	private final ExpenseRepository expenseRepo;

	
	
	
	public ExpenseService(ExpenseRepository expenseRepo) {
		super();
		this.expenseRepo = expenseRepo;
	}

	
	public Expense findOne(Long id) {
		Optional<Expense> optionalExpense = expenseRepo.findById(id);
		if(optionalExpense.isPresent()) {
			return optionalExpense.get();
		}else {
			return null;
		}
		}



	public List<Expense> allExpenses(){
		return expenseRepo.findAll();
	}
	
	

	
	public Expense create(Expense expense) {
		return expenseRepo.save(expense);
			}
			
			
			
	
	public Expense update(Expense expense) {
		return expenseRepo.save(expense);
			}
			
	public void delete(Long id) {
		expenseRepo.deleteById(id);
			}
}
