import { CSSProperties } from 'glamorous';

const getMarginValue = (
  all?: string,
  horizontal?: string,
  vertical?: string,
) => {
  if (all) {
    return all;
  }
  if (horizontal) {
    return `0 ${horizontal}`;
  }
  if (vertical) {
    return `${vertical} 0`;
  }
  return undefined;
};

export const withCenter = ({
  center,
}: {
  center?: boolean;
}): CSSProperties => ({
  textAlign: center ? 'center' : undefined,
});

export const withNoWrap = ({
  noWrap,
}: {
  noWrap?: boolean;
}): CSSProperties => ({
  whiteSpace: noWrap ? 'nowrap' : undefined,
});

export const withSpacing = ({
  all,
  bottom,
  horizontal,
  left,
  right,
  top,
  vertical,
}: {
  all?: string;
  bottom?: string;
  horizontal?: string;
  left?: string;
  right?: string;
  top?: string;
  vertical?: string;
}): CSSProperties => ({
  margin: getMarginValue(all, horizontal, vertical),
  marginBottom: bottom ? bottom : undefined,
  marginLeft: left ? left : undefined,
  marginRight: right ? right : undefined,
  marginTop: top ? top : undefined,
});
