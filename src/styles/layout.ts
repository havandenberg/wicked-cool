import styled from 'react-emotion';
import {
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system';
import { Breakpoint } from '../types/styles';
import { breakpoints, colors } from './theme';

interface RowProps {
  alignBottom?: boolean;
  alignTop?: boolean;
  columnOnMobile?: boolean;
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

const Row = styled('div')<HeightProps & RowProps & SpaceProps & WidthProps>(
  {
    alignItems: 'center',
  },
  height,
  space,
  width,
  ({
    alignBottom,
    alignTop,
    columnOnMobile,
    inline,
    itemClassName = '',
    margins = '0',
    spaceBetween,
    isWrap,
  }: RowProps) => {
    const marginKey = `& .${itemClassName} + .${itemClassName}`;
    return {
      alignItems: alignTop ? 'flex-start' : alignBottom ? 'flex-end' : 'center',
      display: inline ? 'inline-flex' : 'flex',
      flexWrap: isWrap ? 'wrap' : undefined,
      justifyContent: spaceBetween ? 'space-between' : undefined,
      [marginKey]: {
        marginLeft: margins !== '0' ? margins : undefined,
      },
      [breakpoints.mobile]: columnOnMobile ? { flexDirection: 'column' } : {},
    };
  },
);

const Break = styled('br')(
  {
    display: 'none',
    flexBasis: '100%',
    height: '0',
    overflow: 'hidden',
    width: '0',
  },
  ({ breakpoint = 'all' }: { breakpoint?: Breakpoint }) =>
    breakpoint === 'all'
      ? {
          display: 'block',
        }
      : {
          [breakpoints[breakpoint]]: {
            display: 'block',
          },
        },
  height,
  width,
);

const Caption = styled('div')({
  color: colors.darkBlue,
  fontSize: '1rem',
});

const Center = styled('div')(
  {
    margin: '0 auto',
  },
  space,
);

const CenteredRow = styled(Row)({
  justifyContent: 'center',
});

const Space = styled('div')(space);

export default {
  Break,
  Caption,
  Center,
  CenteredRow,
  Row,
  Space,
};
