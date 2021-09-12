import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>java</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: #9B2244;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    <div
        class="c0"
        color="text"
      >
        java
      </div>
    </DocumentFragment>
  `);
});
