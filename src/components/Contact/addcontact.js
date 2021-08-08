import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { Addcontact } from "../redux-store/actions/actions";

function AddContact(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
    props.addcontact({ ...values, id: Date.now() }); //{name:"Payal", phone : 76347867869428, id: 546655667768}
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
      <Form.Item
        label="Name"
        name="username"
        rules={[
          {
            required: true,
            message: "Please Enter  Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contact Number"
        name="contact"
        rules={[
          {
            required: true,
            message: "Please Enter Contact Number !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 30,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
const mapDispachToProps = (dispatch) => {
  return {
    addcontact: (data) => dispatch(Addcontact(data)), //left to right
  };
};

export default connect(null, mapDispachToProps)(AddContact);
