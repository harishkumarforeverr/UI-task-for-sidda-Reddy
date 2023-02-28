import React from 'react'
import "./Dashboard.scss";
import Header from '../Header/Header';
import { HomeOutlined, FrownOutlined, PlayCircleFilled } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Progress } from 'antd';
import { Rate } from 'antd';
import Parameters from './Parameters/Parameters';
import Transcipt from './Transcipt/Transcipt';

const Dashboard = () => {
    const staementInfo = [
        {
            title: "Data card",
            info: "Bonito Design",
            color:"#2d80b5"
        },
        {
            title: "Number",
            info: "9999999999",
            color:"#2d80b5"
        },
        {
            title: "Name",
            info: "John Doe",
            color:"#2d80b5"
        },
        {
            title: "Details",
            info: "Clark Cart",
            color:"#2d80b5"
        },
        {
            title: "Data card",
            info: "10 min",
            color:"#00C576"
        },
        {
            title: "Data card",
            info: "20%",
            color:"#f6bb7e"
        },
        {
            title: "Accuracy",
            info: "10%",
            color:"#f6baa5"
        },
        {
            title: "Drequency",
            info: "80 DB",
            color:"#f6bb7e"
        },
        {
            title: "Dailes",
            info: "3 TImes",
            color:"#f6bb7e"
        },
        {
            title: "Information",
            info: "95%",
            color:"#00C576"
        },
        {
            title: "Type of Call",
            info: "Normal",
            color:"#2d80b5"
        },
        {
            title: "Pressure",
            info: "10%",
            color:"#f6baa5"
        },
    ]

    return (
        <div>
            <div className='dashboard_conatiner'>
                <Header />
                {/* <img src={require("../../Assets/3.jpeg")}/> */}
                <div className='dashboard_conatiner_data'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="">
                            <HomeOutlined />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            All Calls
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Call Details</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='dashboard_content'>
                        <div className='call_progress'>
                            <h4>Score Card</h4>
                            <Progress type="circle" percent={75} strokeWidth="12" strokeColor="#00C576" />
                        </div>
                        <div className='call_statement'>
                            <div className='call_statement_data'>
                                <div className='info_data'>
                                    <h4>Overall Statement</h4>
                                    <FrownOutlined />
                                </div>
                                <div className='info_data'>
                                    <h4>Rating</h4>
                                    <Rate />
                                </div>
                            </div>
                            <div className='call_statement_content'>
                                {staementInfo.map((item) => {
                                    return (
                                        <div>
                                            <h6>{item.title}</h6>
                                            <h1 style={{color : item.color}}>{item.info}</h1>
                                        </div>
                                    )

                                })}
                            </div>
                            {/* <h4>hxgfxfvbj</h4> */}
                        </div>
                    </div>

                    <div className='play_item'>
                        {/* <audio src="example.mp3" controls></audio> */}
                        <PlayCircleFilled />
                        <h6>00 : 00</h6>
                    </div>

                    <div className='trans_details'>
                        <Transcipt />
                        <Parameters />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
