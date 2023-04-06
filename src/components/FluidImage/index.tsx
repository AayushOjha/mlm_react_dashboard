type Props = {
  imageUrl: string;
  altText?: string;
};

function FluidImage({ imageUrl, altText }: Props) {
  return (
    <img className="fluid-image" src={imageUrl} alt={altText || "image"} />
  );
}

export { FluidImage };
