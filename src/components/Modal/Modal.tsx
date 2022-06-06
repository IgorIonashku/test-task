import { Button, Tooltip , Modal} from "antd"
import { FC, useState } from "react"
import  React from "react";

interface ModalProps {
    children: JSX.Element[] | JSX.Element,
    icon:JSX.Element
  }

export const CustomModal:FC<ModalProps> = ({icon, children}) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <>
        <Tooltip title="Show Graph">
        <Button 
            onClick={showModal}  
            type="text" 
            shape="circle" 
            size="large" 
            icon={icon} />
        </Tooltip>
        <Modal 
        title="Pizza Graph" 
        visible={isModalVisible} 
        footer={[
            <Button key="back" onClick={handleCancel}>
            Close
          </Button>
        ]}
        onCancel={handleCancel}>
            {children}
        </Modal>
        </>
    )
} 