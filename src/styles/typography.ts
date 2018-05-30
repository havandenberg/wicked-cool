import glamorous from 'glamorous';
import { withCenter, withNoWrap, withSpacing } from './helpers';
import { breakpoints, colors, mobileSizes, sizes, spacing } from './theme';

interface TextProps {
  inline?: boolean;
  noWrap?: boolean;
  scale?: string;
  all?: string;
  bottom?: string;
  horizontal?: string;
  left?: string;
  right?: string;
  top?: string;
  vertical?: string;
  center?: boolean;
}

export const Title = glamorous.div<TextProps>(
  {
    color: colors.lightBlue,
    fontFamily: 'Ice, sans-serif',
    fontSize: sizes.title,
    fontWeight: 200,
    textShadow: `-1px 0 ${colors.darkBlue}, 0 1px ${colors.darkBlue}, 1px 0 ${
      colors.darkBlue
    }, 0 -1px ${colors.darkBlue}`,
    [breakpoints.mobileOnly]: {
      fontSize: mobileSizes.title,
    },
  },
  withCenter,
  withSpacing,
);

export const Subtitle = glamorous.div<TextProps>(
  {
    color: colors.darkBlue,
    fontFamily: 'Ice, sans-serif',
    fontSize: sizes.subtitle,
    fontWeight: 200,
    [breakpoints.mobileOnly]: {
      fontSize: mobileSizes.subtitle,
    },
  },
  withCenter,
  withSpacing,
);

export const H1 = glamorous.h1<TextProps>(
  {
    color: colors.lightBlue,
    fontFamily: 'Cuprum, sans-serif',
    fontSize: sizes.h1,
    padding: 0,
    [breakpoints.mobileOnly]: {
      fontSize: mobileSizes.h1,
    },
  },
  withCenter,
  withSpacing,
);

export const H2 = glamorous.h2<TextProps>(
  {
    color: 'black',
    fontFamily: 'Cuprum, sans-serif',
    fontSize: '',
    padding: 0,
  },
  withCenter,
  withSpacing,
);

export const H3 = glamorous.h3<TextProps>(
  {
    color: 'black',
    fontFamily: 'Cuprum, sans-serif',
    fontSize: '',
    padding: 0,
  },
  withCenter,
  withSpacing,
);

export const Label = glamorous.div<TextProps>(
  {
    color: 'black',
    fontFamily: 'Cuprum, sans-serif',
    fontSize: '',
  },
  withCenter,
  withNoWrap,
  withSpacing,
);

export const Text = glamorous.div<TextProps>(
  {
    color: colors.darkBlue,
    fontFamily: 'Cuprum, sans-serif',
    fontSize: sizes.h1,
    [breakpoints.mobileOnly]: {
      fontSize: mobileSizes.h1,
    },
  },
  withCenter,
  withSpacing,
);

export const ItalicsText = glamorous(Text)({
  fontStyle: 'italic',
});

export const Paragraph = glamorous.p<TextProps>(
  {
    color: 'black',
    fontFamily: 'Cuprum, sans-serif',
    fontSize: '',
    margin: `${spacing.s} 0`,
  },
  withCenter,
  withSpacing,
);

export default {
  H1,
  H2,
  H3,
  ItalicsText,
  Label,
  Paragraph,
  Subtitle,
  Text,
  Title,
};
