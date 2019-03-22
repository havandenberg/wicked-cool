import styled from 'react-emotion';
import { color as colorFunc, fontSize, space, zIndex } from 'styled-system';
import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  mobileSizes,
  shadows,
  spacing,
  tabletSizes,
  transitions,
} from './theme';

const textOptions = [
  ({ bold }: { bold?: boolean }) => ({
    fontWeight: bold ? 'bold' : undefined,
  }),
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  colorFunc,
  fontSize,
  ({ nowrap }: { nowrap?: boolean }) => ({
    whiteSpace: nowrap ? 'nowrap' : undefined,
  }),
  space,
  zIndex,
];

const Title = styled('div')(
  {
    color: colors.lightBlue,
    fontFamily: fonts.ice,
    fontSize: fontSizes.title,
    fontWeight: 200,
    textShadow: `-1px 2px ${colors.darkBlue}, 0 2px ${
      colors.darkBlue
    }, 1px 2px ${colors.darkBlue}, 0 2px ${colors.darkBlue}`,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.title,
    },
    [breakpoints.mobile]: {
      fontSize: mobileSizes.title,
    },
  },
  ...textOptions,
);

const Subtitle = styled('div')(
  {
    color: colors.darkBlue,
    fontFamily: fonts.ice,
    fontSize: fontSizes.subtitle,
    fontWeight: 200,
    textShadow: shadows.text,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.subtitle,
    },
    [breakpoints.mobile]: {
      fontSize: mobileSizes.subtitle,
    },
  },
  ...textOptions,
);

const H1 = styled('h1')(
  {
    color: colors.darkBlue,
    fontFamily: fonts.ice,
    fontSize: fontSizes.h1,
    margin: 0,
    padding: 0,
    textShadow: shadows.text,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.h1,
    },
    [breakpoints.mobile]: {
      fontSize: mobileSizes.h1,
    },
  },
  ...textOptions,
);

const H2 = styled('h2')(
  {
    color: colors.lightBlue,
    fontFamily: fonts.cuprum,
    fontSize: fontSizes.h2,
    margin: 0,
    padding: 0,
    textShadow: shadows.text,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.h2,
    },
    [breakpoints.mobile]: {
      fontSize: mobileSizes.h2,
    },
  },
  ...textOptions,
);

const H3 = styled('h3')(
  {
    color: colors.darkBlue,
    fontFamily: fonts.cuprum,
    fontSize: fontSizes.largeText,
    margin: 0,
    padding: 0,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.largeText,
    },
    [breakpoints.mobile]: {
      fontSize: tabletSizes.largeText,
    },
  },
  ...textOptions,
);

const Text = styled('div')(
  {
    color: colors.darkBlue,
    fontFamily: fonts.cuprum,
    fontSize: fontSizes.text,
    letterSpacing: 1.5,
    [breakpoints.tablet]: {
      fontSize: tabletSizes.text,
    },
    [breakpoints.mobile]: {
      fontSize: mobileSizes.text,
    },
  },
  ...textOptions,
);

const ItalicText = styled(Text)({ fontStyle: 'italic' });

const Anchor = styled('a')(
  {
    alignItems: 'center',
    borderBottom: borders.transparent,
    cursor: 'pointer',
    display: 'inline-flex',
    paddingBottom: spacing.t,
    transition: transitions.default,
  },
  ({ border, color }: { border: string; color: string }) => ({
    ':hover': {
      borderBottom: border,
    },
    ':link': {
      color,
    },
    ':visited': {
      color,
    },
  }),
  ...textOptions,
);

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
