import React from "react";
import s from "./detector.module.css";




import "antd/dist/antd.css";

import { Collapse } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Detector extends React.Component {
  state = {
    expandIconPosition: "right"
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div>
        <Collapse
          defaultActiveKey={["1"]}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>text</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div>text</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>text</div>
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}




export default Detector;