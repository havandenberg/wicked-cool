import { parse } from 'query-string';
import * as React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import EmailImg from '../assets/images/email.svg';
import PhoneImg from '../assets/images/phone-dark.svg';
import SnowflakeImg from '../assets/images/snowflake-service.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fontSizes,
  gradients,
  shadows,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import { ESTIMATE_ACTION, SERVICE_ACTION } from '../utils/constants';
import { scrollToId } from '../utils/scroll';
import ContactForm from './ContactForm';
import { PhoneIcon } from './CTAs';
import {
  FooterBottomText as BottomText,
  FooterInfo as ContactInfo,
  FooterInfoText as InfoText,
} from './Footer';
import withScroll from './hoc/withScroll';
import { PageContent, PageTitle } from './Home';

const Action = styled(Link)(
  {
    ':before': {
      backgroundImage: gradients.darkBlue,
      borderRadius: 'inherit',
      content: '""',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      transition: transitions.default,
      width: '100%',
      zIndex: -1,
    },
    ':hover': {
      ':before': {
        opacity: 1,
      },
      boxShadow: shadows.box,
      color: colors.white,
    },
    borderRadius: borders.borderRadius,
    fontSize: fontSizes.largeText,
    padding: spacing.ml,
    position: 'relative',
    transition: transitions.default,
    zIndex: 1,
    [breakpoints.mobile]: {
      ':last-child': {
        marginRight: 0,
      },
      fontSize: fontSizes.largeText,
      marginRight: spacing.ml,
      padding: spacing.m,
    },
    [breakpoints.small]: {
      fontSize: fontSizes.text,
      padding: spacing.s,
    },
  },
  ({ active }: { active?: boolean }) => ({
    backgroundImage: active ? gradients.darkBlue : colors.background,
    boxShadow: active ? shadows.box : undefined,
    color: active ? colors.white : colors.darkBlue,
  }),
);

const ContactInfoInner = styled('div')({
  [breakpoints.mobile]: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

const ContactLabels = styled(l.Space)({
  [breakpoints.mobile]: {
    display: 'none',
  },
});

const ContactText = styled(InfoText)({
  color: colors.darkBlue,
  [breakpoints.mobile]: {
    fontSize: fontSizes.largeText,
  },
});

const Snowflake = styled('img')({
  height: spacing.xxl,
  margin: `0 ${spacing.xxl}`,
  [breakpoints.mobile]: {
    display: 'none',
  },
});

interface Props {
  location: {
    search: string;
  };
}

class Contact extends React.Component<Props> {
  componentDidMount() {
    const values = parse(this.props.location.search);
    if (values.action) {
      scrollToId('contact-form');
    }
  }

  render() {
    const values = parse(this.props.location.search);
    return (
      <PageContent>
        <PageTitle center mb={[spacing.xl, spacing.xxxxl]}>
          Contact Us
        </PageTitle>
        <ContactInfo alignTop spaceBetween mb={[spacing.xl, spacing.xxl]}>
          <div>
            <l.Row alignTop>
              <ContactLabels mr={spacing.xl}>
                <ContactText bold>Address:</ContactText>
                <ContactText bold mt={[spacing.xl, spacing.xxl]}>
                  Phone:
                </ContactText>
                <ContactText bold>Email:</ContactText>
              </ContactLabels>
              <ContactInfoInner>
                <ContactText>
                  315 Hillcrest Dr
                  <br />
                  Laconia, NH 03246
                </ContactText>
                <ContactText>
                  <t.Anchor
                    border={borders.darkBlue}
                    color={colors.darkBlue}
                    href="tel:6035240445"
                  >
                    <PhoneIcon src={PhoneImg} />
                    603-524-0445
                  </t.Anchor>
                </ContactText>
                <ContactText>
                  <t.Anchor
                    border={borders.darkBlue}
                    color={colors.darkBlue}
                    href="mailto:wickedcool444@gmail.com"
                  >
                    <PhoneIcon height={spacing.l} src={EmailImg} />
                    wickedcool444@gmail.com
                  </t.Anchor>
                </ContactText>
              </ContactInfoInner>
            </l.Row>
          </div>
          <BottomText>
            <t.H3 mb={spacing.ml} mt={[spacing.ml, 0]}>
              Hours of Operation:
            </t.H3>
            <ContactText>Monday – Friday: 8am – 5pm</ContactText>
            <ContactText>
              Available for emergency calls:
              <br />
              Saturday, Sunday & after hours
            </ContactText>
          </BottomText>
        </ContactInfo>
        <div id="contact-form" />
        <l.CenteredRow my={[spacing.m, spacing.xxxl]}>
          <Action
            active={values.action !== SERVICE_ACTION}
            to={`/contact?action=${ESTIMATE_ACTION}`}
          >
            Request Estimate
          </Action>
          <Snowflake src={SnowflakeImg} />
          <Action
            active={values.action === SERVICE_ACTION}
            to={`/contact?action=${SERVICE_ACTION}`}
          >
            Schedule Service
          </Action>
        </l.CenteredRow>
        <ContactForm action={values.action} />
      </PageContent>
    );
  }
}

export default withScroll(Contact);
