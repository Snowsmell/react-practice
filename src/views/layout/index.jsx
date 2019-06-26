import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from '../../routes';
import Menus from '../../routes/config'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MyLayout extends React.Component {
  rootSubmenuKeys = ['order', 'logistics', 'settle']
  state = {
    collapsed: false,
    openKeys: ['order'],
    menus: Menus.menus
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find((key) => this.state.openKeys.indexOf(key) === -1);
    if (this.state.menus.map(item => item.index).indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };  

  
  render() {
    console.log(<Routes/>)
    let menu = this.state.menus.map(item => {
      return (
        <SubMenu key={item.index} title={ 
        <span>
          <Icon type={item.icon}/><span>{item.title}</span>          
        </span> 
        }>
        {
          item.children.map(v => { 
            return (
              <Menu.Item key={v.index}>
                <Link to={v.index}><span>{v.title}</span></Link>
              </Menu.Item>
            ) 
          })
        }
        </SubMenu>
      )
    })
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu 
              theme="dark" 
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}            
              mode="inline">
              {menu}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Routes/>                            
              {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
            </Content>
            <Footer style={{ background: '#fff', textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default MyLayout
