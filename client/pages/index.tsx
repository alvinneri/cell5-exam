import styles from "../styles/Home.module.css";
import { Input } from "antd";
import { useQuery } from "@tanstack/react-query";
import dogService from "../services/dog";
import ImageComponent from "../components/Image/image";
import ButtonComponent from "../components/Buttons/button";
import useAddDog from "../hooks/useAddDog";
import ModalComponent from "../components/Modal/modal";
import { useState } from "react";
import { message } from "antd";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const {
    data: dog,
    refetch,
    isFetching,
  } = useQuery(["get-dog"], dogService.getDog);

  const handleNext = () => {
    refetch();
  };

  const addDog = useAddDog();

  const onUpdate = async () => {
    if (!name) {
      message.error("Input a name");
      return;
    }
    addDog.mutate({ name: name, photo: dog?.data.data.message });
    setName("");
    handleCloseModal();
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.navigation}>
          <ButtonComponent
            data-testid="adddogs"
            onClick={handleOpenModal}
            label="ADD TO MY DOGS"
            styles={{
              marginBottom: "1em",
              backgroundColor: "#663399",
              color: "white",
            }}
          />
          <ButtonComponent
            data-testid="next"
            label="NEXT"
            styles={{
              marginBottom: "1em",
              backgroundColor: "#663399",
              color: "white",
            }}
            onClick={handleNext}
            disabled={isFetching}
          />
        </div>
        <ImageComponent
          data-testid="dog-image"
          imageSrc={dog?.data.data.message}
          label="This is a sample image."
          styles={{ width: "500px", height: "500px", borderRadius: "1em" }}
        />
      </div>
      <ModalComponent
        title="Add Dog"
        open={openModal}
        handleCancel={handleCloseModal}
        handleOk={onUpdate}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Give the dog a name."
          size={"large"}
          style={{
            width: "100%",
            borderRadius: "50px",
          }}
        />
      </ModalComponent>
    </div>
  );
}
