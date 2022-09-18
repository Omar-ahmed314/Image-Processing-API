import {
  ImageBuilder,
  ImageResizer,
  ImageFinder,
} from '../../controllars/imageControllar';
import path from 'path';
import { promises as fs } from 'fs';

describe('Testing Image Controller Module', () => {
  const mainPath = '../../..';
  describe('Testing ImageFinder class', () => {
    it('Image (fjord.jpg) should be found', () => {
      const readPath = path.join(
        __dirname,
        mainPath,
        'images',
        'originalImages',
        'fjord.jpg'
      );
      expect(ImageFinder.find(readPath)).toBeTrue();
    });
    it('Image (abc.jpg) should not be found', () => {
      const readPath = path.join(
        __dirname,
        mainPath,
        'images',
        'originalImages',
        'abc.jpg'
      );
      expect(ImageFinder.find(readPath)).toBeFalse();
    });
  });
  describe('Testing ImageResizer class', () => {
    const readPath = path.join(
      __dirname,
      mainPath,
      'images',
      'originalImages',
      'fjord.jpg'
    );
    const writePath = path.join(
      __dirname,
      mainPath,
      'images',
      'cachedImages',
      'fjord_200_200.jpg'
    );
    it('Image (fjord_200_200.jpg) should be resized', async () => {
      await ImageResizer.resize(readPath, writePath, '200', '200');
      expect(ImageFinder.find(writePath)).toBeTrue();
    });
    afterAll(async () => {
      await fs.unlink(writePath);
    });
  });
  describe('Testing ImageBuilder class', () => {
    const readPath = path.join(
      __dirname,
      mainPath,
      'images',
      'originalImages',
      'fjord.jpg'
    );
    const writePath = path.join(
      __dirname,
      mainPath,
      'images',
      'cachedImages',
      'fjord_200_200.jpg'
    );
    it('Image (fjord_200_200.jpg) should be resized and created', async () => {
      expect(
        await ImageBuilder.build(readPath, writePath, '200', '200')
      ).toBeTrue();
    });
    it('Image (fjord_200_200.jpg) should not be created again', async () => {
      expect(
        await ImageBuilder.build(readPath, writePath, '200', '200')
      ).toBeFalse();
    });
    afterAll(async () => {
      await fs.unlink(writePath);
    });
  });
});
