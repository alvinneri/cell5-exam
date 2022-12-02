interface ImageInterface {
  imageSrc: string;
  label: string;
  styles: {
    height: string;
    width: string;
    borderRadius?: string;
  };
  preview?: boolean;
}

export default ImageInterface;
