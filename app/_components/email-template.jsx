import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
export const EmailTemplate = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Preview>Thank you for trying Courses store.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src='https://res.cloudinary.com/dripwnroz/image/upload/v1713435355/photo_6046227262073846788_c_taybw6.jpg'
          width="420"
          height="420"
          alt="yazn_108 logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Thank you for trying Courses store. Click the visit button below to visit my website
        </Text>
        <Section style={btnContainer}>
          <Button px={12} py={12}
            style={button}
            href="https://yazn-108.github.io/">
            Visit my site
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Subscribe to yazn_108</Text>
      </Container>
    </Body>
  </Html>
);
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
const container = {
  margin: '0 auto',
  padding: '20px 10px 48px',
};
const logo = {
  margin: '0 auto',
  borderRadius: "8px"
};
const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};
const btnContainer = {
  textAlign: 'center',
};
const button = {
  backgroundColor: '#57d6ff',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: 10,
  width: "80%",
  margin: '20px auto',
};
const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};
const footer = {
  color: '#8898aa',
  fontSize: '12px',
};