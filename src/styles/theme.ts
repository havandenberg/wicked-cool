export const colors = {
  background: '#F9FDFF',
  darkBlue: '#0D3674',
  lightBlue: '#168ACF',
  white: '#FFFFFF',
};

export const borders = {
  darkBlue: `solid 1px ${colors.darkBlue}`,
  white: `solid 1px ${colors.white}`,
};

export const breakpoints = {
  desktop: '@media (min-width: 1000px)',
  mobileOnly: '@media (max-width: 699px)',
  tabletOnly: '@media (min-width: 700px) and (max-width: 999px)',
  tabletUp: '@media (min-width: 700px)',
};

export const fontSizes = {
  h1: '24px',
  largeText: '20px',
  subtitle: '48px',
  text: '16px',
  title: '64px',
};

export const tabletSizes = {
  ...fontSizes,
};

export const mobileSizes = {
  h1: '16px',
  largeText: '16px',
  subtitle: '32px',
  text: '12px',
  title: '40px',
};

export const spacing = {
  huge: '128px',
  l: '24px',
  m: '16px',
  ml: '20px',
  s: '8px',
  sm: '12px',
  t: '4px',
  xl: '32px',
  xxl: '40px',
  xxxl: '48px',
  xxxxl: '64px',
  xxxxxl: '76px',
};

export const transitions = {
  default: 'all 0.3s ease',
};

export const maxWidth = '1400px';
