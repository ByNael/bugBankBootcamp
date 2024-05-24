import faker from 'faker';

describe('Login', () => { //fluxo feliz de registro de conta
  it('Registrar um usuário com saldo, fazer login e verificar se a conta foi criada corretamente', () => { //fluxo feliz
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
    //login
    cy.clickCloseModal(); //*[@id="login-form"]/div[2]/div/input
    cy.loginEmail(email);
    cy.loginPassword(password);
    cy.clickAcessar();
    //verificação
    cy.contains('span', 'R$ 1.000,00').should('be.visible');
  })
})