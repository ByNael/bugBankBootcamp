import faker from 'faker';

describe('Registrar', () => { //fluxo feliz de registro de conta
  it('Registrar usuario dinamicamente e com credenciais corretas', () => {
    //dados aleatorios
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    var repeatedPassword = password;

    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();

    cy.get('p[id="modalText"]').should('be.visible');
  })

  it.only('Registrar usuario dinamicamente com senhas diferentes', () => { //fluxo feliz tambem
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    var repeatedPassword = 'teste123';

    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();

    cy.contains('p', 'As senhas não são iguais.').should('be.visible');
  })
})

