import styled from 'react-emotion';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import { breakpoints } from './theme';

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

const Row = styled('div')<RowProps | SpaceProps | WidthProps>(
  {
    alignItems: 'center',
  },
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
  }: {
    alignBottom?: boolean;
    alignTop?: boolean;
    columnOnMobile?: boolean,
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
        marginLeft: margins !== '0' ? margins : undefined,
      },
      [breakpoints.mobileOnly]: columnOnMobile
        ? { flexDirection: 'column', }
        : {},
    };
  },
);

const Center = styled('div')(
  {
    margin: '0 auto',
  },
  space
);

 const CenteredRow = styled(Row)({
  justifyContent: 'center',
});

 const Space = styled('div')(space);

 export default {
  Center,
  CenteredRow,
  Row,
  Space,
};