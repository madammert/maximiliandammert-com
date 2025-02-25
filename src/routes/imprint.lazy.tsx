import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Link from "../components/Link";
import Typography from "../components/Typography";

const StyledImprintMain = styled.main`
  display: grid;
  gap: 2rem;
  justify-items: start;
`;

const StyledImprintStack = styled.section<{ gap?: number }>(({ gap = 1 }) => {
  return css`
    display: grid;
    gap: ${gap}rem;
    justify-items: start;
    max-width: 55ch;
  `;
});

const Imprint = () => {
  useEffect(() => {
    document.title = "Maximilian Dammert · Imprint";
  }, []);

  return (
    <StyledImprintMain>
      <Typography type="h1" size="l">
        Legal notice
      </Typography>
      <StyledImprintStack>
        <Typography type="h2" size="m">
          Responsible for website
        </Typography>
        <Typography type="p">
          Maximilian A. Dammert
          <br />
          Reith 30
          <br />
          21698 Brest
        </Typography>
      </StyledImprintStack>
      <StyledImprintStack>
        <Typography type="h3" size="s">
          Contact
        </Typography>
        <Link
          href="mailto:mail@maximiliandammert.com"
          title="mail@maximiliandammert.com"
        >
          mail@maximilian&shy;dammert.com
        </Link>
      </StyledImprintStack>
      <StyledImprintStack>
        <Typography type="h2" size="m">
          Disclaimer
        </Typography>
        <StyledImprintStack>
          <Typography type="h3" size="s">
            Limitation of liability for internal content
          </Typography>
          <Typography type="p">
            The content of my website has been compiled with meticulous care and
            to the best of my knowledge. However, I cannot assume any liability
            for the up-to-dateness, completeness or accuracy of any of the
            pages.
            <br />
            Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele
            Media Act by German law), I as service provider am liable for my own
            content on these pages in accordance with general laws. However,
            pursuant to sections 8 to 10 of the TMG, I as service provider am
            not under obligation to monitor external information provided or
            stored on my website. Once I have become aware of a specific
            infringement of the law, I will immediately remove the content in
            question. Any liability concerning this matter can only be assumed
            from the point in time at which the infringement becomes known to
            me.
          </Typography>
        </StyledImprintStack>
      </StyledImprintStack>
      <StyledImprintStack>
        <Typography type="h3" size="s">
          Limitation of liability for external links
        </Typography>
        <Typography type="p">
          My website contains links to the websites of third parties (»external
          links«). As the content of these websites is not under our control, I
          cannot assume any liability for such external content. In all cases,
          the provider of information of the linked websites is liable for the
          content and accuracy of the information provided. At the point in time
          when the links were placed, no infringements of the law were
          recognisable to us. As soon as an infringement of the law becomes
          known to us, we will immediately remove the link in question.
        </Typography>
      </StyledImprintStack>
      <StyledImprintStack>
        <Typography type="h3" size="s">
          Copyright
        </Typography>
        <Typography type="p">
          The content and works published on this website are governed by the
          copyright laws of Germany. Any duplication, processing, distribution
          or any form of utilisation beyond the scope of copyright law shall
          require the prior written consent of the author or authors in
          question.
        </Typography>
      </StyledImprintStack>
      <StyledImprintStack>
        <Typography type="h2" size="m">
          Web analytics
        </Typography>
        <Typography type="p">
          This website uses Google Analytics, a web analytics service provided
          by Google, Inc. (»Google«). Google Analytics uses »cookies«, which are
          text files placed on your computer to help the website analyse how
          visitors use the site. The information generated by the cookie about
          your use of the website (including your IP address) will be
          transmitted to and stored by Google on servers in the United States .
          Google will use this information for the purpose of evaluating your
          use of the website, compiling reports on website activity for website
          operators and providing other services relating to website activity
          and internet usage. Google may also transfer this information to third
          parties where required to do so by law, or where such third parties
          process the information on Google’s behalf. Google will not associate
          your IP address with any other data held by Google. You may refuse the
          use of cookies by selecting the appropriate settings on your browser,
          however please note that if you do this you may not be able to use the
          full functionality of this website. By using this website, you consent
          to the processing of data about you by Google in the manner and for
          the purposes set out above.
          <br />
          You can prevent Google’s collection and use of data (cookies and IP
          address) by downloading and installing the{" "}
          <Link
            href="https://tools.google.com/dlpage/gaoptout?hl=en"
            title="browser plug-in"
          >
            browser plug-in
          </Link>
          .<br />
          Please note that this website initializes Google Analytics with the
          setting anonymizeIp. This guarantees anonymized data collection by
          masking the last part of your IP address.
        </Typography>
      </StyledImprintStack>
      <Link title="Back" routerLinkProps={{ to: "/" }}>
        &larr; Back
      </Link>
    </StyledImprintMain>
  );
};

export const Route = createLazyFileRoute("/imprint")({
  component: Imprint,
});

export default Imprint;
