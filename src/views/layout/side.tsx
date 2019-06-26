import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
// const { SubMenu } = Menu;

// const MySide: React.FC = () => {
//   return (
//     <Sider>我就是侧边栏</Sider>
//   );
// }

class MySide extends React.Component {
  state = {
    collapsed: false
  }
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed })
  }

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>    
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>                
        </Menu>
      </Sider>
    )
  }
} 

export default MySide;