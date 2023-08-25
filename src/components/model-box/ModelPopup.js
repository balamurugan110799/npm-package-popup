import React from 'react'
import "./model-popup.css"
import { RxCross2 } from "react-icons/rx";
import { MdErrorOutline } from "react-icons/md";
import { RiCloseFill, RiCheckLine } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { VscWarning,VscInfo } from "react-icons/vsc";



export default function ModelPopup(props) {
  const { state, title, children, size, status } = props
  const className = [
    { status: "info", background: "#dd3b2c", color: "", hover: "" },
    { status: "warning", background: "", color: "", hover: "" },
    { status: "error", background: "", color: "", hover: "" },
    { status: "success", background: "", color: "", hover: "" },
    { status: undefined, background: "", color: "", hover: "" },
  ]
  console.log(status)
  console.log(state)
  return (
    <div>
      {state ?
        <div className='model-popup'>
          {className?.map(v => v.status === status ?
            <div className={` ${size == "sm" ? "model-box-sm" : null} ${size == "md" ? "model-box-md" : null} ${size == "lg" ? "model-box-lg" : null} ${size == "lge" ? "model-box-lge" : null}  model-box`}>
              <div className={` model-box-header  ${v.status === "error" ? "error" : null}  ${v.status === "success" ? "success" : null} ${v.status === "warning" ? "warn" : null} ${v.status === "info" ? "info" : null} ${v.status === undefined ? "model-header" : null} `}>
              {status === "info" ? <div className=' icons-view'>
                  <VscInfo className=' view-icon' />
                </div> : null}
              {status === "warning" ? <div className=' icons-view'>
                  <VscWarning className=' view-icon' />
                </div> : null}
                {status === "error" ? <div className=' icons-view'>
                  <MdErrorOutline className=' view-icon' />
                </div> : null}

                {status === "success" ? <div className=' icons-view'>
                  <BiCheckCircle className=' success-icon' />
                </div> : null}
                <div className='header-text'>
                {title} 
                </div>
                <div className=' cross-icon' onClick={props.close}>
                  <RxCross2 className={`cross ${v.status === "error" ? "error-cross error-cross-hover" : ""}  ${v.status === "success" ? "success-cross success-cross-hover" : ""} ${v.status === "warning" ? "warn-cross warn-cross-hover" : ""}  ${v.status === "info" ? "info-cross info-cross-hover" : ""} ${v.status === undefined ? "model-cross  model-cross-hover " :""} cross`}  />
                </div>
              </div>
              <div className='model-box-body'>
                {children}
              </div>
            </div> : null)}
        </div> : null}
    </div>
  )
}
