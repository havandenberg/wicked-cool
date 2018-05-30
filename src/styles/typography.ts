import glamorous from 'glamorous';
import { withSpacing } from './helpers';
import { colors, sizes, spacing } from './theme';

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
}

export const Title = glamorous.div<TextProps>(
  {
    color: colors.darkBlue,
    fontFamily: 'Kaushan, sans-serif',
    fontSize: sizes.title,
    fontWeight: 200,
  },
  withSpacing,
);

export const H1 = glamorous.h1<TextProps>(
  {
    color: colors.white,
    fontFamily: 'Kaushan, sans-serif',
    fontSize: sizes.h1,
    padding: 0,
  },
  withSpacing,
);

export const H2 = glamorous.h2<TextProps>(
  {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: '',
    padding: 0,
  },
  withSpacing,
);

export const H3 = glamorous.h3<TextProps>(
  {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: '',
    padding: 0,
  },
  withSpacing,
);

export const Label = glamorous.div<TextProps>(
  {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: '',
  },
  withSpacing,
  ({ noWrap }: { noWrap?: boolean }) => ({
    whiteSpace: noWrap ? 'nowrap' : undefined,
  }),
);

export const Text = glamorous.div<TextProps>(
  {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: '',
  },
  withSpacing,
);

export const ItalicsText = glamorous(Text)({
  fontStyle: 'italic',
});

export const Paragraph = glamorous.p<TextProps>({
  color: 'black',
  fontFamily: 'sans-serif',
  fontSize: '',
  margin: `${spacing.s} 0`,
});

export default {
  H1,
  H2,
  H3,
  ItalicsText,
  Label,
  Paragraph,
  Text,
  Title,
};
