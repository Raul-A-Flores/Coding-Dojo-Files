
class Pet:

    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 200
        self.energy = 200

    def sleep(self):
        self.energy += 20
        print(f"{self.name}'s health is now {self.health}")
        return self

    def eat(self):
        self.eat += 25
        print(f"{self.name}'s health is now {self.health}")
        return self

    def play(self):
        self.health += 20
        self.energy -= 20
        print(f"{self.name}'s health is now: {self.health} \nEnergy: {self.energy}")
        return self

class Ninja:
    
    def __init__(self, first_name, last_name, pet, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food


    def walk(self):
        self.pet.play()
        print(f"{self.first_name} is walking {self.pet.name}")
        return self

    def feed(self):
        print(f"{self.first_name} is feeding {self.pet.name}")
        return self

    def bathe(self):
        print(f"{self.pet.name} is now being bathe")
        return self

dor = Pet("Dor", "cat", "sleep")
raul = Ninja("Raul", "Flores", dor , "kimchi", "morekimchi")


raul.walk()
raul.feed()
raul.bathe()