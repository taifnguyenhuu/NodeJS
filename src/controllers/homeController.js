let getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

let getAboutPage = (req, res) => {
  return res.render("About/aboutPage.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
