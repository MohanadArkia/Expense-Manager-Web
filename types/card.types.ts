export type CardProps = {
    img: string;
    title: string;
    price?: number | null;
    style?: string;
    textStyle?: string;
    imgStyle?: string;
    titleStyle?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

// React.CSSProperties;
