import styled from 'react-emotion';
import { color, fontSize, space } from 'styled-system';
import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  mobileSizes,
  tabletSizes,
} from './theme';

const textOptions = [
  ({ bold }: { bold?: boolean }) => ({
    fontWeight: bold ? 'bold' : undefined
  }),
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined
  }),
  color,
  fontSize,
  ({ nowrap }: { nowrap?: boolean }) => ({
    whiteSpace: nowrap ? 'nowrap' : undefined
  }),
  space,
];

const Title = styled('div')({
  color: colors.lightBlue,
  fontFamily: fonts.ice,
  fontSize: fontSizes.title,
  fontWeight: 200,
  textShadow: `-1px 0 ${colors.darkBlue}, 0 1px ${colors.darkBlue}, 1px 0 ${
    colors.darkBlue
  }, 0 -1px ${colors.darkBlue}`,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.title,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.title,
  },
}, ...textOptions);

const Subtitle = styled('div')({
  color: colors.darkBlue,
  fontFamily: fonts.ice,
  fontSize: fontSizes.subtitle,
  fontWeight: 200,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.subtitle,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.subtitle,
  },
}, ...textOptions);

const H1 = styled('h1')({
  color: colors.darkBlue,
  fontFamily: fonts.ice,
  fontSize: fontSizes.h1,
  margin: 0,
  padding: 0,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.h1,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.h1,
  },
}, ...textOptions);

const H2 = styled('h2')({
  color: colors.lightBlue,
  fontFamily: fonts.cuprum,
  fontSize: fontSizes.h2,
  margin: 0,
  padding: 0,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.h2,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.h2,
  },
}, ...textOptions);

const H3 = styled('h3')({
  color: colors.darkBlue,
  fontFamily: fonts.cuprum,
  fontSize: fontSizes.largeText,
  margin: 0,
  padding: 0,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.largeText,
  },
  [breakpoints.mobileOnly]: {
    fontSize: tabletSizes.largeText,
  },
}, ...textOptions);

const Text = styled('div')({
  color: colors.darkBlue,
  fontFamily: fonts.cuprum,
  fontSize: fontSizes.text,
  letterSpacing: 1.5,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.text,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.text,
  },
}, ...textOptions);

const ItalicText = styled(Text)({
  fontStyle: 'italic',
});

const Anchor = styled('a')({
  ":link": {
    color: colors.lightBlue,
  },
  ":visited": {
    color: colors.lightBlue,
  },
});

export default {
  Anchor,
  H1,
  H2,
  H3,
  ItalicText,
  Subtitle,
  Text,
  Title,
};
