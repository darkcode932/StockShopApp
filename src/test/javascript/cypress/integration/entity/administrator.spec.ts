import { entityItemSelector } from '../../support/commands';
import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Administrator e2e test', () => {
  const administratorPageUrl = '/administrator';
  const administratorPageUrlPattern = new RegExp('/administrator(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'admin';
  const password = Cypress.env('E2E_PASSWORD') ?? 'admin';

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
    cy.visit('');
    cy.login(username, password);
    cy.get(entityItemSelector).should('exist');
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/administrators+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/administrators').as('postEntityRequest');
    cy.intercept('DELETE', '/api/administrators/*').as('deleteEntityRequest');
  });

  it('should load Administrators', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('administrator');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Administrator').should('exist');
    cy.url().should('match', administratorPageUrlPattern);
  });

  it('should load details Administrator page', function () {
    cy.visit(administratorPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        this.skip();
      }
    });
    cy.get(entityDetailsButtonSelector).first().click({ force: true });
    cy.getEntityDetailsHeading('administrator');
    cy.get(entityDetailsBackButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', administratorPageUrlPattern);
  });

  it('should load create Administrator page', () => {
    cy.visit(administratorPageUrl);
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('Administrator');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.get(entityCreateCancelButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', administratorPageUrlPattern);
  });

  it('should load edit Administrator page', function () {
    cy.visit(administratorPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        this.skip();
      }
    });
    cy.get(entityEditButtonSelector).first().click({ force: true });
    cy.getEntityCreateUpdateHeading('Administrator');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.get(entityCreateCancelButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', administratorPageUrlPattern);
  });

  it('should create an instance of Administrator', () => {
    cy.visit(administratorPageUrl);
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('Administrator');

    cy.get(`[data-cy="idA"]`).type('71194').should('have.value', '71194');

    cy.get(`[data-cy="firstNameA"]`).type('Inde b').should('have.value', 'Inde b');

    cy.get(`[data-cy="lastNameA"]`).type('la Limousin').should('have.value', 'la Limousin');

    cy.get(`[data-cy="birthdayA"]`).type('2021-09-28T21:29').should('have.value', '2021-09-28T21:29');

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.wait('@postEntityRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(201);
    });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', administratorPageUrlPattern);
  });

  it('should delete last instance of Administrator', function () {
    cy.intercept('GET', '/api/administrators/*').as('dialogDeleteRequest');
    cy.visit(administratorPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', response.body.length);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('administrator').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', administratorPageUrlPattern);
      } else {
        this.skip();
      }
    });
  });
});
