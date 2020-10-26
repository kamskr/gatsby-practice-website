describe("app", () => {
  it("works", () => {
    cy.visit("/")
    cy.contains(/about/i).click()
  })
})
