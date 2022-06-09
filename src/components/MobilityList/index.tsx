import React, { useContext, useState } from "react";
import { StoreContext } from "../index";
import "../index.css";
import { MobilityItem } from "./MobilityItem";
import { Button, Modal } from "antd";
import { Data } from "../types";

const MobilityList: React.FC = () => {
  const data = useContext(StoreContext);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Data | null>(null);

  const showModal = (item: Data) => {
    setIsModalVisible(true);
    setSelectedItem(item);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className={"mobility-list"}>
        {data.map((item, index) => (
          <MobilityItem
            key={index}
            item={item}
            showModal={() => showModal(item)}
            layout={"horizontal"}
          />
        ))}
      </div>
      <Modal
        title={"Additional information"}
        visible={isModalVisible}
        onCancel={onCancel}
        width={"50%"}
        footer={[
          <Button type={"primary"} onClick={onCancel}>
            Close
          </Button>,
        ]}
      >
        <MobilityItem item={selectedItem} layout={"vertical"} />
      </Modal>
    </>
  );
};

export { MobilityList };
