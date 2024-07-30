import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Button, Checkbox, Form, Input, message } from "antd";
import LOCAL_STORAGE from "../../Constant/localStorage";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);
  const onFinish = (values) => {
    const { email, password, confirmPassword } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem(
          LOCAL_STORAGE.ACCESS_TOKEN,
          userCredential.user.accessToken
        );
        console.log(userCredential, "User credential");
      })
      .finally(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        const errorShow = error.message.split(":");
        message.error(errorShow[1]);
      });
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
          span: 8,
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
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Error!!!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
export default Register;
