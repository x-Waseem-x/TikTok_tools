
import downloadingController from "../controllers/downloadingController"
import snaptikController from "../controllers/snaptikControoler";
var dc = new downloadingController();
var sc = new snaptikController();

describe('template spec', () => {
  
  var video_url='https://www.tiktok.com/@tuvok12/video/7315128007386041632?is_from_webapp=1&sender_device=pc'
  // it('passes', () => {
  //   cy.visit("https://www.google.com/search?q=switzerland+website%3Atiktok.com")
  //   cy.pause()
  //   video_url=cy.url()
  // })
  it('passes', () => {
    cy.visit('https://snaptik.app')

    sc.typeAndSearchVideo(video_url)
    // Find the anchor element by its class
    // Find the first matching element and click it
    dc.clickOnDownload()
    cy.get('.modal-close').click()



    // cy.get('.is-relative > .button > span') # paste button needs programatic copy paste
  
  })
})