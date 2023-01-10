import * as emailjs from 'emailjs-com';
import * as R from 'ramda';
import * as React from 'react';
import styled from 'react-emotion';
import { PulseLoader } from 'react-spinners';
import EmailImg from '../assets/images/email.svg';
import SendImg from '../assets/images/send.svg';
import l from '../styles/layout';
import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  gradients,
  shadows,
  spacing,
  transitions,
} from '../styles/theme';
import t from '../styles/typography';
import { SERVICE_ACTION } from '../utils/constants';
import { scrollToId } from '../utils/scroll';
import { PhoneIcon } from './CTAs';

const ContactFormWrapper = styled('div')({
  background: 'linear-gradient(to top, #168ACF80, #40B1F480)',
  borderRadius: borders.borderRadius,
  boxShadow: shadows.box,
  padding: spacing.xl,
  transition: transitions.default,
  [breakpoints.mobile]: {
    padding: `${spacing.l} ${spacing.m}`,
  },
});

const ErrorMessage = styled(l.CenteredRow)({
  color: colors.red,
  fontSize: fontSizes.largeText,
});

const inputStyles = {
  ':placeholder': {
    color: colors.darkBlue,
    fontFamily: fonts.cuprum,
    fontSize: fontSizes.largeText,
  },
  background: colors.background,
  border: borders.darkBlueThick,
  borderRadius: borders.borderRadius,
  color: colors.darkBlue,
  flex: 1,
  fontSize: fontSizes.largeText,
  padding: spacing.s,
  [breakpoints.mobile]: {
    width: '100%',
  },
};

const withError = ({ error }: { error?: boolean }) => ({
  border: error ? borders.red : borders.darkBlueThick,
});

const Input = styled('input')(
  {
    ...inputStyles,
  },
  withError,
);

const TextArea = styled('textarea')(
  {
    ...inputStyles,
    height: 200,
  },
  withError,
);

const InputLabel = styled(t.Text)(
  {
    fontSize: fontSizes.largeText,
    fontWeight: 'bold',
    marginRight: spacing.l,
    width: '30%',
    [breakpoints.mobile]: {
      fontSize: fontSizes.text,
      marginBottom: spacing.ml,
      width: 'auto',
    },
  },
  ({ error }: { error?: boolean }) => ({
    color: error ? colors.red : colors.darkBlue,
  }),
);

const InputWrapper = styled(l.Row)({
  margin: `0 auto ${spacing.xl}`,
  width: '90%',
  [breakpoints.mobile]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: 'auto',
  },
});

const SendIcon = styled('img')({ height: spacing.xl, marginRight: spacing.ml });

const Submit = styled('button')({
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
  },
  ':last-child': {
    marginRight: 0,
  },
  alignItems: 'center',
  background: colors.darkBlue,
  borderRadius: borders.borderRadius,
  boxShadow: shadows.box,
  color: colors.white,
  cursor: 'pointer',
  display: 'flex',
  fontSize: fontSizes.largeText,
  fontWeight: 500,
  padding: spacing.m,
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  zIndex: 1,
  [breakpoints.small]: {
    fontSize: fontSizes.largeText,
    padding: spacing.m,
  },
});

interface Props {
  action: string;
}

interface State {
  completed: boolean;
  email: string;
  errors: {
    email: boolean;
    message: boolean;
    name: boolean;
    phone: boolean;
    serviceDate: boolean;
  };
  failed: boolean;
  loading: boolean;
  message: string;
  name: string;
  phone: string;
  serviceDate: string;
}

const initialState = {
  completed: false,
  email: '',
  errors: {
    email: false,
    message: false,
    name: false,
    phone: false,
    serviceDate: false,
  },
  failed: false,
  loading: false,
  message: '',
  name: '',
  phone: '',
  serviceDate: '',
};

type contactField = 'name' | 'email' | 'phone' | 'message' | 'serviceDate';

class ContactForm extends React.Component<Props, State> {
  state = initialState;

  getSnapshotBeforeUpdate(prevProps: Props) {
    if (!R.equals(prevProps.action, this.props.action)) {
      this.resetErrors();
    }
    return null;
  }

  handleChange = (field: contactField) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      this.setState({
        ...this.state,
        [field]: e.target.value,
      });
    };
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { action } = this.props;
    const { email, loading, message, name, phone, serviceDate } = this.state;

    if (!loading && this.validate()) {
      this.setState(
        {
          loading: true,
        },
        () => {
          emailjs
            .send(
              'wicked_cool_gmail',
              'template_YTh9UKQv',
              {
                from_name: name,
                message,
                phone,
                reply_to: email,
                request_type: action,
                service_date: serviceDate,
              },
              'user_x41YJeHB2mv7uIY1xl7sw',
            )
            .then(
              () => {
                this.setState({ completed: true, loading: false });
              },
              (error: object) => {
                console.log(error);
                this.setState({ failed: true, loading: false });
              },
            );
        },
      );
    } else {
      scrollToId('contact-form');
    }
  };

  hasErrors = () => {
    const { errors } = this.state;
    return errors.name || errors.email || errors.phone || errors.serviceDate;
  };

  resetErrors = () => {
    this.setState({ errors: initialState.errors });
  };

  resetForm = () => {
    this.setState(initialState);
  };

  validate = () => {
    const { action } = this.props;
    const { email, message, name, phone, serviceDate } = this.state;

    const errors = {
      email: false,
      message: false,
      name: false,
      phone: false,
      serviceDate: false,
      serviceTime: false,
    };

    if (
      !email.match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      )
    ) {
      errors.email = true;
    }

    if (R.isEmpty(message)) {
      errors.message = true;
    }

    if (R.isEmpty(name)) {
      errors.name = true;
    }

    if (!phone.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/)) {
      errors.phone = true;
    }

    if (action === SERVICE_ACTION && R.isEmpty(serviceDate)) {
      errors.serviceDate = true;
    }

    this.setState({ errors });

    return (
      !errors.name &&
      !errors.message &&
      !errors.email &&
      !errors.phone &&
      !errors.serviceDate
    );
  };

  render() {
    const { action } = this.props;
    const {
      completed,
      email,
      errors,
      failed,
      loading,
      message,
      name,
      phone,
      serviceDate,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ContactFormWrapper>
          {completed &&
            !failed && (
              <t.Text center fontSize={fontSizes.largeText}>
                Success! Thank you for your request and we will get back to you
                as soon as possible.
              </t.Text>
            )}
          {!completed &&
            failed && (
              <t.Text center color={colors.red} fontSize={fontSizes.largeText}>
                An error has occurred. Please try again later or email us
                directly at
                <t.Anchor
                  border={borders.darkBlue}
                  color={colors.darkBlue}
                  href="mailto:service@wickedcoolmech.com"
                >
                  <PhoneIcon height={spacing.l} src={EmailImg} />
                  service@wickedcoolmech.com
                </t.Anchor>
              </t.Text>
            )}
          {!completed &&
            !failed && (
              <div>
                {this.hasErrors() && (
                  <ErrorMessage mb={spacing.xl}>
                    Please correct the fields highlighted below and try again.
                  </ErrorMessage>
                )}
                <InputWrapper>
                  <InputLabel error={errors.name} nowrap>
                    Name or company*:
                  </InputLabel>
                  <Input
                    error={errors.name}
                    onChange={this.handleChange('name')}
                    value={name}
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputLabel error={errors.email}>Email*:</InputLabel>
                  <Input
                    error={errors.email}
                    onChange={this.handleChange('email')}
                    placeholder="username@example.com"
                    value={email}
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputLabel error={errors.phone}>Phone*:</InputLabel>
                  <Input
                    error={errors.phone}
                    onChange={this.handleChange('phone')}
                    placeholder="123-456-7890"
                    value={phone}
                  />
                </InputWrapper>
                <InputWrapper alignTop>
                  <InputLabel error={errors.message} mt={[0, spacing.s]}>
                    Message*:
                  </InputLabel>
                  <TextArea
                    error={errors.message}
                    onChange={this.handleChange('message')}
                    placeholder="Description of estimate or service request"
                    value={message}
                  />
                </InputWrapper>
                {action === SERVICE_ACTION && (
                  <InputWrapper>
                    <InputLabel error={errors.serviceDate}>
                      Service Date
                      <l.Break breakpoint="tabletUp" /> (if available)*:
                    </InputLabel>
                    <Input
                      error={errors.serviceDate}
                      onChange={this.handleChange('serviceDate')}
                      placeholder="mm/dd/yyyy, sept 5"
                      value={serviceDate}
                    />
                  </InputWrapper>
                )}
              </div>
            )}
        </ContactFormWrapper>
        {!completed &&
          !failed && (
            <l.CenteredRow mt={spacing.xl}>
              {loading ? (
                <PulseLoader sizeUnit="px" size={30} color={colors.darkBlue} />
              ) : (
                <Submit type="submit">
                  <SendIcon src={SendImg} />
                  Submit
                </Submit>
              )}
            </l.CenteredRow>
          )}
        {(completed || failed) && (
          <l.CenteredRow mt={spacing.xl}>
            <Submit onClick={this.resetForm}>Reset Form</Submit>
          </l.CenteredRow>
        )}
      </form>
    );
  }
}

export default ContactForm;
