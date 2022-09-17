import sharp from 'sharp';
import { existsSync } from 'fs';

class ImageFinder {
  static find = (path: string): boolean => {
    return existsSync(path);
  };
}

class ImageResizer {
  static resize = async (
    readPath: string,
    writePath: string,
    width: string,
    height: string
  ): Promise<void> => {
    await sharp(readPath)
      .resize(parseInt(width), parseInt(height))
      .toFile(writePath);
  };
}

class ImageBuilder {
  static build = async (
    readPath: string,
    writePath: string,
    width: string,
    height: string
  ): Promise<boolean> => {
    if (!ImageFinder.find(writePath)) {
      await ImageResizer.resize(readPath, writePath, width, height);
      return true;
    }
    return false;
  };
}

export { ImageFinder, ImageResizer, ImageBuilder };
