import React, { useState } from "react";
import { Paper, rgbToHex, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Edit, Gradient } from "@material-ui/icons";
import EditContact from "./editcontact";
import { Modal } from "antd";
// import Fab from "@material-ui/core/Fab";

function Contact({ contact, index, toggleContact }) {
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

  const [elevate, setElevate] = useState(0);
  return (
    <>
      <Modal
        title="EDIT CONTACt"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditContact />
      </Modal>

      <Paper
        elevation={elevate}
        onMouseEnter={() => setElevate(20)}
        onMouseLeave={() => setElevate(0)}
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "0.2px solid #6A1B9A",
        }}
      >
        <div
          className={"contact " + (contact.open ? "open" : "")}
          key={index}
          onClick={() => toggleContact(index)}
        >
          <div className="contact-question">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid xs={10}>
                {" "}
                <b>Name -</b>
                {contact.name}
              </Grid>
              <Grid xs={2}>
                <DeleteIcon
                  style={{
                    fontSize: "40px",
                  }}
                />
                <EditIcon
                  onClick={showModal}
                  style={{
                    fontSize: "40px",
                  }}
                />
                <div className="try"> </div>
              </Grid>
            </Grid>
          </div>
          <div className="contact-answer">
            <b>Phone Number-</b> {contact.phone}
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Contact;
