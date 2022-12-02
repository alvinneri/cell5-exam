interface ButtonInterface {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: object;
  href?: string;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  disabled?: boolean;
  type?: any;
}

export default ButtonInterface;
