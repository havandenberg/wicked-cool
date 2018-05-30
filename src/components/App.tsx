import glamorous from 'glamorous';
import * as React from 'react';
import background from '../assets/images/background.png';
import l from '../styles/layout';
import {
  breakpoints,
  colors,
  mobileSizes,
  sizes,
  spacing,
} from '../styles/theme';
import t from '../styles/typography';

const Main = glamorous.div({
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: spacing.ml,
  position: 'relative',
  width: '100%',
});

const Subtitle = glamorous(t.Subtitle)({
  marginLeft: spacing.xxxl,
  [breakpoints.mobileOnly]: {
    marginLeft: spacing.ml,
  },
});

const Domain = glamorous.span({
  color: colors.darkBlue,
  fontFamily: 'Cuprum',
  fontSize: sizes.h1,
  marginLeft: spacing.s,
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.h1,
  },
});

const Phone = glamorous(t.Text)({
  color: colors.lightBlue,
  fontFamily: 'Cuprum Bold',
});

class App extends React.Component {
  public render() {
    return (
      <Main>
        <t.Title top={spacing.huge}>WICKED COOL</t.Title>
        <Subtitle left={spacing.xxxl}>
          REFRIGERATION<Domain>.com</Domain>
        </Subtitle>
        <l.Spacing top={spacing.xxl} />
        <t.Text center={true}>
          is currently undergoing a little re-conditioning…
        </t.Text>
        <t.Text center={true} top={spacing.xxl}>
          We’ll be back soon, but in the meantime please contact us at
        </t.Text>
        <Phone center={true} top={spacing.l}>
          603-524-0445
        </Phone>
        <t.Text center={true} top={spacing.l}>
          for any service requests.
        </t.Text>
      </Main>
    );
  }
}

export default App;
