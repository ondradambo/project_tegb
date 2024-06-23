export class LoginApi {
  login(username, password) {
    return cy.request({
      method: "POST",
      url: "https://tegb-frontend-88542200c6db.herokuapp.com/",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
