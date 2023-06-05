describe('User-Onboarding App', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
  })

  // const name = () => cy.get('input[firstName=text]')
  const name = () => cy.get('#name')
  const email= () => cy.get('#email')
  const role = () => cy.get('#role')
  const single = () => cy.get('#single')
  const married = () => cy.get('#married')
  const hiking = () => cy.get('#hiking')
  const reading = () => cy.get('#reading')
  const coding = () => cy.get('#coding')
  const submitBtn = () => cy.get('#submit')
  const fooInput = () => cy.get('#foo')

  it('sanity check to make sure tests work', () => {
      expect(1+2).to.equal(3);
      expect(2+2).not.equal(5);
      expect({}).not.to.equal({});
  })

  it('proper elements are showing', () => {
    name().should('exist');
    email().should('exist');
    single().should('exist');
    married().should('exist');
    hiking().should('exist');
    reading().should('exist');
    coding().should('exist');
    submitBtn().should('exist');
    fooInput().should('not.exist')
  })
  
  it('submit button starts out disabled', () => {
    submitBtn().should('be.disabled')
  })

  it('add a new colleague', () => {
    name().click().clear().type('John')
    email().click().clear().type('john@g.com')
    role().select('Student')
    single().click()
    submitBtn().should('be.enabled')
  })

  it('field validation', () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    name().type('David').invoke('val').its('length').should('be.greaterThan', 3) 
    email().type('david@gmail.com').invoke('val').should('match', emailPattern);
  })
});