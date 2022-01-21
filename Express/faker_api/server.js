const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;

class User {
  constructor() {
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.streetAddress = faker.address.streetAddress();
    this.cityName = faker.address.cityName();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
    this.address = this.streetAddress + ", " + this.cityName + ", " + this.state + ", " + this.zipCode + ", " + this.country;
  }
}

app.get("/api/users/new", (req, res) => {
  res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
  res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
  res.json([new Company(), new User()]);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));