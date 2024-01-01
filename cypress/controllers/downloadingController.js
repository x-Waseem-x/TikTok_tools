class downloadingController{

    clickOnDownload(){
        cy.get('a.button.download-file').first().click();
    }
}
export default downloadingController;