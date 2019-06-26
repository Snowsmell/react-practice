import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

// const MyHeader: React.FC = props => {
//   return (
//     <Header className="myheader" {...props} >华瑞物联企业后台</Header>
//   )
// }

function MyHeader(props:any) {
  return (
    <Header className="myheader" {...props} >华瑞物联企业后台</Header>
  )  
}

export default MyHeader;