interface ModalInterface {
  open: boolean;
  handleCancel: any;
  handleOk: any;
  children: React.ReactNode;
  title: string;
}

export default ModalInterface;
