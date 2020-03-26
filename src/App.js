import React from "react";
import "./App.css";
import { Layout } from "antd";

import Header from "./components/header/header";
import AddAndSearch from "./components/sider/addAndSearch";
import Loader from './components/loader/loader'

const { Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
     
      <Layout>
        <Header />
        <Layout>
          <Sider width={250} className="sider">
            <AddAndSearch />
            

          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
      ,
    </div>
  );
}

export default App;
