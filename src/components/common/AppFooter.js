import React from "react";
import { Layout } from 'antd'

const { Footer } = Layout
function AppFooter() {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        Creatr © 2018 Daniel Whiteside
      </Footer>
    </div>
  );
}

export default AppFooter;
