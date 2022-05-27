package com.codingdojo.dojosnninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosnninjas.models.Dojo;
import com.codingdojo.dojosnninjas.models.Ninja;
import com.codingdojo.dojosnninjas.repositories.DojoRepository;
import com.codingdojo.dojosnninjas.repositories.NinjaRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepo;
	private final NinjaRepository ninjaRepo;
	
	public DojoService(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}

	public void addDojo(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	
	public List<Dojo> getAllDojos() {
		return dojoRepo.findAll();
	}
	
	public Dojo singleDojo(Long id) {
		Optional<Dojo> dojo = dojoRepo.findById(id);
		if(dojo.isPresent()) {
			return dojo.get();
		}
		else {
			return null;
		}
	}
	
	public void addNinja(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
}