export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    variant ?: string;
}
export interface IButtonStyled {
    variant : string;
}