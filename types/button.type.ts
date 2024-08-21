export type button = {
    title: string;
    style?: string;
    buttonTextStyle?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    img?: string;
    imgStyle?: string;
};
