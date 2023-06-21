///<reference types = "cypress"/>

describe("visit the website", () => {
  it("test-one", () => {
    cy.visit("https://www.automationteststore.com");

  //   cy.get(
  //     "a[href='https://automationteststore.com/index.php?rt=content/contact']"
  //   ).click();
  //   cy.get("#ContactUsFrm_first_name").type("abedalraheem");

  //   cy.get("input[id='ContactUsFrm_email']").type("asaqa001@gmail.com");

  //   cy.get('textarea[name="enquiry"]').type("this is a test ");

  //   cy.get('button[title="Submit"]').click();
  // });

  // it.only("test2", () => {
  //   cy.visit("https://www.automationteststore.com");

  //   cy.get(
  //     "a[href='https://automationteststore.com/index.php?rt=content/contact']"
  //   ).click();
  //   cy.get("#ContactUsFrm_first_name").type("abedalraheem");

  //   cy.get("input[id='ContactUsFrm_email']").type("asaqa001@gmail.com");

  //   cy.get('textarea[name="enquiry"]').type("this is a test ");

  //   cy.get('button[title="Submit"]').click();

  

    // cy.get('.mb40 > .btn').should('have.a.property','title')





// Assertion part 

















// cy.get(".mb40 > :nth-child(3)").should(
//   "have.text",
//   "Your enquiry has been successfully sent to the store owner!"
// );
// cy.document().should("have.property", "title").and("eq","Contact Us");

// cy.title().should('eq',"Contact Us")


// cy.location('href').should("include","contact")
// cy.location().its('href').should('include',"contact")

// cy.url().should('include',"contact")

// cy.title().should('include',"Us")



console.log(" 4 test case passed")



//promise part 


cy.get('.prdocutname').contains('Benefit Bella Bamba').click().then(function(element){

  console.log(element.text()+ " has beeen added ")
  cy.log(element.text()+ " has beeen added ")
})






























  });
});

/*

1-  we use the unique attribute for this a tag which is href , href always unique
 cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]')



 2- we use attribute called name
     cy.get("input[name='first_name']").type("abedalraheem");


     3- we use the ID - used double  quotation
 cy.get("input#ContactUsFrm_email").type("asaqa001@gmail.com");


 4-  we use the ID - used single qutation
     cy.get('textarea#ContactUsFrm_enquiry').type("this is a test");

     5- we use the tag name with one attribute called title 
 cy.get("button[title='Submit']").click();

 6- By tag name
   cy.get("input")

   7- By attribute name and value
  cy.get("input[name='first_name']")

  8-By id
   cy.get("#contact_me")

   9-By class
  cy.get(".feedback-input")

  10- By multiple classes
  cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

  
11- By two different attributes
     cy.get("[name='email'][placeholder='Email Address']")

*/
