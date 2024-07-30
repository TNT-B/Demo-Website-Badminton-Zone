import { Button, Checkbox, Form, Input, message } from "antd";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ResetPassword = () => {
  const onFinish = async (values) => {
    const { email } = values;
    try {
      await sendPasswordResetEmail(auth, email);
      message.success("Password reset email sent. Check your inbox!");
    } catch (error) {
      message.error(error.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex  flex-col justify-center items-center">
      <Form
        name="basic"
        className="shadow-xl px-12 bg-slate-200 pt-10"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{
          maxWidth: 1200,
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          columnGap: 2,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className="flex justify-center text-4xl font-semibold pb-6 uppercase">
          reset password
        </p>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" className="bg-sky-400" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default ResetPassword;
