package models;

public class Bats {
	
	public String name;
	public int energyLevel = 300;
	
	
	
	
	public void fly() {
		
		if(this.energyLevel > 50) {
			this.energyLevel -= 50;
			System.out.println("The bat is flying");
		}
		else {
			System.out.println("You cannot Fly");
		}
	}
	
	public void eatHumans() {
		energyLevel += 25;
		System.out.println("nevermind");
	}
	
	public void attatckTown() {
		energyLevel -= 100;
		System.out.println("The town is being attacked !");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}

	
	
}
