import { Form, Input, Button, Checkbox } from "antd";

export default function Demo() {
  const onFinish = (values) => {
    console.log("Success:", values);
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
        name="username"
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
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
