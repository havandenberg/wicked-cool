import styled from 'react-emotion';
import { color, fontSize, space } from 'styled-system';
import {
  breakpoints,
  colors,
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

export const Title = styled('div')({
  color: colors.lightBlue,
  fontFamily: 'Ice, sans-serif',
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

export const Subtitle = styled('div')({
  color: colors.darkBlue,
  fontFamily: 'Ice, sans-serif',
  fontSize: fontSizes.subtitle,
  fontWeight: 200,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.subtitle,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.subtitle,
  },
}, ...textOptions);

export const H1 = styled('div')({
  color: colors.darkBlue,
  fontFamily: 'Cuprum, sans-serif',
  fontSize: fontSizes.h1,
  is: 'h1',
  padding: 0,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.h1,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.h1,
  },
}, ...textOptions);

export const H2 = styled('div')({
  color: colors.lightBlue,
  fontFamily: 'Cuprum, sans-serif',
  fontSize: '',
  is: 'h2',
  padding: 0,
}, ...textOptions);

export const H3 = styled('div')({
  color: 'black',
  fontFamily: 'Cuprum, sans-serif',
  fontSize: '',
  is: 'h3',
  padding: 0,
}, ...textOptions);

export const Text = styled('div')({
  color: colors.darkBlue,
  fontFamily: 'Cuprum, sans-serif',
  fontSize: fontSizes.text,
  letterSpacing: 1.5,
  [breakpoints.tabletOnly]: {
    fontSize: tabletSizes.text,
  },
  [breakpoints.mobileOnly]: {
    fontSize: mobileSizes.text,
  },
}, ...textOptions);

export const ItalicText = styled(Text)({
  fontStyle: 'italic',
});

export default {
  H1,
  H2,
  H3,
  ItalicText,
  Subtitle,
  Text,
  Title,
};
