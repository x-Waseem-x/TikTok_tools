class snaptikController{

    typeAndSearchVideo(video_url){
        cy.get('#url').clear().type(video_url).type('{enter}');
    }
}
export default snaptikController;