class AddBoardPage {
   get addBoardHeading() {
    return cy.get('.vs-c-organization-boards').contains('Add new Board').click();
   }

   get boardTitle() {
    return cy.get('.el-form-item').find('input[name="name"]')
   }

   get nextbtn() {
    return cy.get('button').contains('Next');
   }

   get boardTypeHeading() {
    return cy.get('h2').contains('Board Type');
   }

   addBoard(boardName) {
     this.boardTitle.type(boardName);
     this.nextbtn.click();
   }
}

export const addBoard = new AddBoardPage;