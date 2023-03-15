import Section from "@/components/ui/Section";
import { greaterThan } from "@/styles/media";
import styled from "@emotion/styled";

const Styles = {
  Section: styled(Section)`
    background-color: ${(props) => (props as any)["data-bg"]};

    h2 {
      color: ${(props) => (props as any)["data-color"]};
    }
  `,
};

export default Styles;
