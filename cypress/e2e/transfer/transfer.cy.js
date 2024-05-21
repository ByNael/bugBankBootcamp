import faker from 'faker';

describe('Transferencia', () => { //fluxo de excessão, a transferencia não devia ser feita
  it('Registrar usuario, fazer o login, entrar na tela de transferencia e fazer uma transferencia para conta vazia', () => {
    //dados aleatorios
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const transferValue = faker.datatype.number({ min: 1, max: 1000 });
    const description = faker.lorem.paragraph();
    var repeatedPassword = password;

    //registro
    cy.visit('https://bugbank.netlify.app/');
    cy.clickRegister();
    cy.typeEmail(email);
    cy.typeName(name);
    cy.typePassword(password);
    cy.typeRepeatedPassword(repeatedPassword);
    cy.clickSaldo();
    cy.clickCadastrar();

    cy.get('p[id="modalText"]').should('be.visible');

    //login
    cy.clickFecharModal();
    cy.loginEmail(email);
    cy.loginPassword(password);
    cy.clickAcessar();

    //tranferencia
    cy.clickTransferencia();
    cy.typeTransferValue(transferValue);
    cy.typeDescription(description);
    cy.clickTransferirAgora();

    //verificação
    cy.contains('p', 'Transferencia realizada com sucesso').should('not.exist');
    cy.contains('p', "Número da conta é obrigatório").should('be.visible');

  })
})

