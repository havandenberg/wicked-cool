import { parse } from 'query-string';
import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  gradients,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import {
  FooterBottomText as BottomText,
  FooterInfo as ContactInfo,
  FooterInfoText as InfoText
} from './Footer';
import { PageContent, PageTitle } from './Home';

const Action = styled(Link)(
  {
    ":before": {
      backgroundImage: gradients.darkBlue,
      borderRadius: "inherit",
      content: '""',
      display: "block",
      height: "100%",
      left: 0,
      opacity: 0,
      position: "absolute",
      top: 0,
      transition: transitions.default,
      width: "100%",
      zIndex: -1,
    },
    ":hover": {
      ":before": {
        opacity: 1
      },
      color: colors.white,
    },
    borderRadius: borders.borderRadius,
    fontSize: fontSizes.largeText,
    padding: spacing.ml,
    position: 'relative',
    transition: transitions.default,
    zIndex: 1,
    [breakpoints.mobileOnly]: {
      ":last-child": {
        marginRight: 0,
      },
      fontSize: fontSizes.largeText,
      marginRight: spacing.ml,
      padding: spacing.s,
    },
  },
  ({ active }: { active?: boolean }) => ({
    background: active ? gradients.darkBlue : colors.background,
    color: active ? colors.white : colors.darkBlue,
  }),
);

const ContactForm = styled('form')({
  background: gradients.lightBlue,
  borderRadius: borders.borderRadius,
  padding: `${spacing.xxxl} ${spacing.xl}`,
  [breakpoints.mobileOnly]: {
    padding: `${spacing.l} ${spacing.m}`,
  },
});

const ContactText = styled(InfoText)({
  color: colors.darkBlue,
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.largeText,
  },
});

const inputStyles = {
  ":placeholder": {
    color: colors.darkBlue,
    fontFamily: fonts.cuprum,
    fontSize: fontSizes.largeText,
  },
  background: colors.background,
  border: borders.darkBlue,
  borderRadius: borders.borderRadius,
  color: colors.darkBlue,
  flex: 1,
  fontSize: fontSizes.largeText,
  padding: spacing.s,
  [breakpoints.mobileOnly]: {
    width: "100%",
  },
};

const Input = styled('input')({
  ...inputStyles
});

const TextArea = styled('textarea')({
  ...inputStyles,
  height: 200,
});

const InputLabel = styled(t.Text)({
  color: colors.white,
  fontSize: fontSizes.largeText,
  fontWeight: 'bold',
  margin: `0 ${spacing.xxxl} 0 0`,
  width: "30%",
  [breakpoints.mobileOnly]: {
    fontSize: fontSizes.text,
    marginBottom: spacing.ml,
    width: "auto",
  },
});

const InputWrapper = styled(l.Row)({
  alignItems: 'flex-start',
  margin: `0 auto ${spacing.xl}`,
  width: '80%',
  [breakpoints.mobileOnly]: {
    flexDirection: 'column',
    width: 'auto',
  },
});

const Snowflake = styled('img')({
  height: spacing.xxl,
  margin: `0 ${spacing.xxl}`,
  [breakpoints.mobileOnly]: {
    display: 'none',
  },
});

const Submit = styled('button')({
  ":before": {
    backgroundImage: gradients.darkBlue,
    borderRadius: "inherit",
    content: '""',
    display: "block",
    height: "100%",
    left: 0,
    opacity: 0,
    position: "absolute",
    top: 0,
    transition: transitions.default,
    width: "100%",
    zIndex: -1,
  },
  ":hover": {
    ":before": {
      opacity: 1
    },
  },
  ":last-child": {
    marginRight: 0,
  },
  background: colors.darkBlue,
  border: 'none',
  borderRadius: borders.borderRadius,
  color: colors.white,
  cursor: 'pointer',
  fontSize: fontSizes.largeText,
  fontWeight: 500,
  padding: spacing.ml,
  position: 'relative',
  textAlign: 'center',
  zIndex: 1,
  [breakpoints.iphone5]: {
    fontSize: fontSizes.largeText,
    padding: spacing.m,
  },
});

const Contact = ({ location }: { location: { search: string } }) => {
  const values = parse(location.search);
  return (
    <PageContent>
      <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
        Contact
      </PageTitle>
      <ContactInfo alignTop spaceBetween mb={[spacing.m, spacing.xxl]}>
        <div>
          <l.Row alignTop>
            <l.Space ml={[spacing.s, '0']} mr={spacing.xl}>
              <ContactText bold>Address:</ContactText>
              <ContactText bold mt={[spacing.xl, spacing.xxl]}>Phone:</ContactText>
              <ContactText bold>Email:</ContactText>
            </l.Space>
            <div>
              <ContactText>
                315 Hillcrest Dr<br />
                Laconia, NH 03246
              </ContactText>
              <ContactText>603-524-0445</ContactText>
              <ContactText>wickedcool444@gmail.com</ContactText>
            </div>
          </l.Row>
        </div>
        <BottomText>
          <t.H3 mb={spacing.ml} mt={[spacing.ml, 0]}>Hours of Operation:</t.H3>
          <ContactText>
            Monday – Friday: 8am – 5pm
          </ContactText>
          <ContactText>
            Closed Saturday & Sunday
          </ContactText>
        </BottomText>
      </ContactInfo>
      <l.CenteredRow mb={[spacing.m, spacing.xxxl]}>
        <Action active={values.action !== "schedule"} to="/contact?action=request">
          Request Estimate
        </Action>
        <Snowflake src={SnowflakeImg} />
        <Action active={values.action === "schedule"} to="/contact?action=schedule">
          Schedule Service
        </Action>
      </l.CenteredRow>
      <ContactForm>
        <InputWrapper>
          <InputLabel>Name*:</InputLabel>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Email*:</InputLabel>
          <Input placeholder="username@example.com" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Phone*:</InputLabel>
          <Input placeholder="123-456-7890" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel mt={[0, spacing.s]}>Message*:</InputLabel>
          <TextArea />
        </InputWrapper>
        {values.action === "schedule" && <InputWrapper>
          <InputLabel>Service Date*:</InputLabel>
          <Input placeholder="mm/dd/yyyy" />
        </InputWrapper>}
        {values.action === "schedule" && <InputWrapper>
          <InputLabel mt={spacing.s}>Service Time*:</InputLabel>
          <Input placeholder="5pm, 11:00am" />
        </InputWrapper>}
        <l.CenteredRow><Submit>Submit</Submit></l.CenteredRow>
      </ContactForm>
      <l.Space mt={[0, spacing.xxxxxl]} />
    </PageContent>
  )
};

export default Contact;
