package com.codingdojo.saveTravels.repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.codingdojo.saveTravels.models.Expense;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface ExpenseRepository extends CrudRepository <Expense,Long> {

	


	
	
	
		
		List<Expense> findAll();
}
