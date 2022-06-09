import React from "react";
import { Descriptions } from "antd";
import Icon from "@ant-design/icons";
import { Data } from "../types";
import "../index.css";
import { boltSVG, freenowSVG } from "./svg";

interface Props {
  item: Data | null;
  showModal?: () => void;
  layout: "vertical" | "horizontal";
}

const MobilityItem: React.FC<Props> = ({ item, showModal, layout }) => {
  const setTitle = (item: Data) => {
    return (
      <div className={"item-name"}>
        {item.supplier.supplierName}
        <Icon
          component={
            item.supplier.supplierKey === "bolt" ? boltSVG : freenowSVG
          }
        />
      </div>
    );
  };

  return (
    item && (
      <div
        onClick={showModal}
        className={"list-item"}
        key={item.availabilityId}
      >
        <Descriptions
          title={setTitle(item)}
          size={"small"}
          layout={layout}
          colon={false}
        >
          <Descriptions.Item
            label="Category"
            labelStyle={{ fontWeight: "bold" }}
          >
            <div>
              Product type: {item.category.productType}
              <br />
              Vehicle type: {item.category.vehicleType}
              <br />
              Sub category: {item.category.subCategory}
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="ETA" labelStyle={{ fontWeight: "bold" }}>
            {item.eta}
          </Descriptions.Item>
          <Descriptions.Item label="Price" labelStyle={{ fontWeight: "bold" }}>
            {item.price.currency} {item.price.amount}
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  );
};

export { MobilityItem };
