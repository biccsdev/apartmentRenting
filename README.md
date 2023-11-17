# Apartment Booking Website

## Description

This repository contains the code for an Apartment booking web service, where a user can view all the apartment offerings available and book a date through the site, the user also can manage the payment and manage the access to the apartment after payment.

This project was built with NextJs with React for managing and building all the frontend and Tailwind for the styles.

This project solves the problem of managing the booking and payments for apartment booking through a private system for apartment owners, and gives the user an easy experience to book their favorite destinations and have easy communication with the owners.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Diagrams](#diagrams)
- [License](#license)

## Features

### User

1. **Create Account ->** The user is able to create an account
2. **Login ->** The user is able to login into his account and visit his profile, where he can consult:
   - personal data
   - past apartments rented
   - rents pending for payment approval
   - current apartments rented ( check the access code for the building )
3. **Book an apartment ->** The user is able to book an apartment if it is available in the selected dates
4. **Create Reviews ->** The user is able to leave reviews in the apartment page ONLY if he has rented the apartment before

### Admin

#### (Admin Panel)

1. **Manage apartments availability->** The admin is able to check which dates the apartment is available
2. **Manage apartments reviews ->** The admin is able to delete reviews from apartments
3. **Manage apartments payments->** The admin is able to accept or deny payment proof sent by the user for booking an apartment
4. **Consult apartment history->** The admin is able to consult renting history on a specific apartment

## Installation

- Clone and Install the [backend repository](https://github.com/biccsdev/apartmentRentingBackend) on a separate folder
- Clone this repository
- Navigate to the project's folder
- Install dependencies: `npm install`
- Run the backend first ( it will be hosted on port 3000 )
- Run development `npm run start`
- Run watch mode `npm run start:dev`
- Open localhost:3001

# Diagrams

## Use Case Diagram: Book an Apartment

![usecase](/public/diagram.png)

# License

[MIT](https://mit-license.org/)
