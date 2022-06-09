import React, { useState } from "react";
import { Layout, Switch } from "antd";
import { BulbFilled, StarFilled } from "@ant-design/icons";
import "../index.css";
import { MobilityList } from "../MobilityList";

const { Header, Content } = Layout;

const MainLayout: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Layout>
      <Header style={checked ? { backgroundColor: "white" } : {}}>
        <div>
          <span
            className={"header-title"}
            style={checked ? { color: "black" } : { color: "white" }}
          >
            Mobility Products
          </span>
          <Switch
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<StarFilled />}
            defaultChecked
            checked={checked}
            onChange={(checked) => setChecked(checked)}
          />
        </div>
      </Header>
      <Content>
        <MobilityList />
      </Content>
    </Layout>
  );
};

export { MainLayout };
