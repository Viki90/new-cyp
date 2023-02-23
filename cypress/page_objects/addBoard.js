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

   get radioButton() {
    return cy.get('.vs-c-radio.vs-u-cursor--pointer').first();
   }

   get finishBtn() {
    return cy.get('button').contains('Finish');
   }

   addBoard(boardName) {
     this.boardTitle.type(boardName);
     this.nextbtn.click();
     this.radioButton.click();
     this.nextbtn.click();
     this.nextbtn.click();
     this.finishBtn.click();
   }
}

export const addBoard = new AddBoardPage;