import React from 'react'
import { Progress } from 'antd';
import "./Parameters.scss";

const Parameters = () => {

    const parametersInfo = [
        {
            title:"Introduction",
            percent:"65",
            color:"green"
        },
        {
            title:"creative Increment statement/ opening Statement",
            percent:"60",
            color:"yellow"
        },
        {
            title:"packing / production",
            percent:"50",
            color:"#f6bb7e"
        },
        {
            title:"Introduction",
            percent:"30",
            color:"red"
        },
    ]
  return (
    <div>
        <div className='parametersInfo'>
        <h4>Parameters</h4>
            {parametersInfo.map((item) => (
                <div className='parameter'>
                    <h4>{item.title}</h4>
                    <Progress percent={item.percent} strokeColor={item.color}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Parameters
