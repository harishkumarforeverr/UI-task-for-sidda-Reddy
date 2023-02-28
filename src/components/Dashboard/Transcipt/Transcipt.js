import React from "react";
import "./Transcipt.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Transcipt = () => {
    return (
        <div className="message_container">
            <h4>Transcript</h4>
            <div className="client_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the
                </h5>
            </div>
            <div className="user_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                    Information of call details are showing with the details
                </h5>
            </div>
            <div className="client_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing 
                    Information of call details are showing 
                </h5>
            </div>
            <div className="user_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                </h5>
            </div>
            <div className="client_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details 
                </h5>
            </div>
            <div className="user_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                    Information of call details are showing with the details
                    Information of call details are showing with the details
                </h5>
            </div>
            <div className="client_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with 
                </h5>
            </div>
            <div className="user_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                </h5>
            </div><div className="client_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                </h5>
            </div>
            <div className="user_block">
                <Avatar size={64} icon={<UserOutlined />} />
                <h5>
                    Information of call details are showing with the details
                </h5>
            </div>

        </div>
    );
};

export default Transcipt;