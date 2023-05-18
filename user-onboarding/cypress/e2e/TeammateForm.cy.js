describe('User-Onboarding App', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
  })

  it('sanity check to make sure tests work', () => {
      expect(1+2).to.equal(3);
      expect(2+2).not.equal(5);
      expect({}).not.to.equal({});
  })



















})