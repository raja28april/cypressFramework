describe("Rahul Shetty", () => {
  it("oauth logic", () => {
    //https://rahulshettyacademy.com/getCourse.php?state=verifyfjdss&code=4%2FvAHBQUZU6o4WJ719NrGBzSELBFVBI9XbxvOtYpmYpeV47bFVExkaxWaF_XR14PHtTZf7ILSEeamywJKwo_BYs9M&scope=email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&session_state=0c32992f0d47e93d273922018ade42d1072b9d1f..a35c&prompt=none#"

    // cy.visit("https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&auth_url=https://accounts.google.com/o/oauth2/v2/auth&client_id=692183103107-p0m7ent2hk7suguv4vq22hjcfhcr43pj.apps.googleusercontent.com&response_type=code&redirect_uri=https://rahulshettyacademy.com/getCourse.php"
    // );
    // cy.visit('https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D42870634%26auth_type%3DWEBP%26flow%3D%257B%2522state%2522%253A%2522di%257EUCS%257EFkip6jTRM33zxH20rQTAe5c-oPaocUA6T8vY82PjoCNo8rbFo-4x%257E0bshqnTXUvZKnox6d9fOPqEHEHlct.J7FEn3WGk%257EqpC9q%257EqfRorvY6crFfKb2aHTaKEz%2522%252C%2522scope%2522%253A%2522r_awliprofile%2522%252C%2522appId%2522%253A42870634%252C%2522authorizationType%2522%253A%2522WEB_PKCE%2522%252C%2522codeChallenge%2522%253A%2522dtPu0UHqAta4Dc0_vUoZsM2aOANXwEhNELyqQE6sD9s%2522%252C%2522codeChallengeMethod%2522%253A%2522S256%2522%252C%2522authFlowName%2522%253A%2522apply-with-linkedin%2522%252C%2522currentSubStage%2522%253A0%252C%2522creationTime%2522%253A1668809122400%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fplatform.linkedin.com%252Fxdoor%252Fwidgets%252Foauth-redirect.html%253FxdOrigin%253Dhttps%25253A%25252F%25252Fboards.greenhouse.io%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D42870634%26auth_type%3DWEBP%26flow%3D%257B%2522state%2522%253A%2522di%257EUCS%257EFkip6jTRM33zxH20rQTAe5c-oPaocUA6T8vY82PjoCNo8rbFo-4x%257E0bshqnTXUvZKnox6d9fOPqEHEHlct.J7FEn3WGk%257EqpC9q%257EqfRorvY6crFfKb2aHTaKEz%2522%252C%2522scope%2522%253A%2522r_awliprofile%2522%252C%2522appId%2522%253A42870634%252C%2522authorizationType%2522%253A%2522WEB_PKCE%2522%252C%2522codeChallenge%2522%253A%2522dtPu0UHqAta4Dc0_vUoZsM2aOANXwEhNELyqQE6sD9s%2522%252C%2522codeChallengeMethod%2522%253A%2522S256%2522%252C%2522authFlowName%2522%253A%2522apply-with-linkedin%2522%252C%2522currentSubStage%2522%253A0%252C%2522creationTime%2522%253A1668809122400%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fplatform.linkedin.com%252Fxdoor%252Fwidgets%252Foauth-redirect.html%253FxdOrigin%253Dhttps%25253A%25252F%25252Fboards.greenhouse.io%2522%257D');
    // cy.get('#username').type("raja28april@gmail.com");
    // cy.get('#password').type("Linkiaug2d2d11");
    // cy.contains('button', 'Sign in').click();
    // cy.get('#oauth__auth-form__submit-btn').click();
    // cy.url().then(url => {
    //   cy.log(url);
    // })
    cy.visit("https://mocklab-demo.herokuapp.com/login");
    cy.get("div.demo-box a").click();
    cy.origin("https://oauth.mocklab.io", () => {
      cy.wait(2000);
      cy.get('[name="email"]').type("test@test.com");
      cy.get('[name="password"]').type("fakePassword");
      cy.get("#login-submit").click();
    });
    cy.get("h1 strong").should("have.text", "test@test.com");
    // cy.get("#identifierId").type("raja28april@gmail.com");
    // cy.get("#identifierNext > div > button").click();
    // cy.get("#password input").type("Germimsaiiaug2d2d11Gmail");
    // cy.get("#identifierNext > div > button").click();
    /*  cy.url().then((url) => {
       const authCode = url.split("code=")[1].split("&scope")[0];
       cy.log(authCode);
       cy.request({
         method: "POST",
         url: "https://www.googleapis.com/oauth2/v4/token",
         qs: {
           code: `${authCode}`,
           client_id:
             "692183103107-p0m7ent2hk7suguv4vq22hjcfhcr43pj.apps.googleusercontent.com",
           client_secret: "erZOWM9g3UtwNRj340YYaK_W",
           redirect_uri: "https://rahulshettyacademy.com/getCourse.php",
           grant_type: "authorization_code",
         },
       }).then((res) => {
         const accessToken = "`${res.body.access_token}`";
         cy.log(`${accessToken}`);
 
         cy.request({
           method: "GET",
           url: "htpps://rahulshettyacademy.com/getCourse.php",
           qs: { access_token: `${accessToken}` },
         }).then((response) => {
           cy.log(`${response.status}`);
         });
       });
     }); */
  });
});
