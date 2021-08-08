import React, { useState } from "react";
import { Paper, rgbToHex } from "@material-ui/core";
import Contact from "./contact";
import "./index.css";
import { Modal } from "antd";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddContact from "./addcontact";
import { connect } from "react-redux";
import { deletecontact } from "../redux-store/actions/actions";

import Button from "@material-ui/core/Button";
function Contacts(props) {
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

  const [contactarray, setcontactarray] = useState(props.contacts);
  const toggleContact = (index) => {
    setcontactarray(
      props.contacts.map((contact, i) => {
        if (i === index) {
          contact.open = !contact.open;
        } else {
          contact.open = false;
        }

        return contact;
      })
    );
  };
  console.log("contactarray", contactarray);
  console.table(props.contacts);
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
          {props.contacts.map((contact, i) => (
            <Contact
              contact={contact}
              index={i}
              toggleContact={toggleContact}
              handleDelete={() => props.handleDelete(contact.id)}
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

const mapStateToProps = (state) => {
  return {
    contacts: state, // connecting our state to our contacts , our state is contacts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => dispatch(deletecontact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
