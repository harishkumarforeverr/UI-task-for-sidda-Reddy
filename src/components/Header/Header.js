import React from 'react'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./Header.scss";

const Header = () => {
  return (
    <div>
        <div className='header_container'>
            <img src={require("../../Assets/logo.png")} alt="logo"/>
            <Avatar size="large" icon={<UserOutlined />} />
        </div>
    </div>
  )
}

export default Header
