import * as React from 'react';
import styled from 'react-emotion';
import Gallery from 'react-grid-gallery';
import { height, space, width } from 'styled-system';
import l from '../styles/layout';
import { borders, spacing } from '../styles/theme';

export const GalleryWrapper = styled('div')({
  borderRadius: borders.borderRadius,
  bottom: 0,
  left: 0,
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  right: 0,
  top: 0,
  width: '100%',
});

export const Image = styled('img')(
  {
    borderRadius: borders.borderRadius,
  },
  height,
  width,
);

export const ImageWrapper = styled('div')(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  space,
);

export interface Image {
  caption: string;
  src: string;
  thumbnail: string;
  thumbnailHeight: number | string;
  thumbnailWidth: number | string;
}

interface Props {
  customStyles?: {
    [key: string]: number | string | Array<number | string>;
  };
  image: Image;
}

const GalleryImage = ({ customStyles, image }: Props) => (
  <ImageWrapper style={customStyles}>
    <GalleryWrapper>
      <Gallery
        backdropClosesModal
        enableImageSelection={false}
        images={[image]}
        rowHeight={1000}
        showImageCount={false}
      />
    </GalleryWrapper>
    <Image
      height={
        customStyles && customStyles.thumbnailHeight
          ? customStyles.thumbnailHeight
          : image.thumbnailHeight
      }
      src={image.src}
      width={
        customStyles && customStyles.thumbnailWidth
          ? customStyles.thumbnailWidth
          : image.thumbnailWidth
      }
    />
    <l.Space display="inline-block" mb={[spacing.ml, 0]} mt={spacing.m}>
      <l.Caption>{image.caption}</l.Caption>
    </l.Space>
  </ImageWrapper>
);

export default GalleryImage;
