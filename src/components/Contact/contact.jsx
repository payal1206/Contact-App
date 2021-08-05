import React, { useState } from "react";
import { Paper, rgbToHex, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Gradient } from "@material-ui/icons";

function Contact({ contact, index, toggleContact }) {
  const [elevate, setElevate] = useState(0);
  return (
    <>
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
                  style={{
                    fontSize: "40px",
                  }}
                />
                <div className="try"> </div>
              </Grid>
            </Grid>
          </div>
          <div className="contact-answer">
            <b>Phone-</b> {contact.phone}
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Contact;
