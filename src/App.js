import React from "react";
import "./App.css";
import { Layout } from "antd";

import Header from "./components/header/header";
import AddAndSearch from "./components/sider/addAndSearch";
import SearchByServer from "./components/content/searchByServer";
import Detector from './components/content/list';


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
          <Layout >
            <Content
              style={{
                width: 100 + '%',
                margin: 0,
                minHeight: 280
              }}
            >
              <SearchByServer />
              <Detector />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      
    </div>
  );
}

export default App;
