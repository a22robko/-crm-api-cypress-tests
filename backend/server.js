describe('CRM API Tests', () => {
  const api = 'http://localhost:3000/api/contacts';
  let contactId;

  it('should create a new contact', () => {
    cy.request('POST', api, {
      name: 'Alice Smith',
      email: 'alice@example.com',
      phone: '9876543210'
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      contactId = response.body.id;
    });
  });

  it('should get all contacts', () => {
    cy.request('GET', api).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('should get contact by ID', () => {
    cy.request('GET', `${api}/${contactId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Alice Smith');
    });
  });

  it('should update contact by ID', () => {
    cy.request('PUT', `${api}/${contactId}`, {
      name: 'Alice Johnson',
      email: 'alicej@example.com',
      phone: '9876543210'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Alice Johnson');
    });
  });

  it('should delete contact by ID', () => {
    cy.request('DELETE', `${api}/${contactId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return 404 for deleted contact', () => {
    cy.request({
      method: 'GET',
      url: `${api}/${contactId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
