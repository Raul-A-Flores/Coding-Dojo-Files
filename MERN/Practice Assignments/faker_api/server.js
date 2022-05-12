const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;


const createUser =() =>{
    const newUser ={
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        password: faker.internet.password(),
        _id: faker.datatype.uuid(),
        
        
    };
    return newUser;
}


const createCompany =() =>{
    const newCompany ={
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        suffix: faker.company.companySuffix(),
        address: address ={
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

       
        
        
    };
    return newCompany;
}
let user1 = createUser();
let company1 = createCompany();
console.log(company1);
console.log(user1)


app.get("/new", (req,res) =>{
    res.send({message: "Faker Api"});
})
app.get("/users/new", (req, res) => {
    let newPerson = createUser();
    console.log(newPerson);
    res.json({ "result": newPerson });

});

app.get("/users/new/company", (req, res) => {
    let newPerson = createUser();
    let newCompany = createCompany();
    console.log(newPerson, newCompany);
    res.json({ "result": {
        "New User": newPerson,
        "New Company": newCompany }})
        ;

});
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
)