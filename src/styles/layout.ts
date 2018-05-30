import glamorous from 'glamorous';
import { withSpacing } from './helpers';
import { maxWidth, spacing } from './theme';

const Column = glamorous.div(({ flex = 1 }: { flex?: string | number }) => ({
  flex,
}));

interface RowProps {
  alignBottom?: boolean;
  alignTop?: boolean;
  inline?: boolean;
  itemClassName?: string;
  margins?: string;
  spaceBetween?: boolean;
  all?: string;
  bottom?: string;
  horizontal?: string;
  left?: string;
  right?: string;
  top?: string;
  vertical?: string;
  isWrap?: boolean;
}

const Row = glamorous.div<RowProps>(
  {
    alignItems: 'center',
  },
  withSpacing,
  ({
    alignBottom,
    alignTop,
    inline,
    itemClassName = '',
    margins = 0,
    spaceBetween,
    isWrap,
  }: {
    alignBottom?: boolean;
    alignTop?: boolean;
    inline?: boolean;
    itemClassName?: string;
    margins?: string;
    spaceBetween?: boolean;
    isWrap?: boolean;
  }) => {
    const marginKey = `& .${itemClassName} + .${itemClassName}`;
    return {
      alignItems: alignTop ? 'flex-start' : alignBottom ? 'flex-end' : 'center',
      display: inline ? 'inline-flex' : 'flex',
      flexWrap: isWrap ? 'wrap' : undefined,
      justifyContent: spaceBetween ? 'space-between' : undefined,
      [marginKey]: {
        marginLeft: margins !== 0 ? margins : undefined,
      },
    };
  },
);

const CenteredRow = glamorous(Row)({
  justifyContent: 'center',
});

const Header = glamorous(CenteredRow)({
  justifyContent: 'space-between',
  padding: spacing.xxl,
});

const PageContent = glamorous.div({
  margin: '0 auto',
  maxWidth,
  padding: spacing.xxl,
});

const Spacing = glamorous.div(withSpacing);

export default {
  CenteredRow,
  Column,
  Header,
  PageContent,
  Row,
  Spacing,
};
