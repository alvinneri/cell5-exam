import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import dogService from "../../services/dog";
import { Input, message, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import ImageComponent from "../../components/Image/image";
import useDeleteDog from "../../hooks/useDeleteDog";
import ModalComponent from "../../components/Modal/modal";
import useUpdateDog from "../../hooks/useUpdateDog";
import useDebounce from "../../hooks/useDebounce";

const Dogs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [selectedDog, setSelectedDog] = useState<DataType>();
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data: dogs, refetch } = useQuery(
    ["get-dogs", keyword],
    dogService.getDogs
  );
  const debounceValue = useDebounce(search, 700);

  useEffect(() => {
    setKeyword(search);
  }, [debounceValue]);

  const dogDelete = useDeleteDog(keyword);
  const dogUpdate = useUpdateDog(keyword);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleDelete = async (id: string) => {
    dogDelete.mutate(id);
  };

  const handleUpdate = async () => {
    if (!name) {
      message.error("Input a name");
      return;
    }
    const payload = {
      body: {
        name,
        photo: selectedDog?.photo,
      },
      id: selectedDog?._id,
    };
    dogUpdate.mutate(payload);
    setName("");
    handleCloseModal();
  };

  interface DataType {
    _id: string;
    key: string;
    name: string;
    photo: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (text: string) => (
        <ImageComponent
          imageSrc={text}
          label="This is a sample image."
          styles={{ width: "100px", height: "100px", borderRadius: "1em" }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setName(record.name);
              handleOpenModal();
              setSelectedDog(record);
            }}
          >
            Update
          </a>
          <a onClick={() => handleDelete(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "2em" }}>
      <ModalComponent
        title="Update Dog"
        open={openModal}
        handleCancel={handleCloseModal}
        handleOk={handleUpdate}
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
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
        size={"large"}
        style={{
          width: "100%",
          borderRadius: "50px",
          marginBottom: "1em",
        }}
      />
      <Table columns={columns} dataSource={dogs?.data?.data || []} />
    </div>
  );
};

export default Dogs;
