describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Next and Previous Button Test', function () {
  it('Checks if next and previous button work', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active h1').should('contain', 'Rome');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active h1').should('contain', 'London');

    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active h1').should('contain', 'Rome');
  });
});

describe('Descriptions Test', function () {
  it('Checks if first description contains "Italy"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active p').should('contain', 'Italy');
  });

  it('Checks if second description contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    
    cy.get('.swiper-slide-active p').should('contain', 'United Kingdom');
  });

  it('Checks if third description contains "France"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-next').click();
    cy.wait(1000);

    cy.get('.swiper-slide-active p').should('contain', 'France');
  });
});