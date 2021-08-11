import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { editcontact } from "../redux-store/actions/actions.js";

function EditContact(props) {
  const onFinish = (values) => {
    const getValuesAsArray = Object.entries(values); // [[username,"Payal"],[contact,34454657687]]
    const valuesToEdit = getValuesAsArray.reduce(
      (acc, cur) =>
        cur[1] === undefined || cur[1] === ""
          ? acc
          : Object.assign(acc, { [cur[0]]: cur[1] }), //{username:"payal"}
      {}
    );
    // check if object is empty before dispatching  the actions else it will override that we have in our redux store (empty data)...
    //we dont want empty ...
    if (Object.keys(valuesToEdit).length !== 0) {
      props.editcontact({ ...valuesToEdit, id: props.contactId });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Name" name="username">
        <Input placeholder={props.namePlaceholder} />
      </Form.Item>
      <Form.Item label="Contact Number" name="contact">
        <Input placeholder={props.contactPlaceholder} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 30,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editcontact: (data) => dispatch(editcontact(data)),
  };
};

export default connect(null, mapDispatchToProps)(EditContact);
