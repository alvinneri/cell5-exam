import React from "react";
import { Modal } from "antd";
import ModalInterface from "./modal.interface";

const ModalComponent = ({
  children,
  handleCancel,
  handleOk,
  open,
  title,
}: ModalInterface) => {
  return (
    <>
      <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
