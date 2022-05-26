exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};
