// comandos para clicar em botões
Cypress.Commands.add('clickRegister', ()=> {
    cy.get('button').contains('Registrar').click();
});

Cypress.Commands.add('clickCadastrar', ()=> {
    cy.get('button').contains('Cadastrar').click({force:true});
});

Cypress.Commands.add('clickSaldo', () => {
    cy.get('label[id="toggleAddBalance"]').click({force:true});
});

Cypress.Commands.add('clickAcessar', () => {
    cy.get('button').contains('Acessar').click({force:true});
});

Cypress.Commands.add('clickTransferirAgora', () =>{
    cy.get('button').contains('Transferir agora').click({force:true});
})

Cypress.Commands.add('clickTransferencia', () =>{
    cy.get('a[id="btn-TRANSFERÊNCIA"]').click({force:true});
})

Cypress.Commands.add('clickCloseModal', () =>{
    cy.get('a[id="btnCloseModal"]').click({force:true});
})

// comandos de preenchimendo de campos
Cypress.Commands.add('loginEmail', (email)=>{
    cy.get('input[type="email"]').eq(0).type(email, {force:true});
});

Cypress.Commands.add('loginPassword', (password)=>{
    cy.get('input[type="password"]').eq(0).type(password, {force:true});
});

Cypress.Commands.add('typeEmail', (email)=>{
    cy.get('input[type="email"]').eq(1).type(email, {force:true}); //pratica ruim de forçar mas algum erro está ocorrendo com o mapeamento dos elementos
});

Cypress.Commands.add('typeName', (name)=>{
    cy.get('input[type="name"]').type(name, {force:true});
});

Cypress.Commands.add('typePassword', (password)=>{
    cy.get('input[type="password"]').eq(1).type(password, {force:true});
});

Cypress.Commands.add('typeRepeatedPassword', (repeatedPassword)=>{
    cy.get('input[type="password"]').eq(2).type(repeatedPassword, {force:true});
});

Cypress.Commands.add('typeTransferValue', (transferValue)=>{
    cy.get('input[type="transferValue"]').type(transferValue, {force:true});
});

Cypress.Commands.add('typeDescription', (description)=>{
    cy.get('input[type="description"]').type(description, {force:true});
});

Cypress.Commands.add('typeAccountNumber', (accountNumber)=>{
    cy.get('input[type="accountNumber"]').type(accountNumber, {force:true});
});

Cypress.Commands.add('typeDigit', (digit)=>{
    cy.get('input[type="digit"]').type(digit, {force:true});
});