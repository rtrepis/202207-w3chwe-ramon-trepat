import Component from "./Component";

describe("Given a Component component", () => {
  describe("When instatied with a html-tag elment as parent", () => {
    test("Then it should show a tag div inside the html-tag element", () => {
      const container = document.createElement("selection");
      const tag = "div";

      new Component(container, "", tag);

      expect(container.querySelector(tag)).not.toBe(null);
    });
  });
});
