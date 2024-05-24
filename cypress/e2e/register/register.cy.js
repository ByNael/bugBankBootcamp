import faker from 'faker';

describe('Registrar', () => { //fluxo feliz de registro de conta
  it('Registrar usuario dinamicamente e com credenciais corretas', () => {
    //dados aleatorios
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    var repeatedPassword = password;
    //Registro
    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();
    //verificação
    cy.get('p[id="modalText"]').should('be.visible');
  })

  it('Registrar usuario dinamicamente com senhas diferentes', () => { //fluxo feliz tambem
    //dados aleatorios
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    var repeatedPassword = 'teste123';
    //registro
    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();
    //verificação
    cy.contains('p', 'As senhas não são iguais.').should('be.visible');
  })

  it.only('Registrar usuário duas vezes com email precadastrado', () =>{ // fluxo de excessão
    //dados aleatorios
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    var repeatedPassword = password;
    //Criação da primeira conta
    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();
    //Criação da segunda conta
    cy.clickCloseModal();
    cy.reload();
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();
    //verificação
    cy.get('p[id="modalText"]').should('not.exist');

  })
})

