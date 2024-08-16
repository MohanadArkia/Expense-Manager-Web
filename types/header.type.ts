export type HeaderProps = {
  title: string;
  img?: string;
  style?: React.CSSProperties | string;
  headerTitleStyle?: React.CSSProperties | string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
