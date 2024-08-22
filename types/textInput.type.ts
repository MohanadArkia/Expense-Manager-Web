export type textInput = {
  img?: string;
  imgStyle?: string;
  style?: string;
  readOnly?: boolean;
  type?: string;
  placeHolder?: string;
  secondImg?: string;
  secondImgStyle?: string;
  secondImgClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
