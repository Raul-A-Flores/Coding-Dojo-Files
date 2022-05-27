package com.codingdojo.savetrave.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="travel")
public class Travel {

	
	
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @NotNull
	    @Size(min = 5, max = 200)
	    private String expense;
	    
	    @NotNull
	    @Size(min = 5, max = 200)
	    private String vendor;
	    
	    @NotNull
	    @Size(min = 1, max = 40)
	    private String amount;
	    
	    
	  
	    // This will not allow the createdAt column to be updated after creation
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    
	
	    //Start adding constructors
	    
	    
	    
	    
	    
	    
	    // other getters and setters removed for brevity
	    
	    
	    public Travel(String expense, String vendor, String amount) {
			super();
			this.expense = expense;
			this.vendor = vendor;
			this.amount = amount;
		}
		public Travel() {
			super();
		}
		public Travel(Long id, String expense, String vendor, String amount, Date createdAt, Date updatedAt) {
			super();
			this.id = id;
			this.expense = expense;
			this.vendor = vendor;
			this.amount = amount;
			this.createdAt = createdAt;
			this.updatedAt = updatedAt;
		}
		
		
		// Add getters and setters
		
		
		
		
		
		
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getExpense() {
			return expense;
		}
		public void setExpense(String expense) {
			this.expense = expense;
		}
		public String getVendor() {
			return vendor;
		}
		public void setVendor(String vendor) {
			this.vendor = vendor;
		}
		public String getAmount() {
			return amount;
		}
		public void setAmount(String amount) {
			this.amount = amount;
		}
		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
		
	
		
}
