import Section from "@/components/ui/Section";
import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

const Styles = {
  Section: styled(Section)`
    h2 {
      color: ${(props) => (props as any)["data-color"]};
      background-color: ${(props) => (props as any)["data-bg"]};
    }
  `,
};

export default Styles;
