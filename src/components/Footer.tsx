import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer``;
const FooterRow = styled.div`
  display: flex;
`;
const FooterColAuto = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
`;
const FooterColShrink = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterRow>
      <FooterColAuto>
        <h4>Contact</h4>
        <a href="https://github.com/nodeschool/landshut/">GitHub</a>
      </FooterColAuto>
      <FooterColAuto>
        <h4>Want to help? Questions?</h4>
        <p>
          Please open an issue on{" "}
          <a href="https://github.com/nodeschool/landshut/issues">GitHub</a> and
          join the disccussion
        </p>
      </FooterColAuto>
    </FooterRow>
    <div>
      © {new Date().getFullYear()}, Built with ❤️ and&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </FooterContainer>
);

export default Footer;
