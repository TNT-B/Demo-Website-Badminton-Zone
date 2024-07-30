import "./style.css";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Checkbox, Form, Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom';

import LOCAL_STORAGE from "../../Constant/localStorage";
import ResetPassword from "../ResetPassword";
import Register from "../Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [password, setPassword] = useState("");
  //const history = useHistory();


  const onFinish = (values) => {
    const { email, password, confirmPassword } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem(
          LOCAL_STORAGE.ACCESS_TOKEN,
          userCredential.user.accessToken
        );
        console.log(userCredential, "User credential");
      })
      .finally(() => window.location.href = "/")
      .catch((error) => {
        const errorShow = error.message.split(":");
        message.error(errorShow[1]);
      });
  };

  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        await localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
        const user = result.user;
        const userStringtify = JSON.stringify(user);
        console.log(user, "user")

        await localStorage.setItem(LOCAL_STORAGE.PROFILE_GOOGLE, userStringtify);
        //history.push('/');
        window.location.href = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        message.error(errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log(isSuccess);
  }, [isSuccess]);

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
        <p className="flex justify-center text-4xl font-semibold pb-6">Login</p>
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

        <div className="flex justify-between ml-[95px]">
          <div>
            <MailOutlined
              style={{
                cursor: "pointer",
                // paddingBottom: "10px",
                fontSize: "20px",
              }}
              onClick={handleLoginGoogle}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => (window.location.href = "/reset-password")}
          >
            Forgot Password?
          </div>
        </div>

        <div className="flex justify-between ml-[95px]">
          <div>
            <i
              class="fa-regular fa-registered"
              style={{
                cursor: "pointer",
                // paddingBottom: "10px",
                fontSize: "20px",
              }} />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => (window.location.href = "/Register")}
          >
            Register
          </div>
        </div>

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
export default Login;