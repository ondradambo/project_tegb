import newTegbProjectData from "../../fixtures/tegb_project_DDT_data.json";

describe("DDT Tests", () => {
  newTegbProjectData.forEach((projectData) => {
    it(`Account balance: ${projectData.startBalance}`, () => {
      let type = "Test";
      const startBalance = projectData.startBalance;
    });
  });
});
