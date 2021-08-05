import React, { useState } from "react";
import { Paper, rgbToHex } from "@material-ui/core";
import Contact from "./contact";
// import "./index.css";
import { Modal } from "antd";
import Button from "@material-ui/core/Button";
export default function Contacts(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [contactarray, setcontactarray] = useState([
    {
      name: "Payal maheswari",
      phone: "8000921345",
      open: false,
    },
    {
      name: "Payal Jain",
      phone: "8000921345",
      open: false,
    },
    {
      name: "Payal maheswari",
      phone: "8000921345",
      open: false,
    },
  ]);
  const toggleContact = (index) => {
    setcontactarray(
      contactarray.map((contact, i) => {
        if (i === index) {
          contact.open = !contact.open;
        } else {
          contact.open = false;
        }

        return contact;
      })
    );
  };
  return (
    <>
      <div className="background">
        <div className="contactarray">
          <Modal
            title="Basic Modal"
            visible={true}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          {contactarray.map((contact, i) => (
            <Contact
              contact={contact}
              index={i}
              toggleContact={toggleContact}
            />
          ))}
          <Button type="primary" onClick={showModal}>
            ADD CONTACT
          </Button>
        </div>
      </div>
    </>
  );
}
