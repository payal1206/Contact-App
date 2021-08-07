import React, { useState } from "react";
import { Paper, rgbToHex } from "@material-ui/core";
import Contact from "./contact";
import "./index.css";
import { Modal } from "antd";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddContact from "./addcontact";

import Button from "@material-ui/core/Button";
export default function Contacts() {
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
            title="ADD CONTACT"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddContact />
          </Modal>
          {contactarray.map((contact, i) => (
            <Contact
              contact={contact}
              index={i}
              toggleContact={toggleContact}
            />
          ))}
          <Fab onClick={showModal} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </div>
    </>
  );
}
