import { Button, Select, Modal, Form, Input, InputNumber } from "antd";
import React, { useState, useEffect, Fragment } from "react";

import { ref, child, get, push, set, getDatabase } from "firebase/database";
import { database } from '../firebase';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: "${label} Lỗi! Vui lòng nhập lại",
};
const stateVitri = {
    name: "",
    address: "",
    feature: "",
    open_time: "",
    close_time: "",
    price: "",
    time: "",
};
const stateModal = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
};

function SuaViTri(props) {
    const [loading, setLoading] = useState(props.loading);
    const [inputs, setInputs] = useState(stateVitri);
    const [Modals, setModals] = useState(stateModal);

    const { id, name, address, feature, open_time, close_time, price, time } = inputs;
    const { ModalText, visible, confirmLoading } = Modals;

    const [form] = Form.useForm();

    const [data, setData] = useState();
    const firebaseRef = ref(database, 'data');
    const dbRef = ref(getDatabase());

    useEffect(() => {
        get(child(dbRef, `data`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    // console.log(snapshot.val(),)
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [visible]);

    useEffect(() => {
        setInputs({
            ...inputs,
            id: props.id,
            name: props.TenSan,
            address: props.DiaChi,
            feature: props.MoTa,
            open_time: props.OpenTime,
            close_time: props.CloseTime,
            price: props.Price,
            time: props.Time
        });
    }, [visible]);
    const showModal = () => {
        setModals({
            visible: true,
        });
    };

    const handleCancel = () => {
        setModals({
            visible: false,
        });
        // form.resetFields();
    };
    useEffect(() => {
        // console.log(data, "data")
        // console.log(inputs, "inputs")
    })
    const handleSubmit = async (values) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                // Update the properties of the object
                return {
                    ...item,
                    name: values.name,
                    address: values.address,
                    feature: values.feature,
                    open_time: values.open_time,
                    close_time: values.close_time,
                    price: values.price,
                    time: values.time
                };
            }
            return item;
        });
        try {
            console.log(updatedData, 'updatedata')
            // Update the array in the Firebase database
            await set(firebaseRef, updatedData);
            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error);
        }

        setModals({
            visible: false,
            confirmLoading: false,
        });
        window.location.reload();

    };

    const handleDelete = async () => { //filter => 1 array co dieu kien
        const updatedData = data.filter((item) => item.id != id)
        try {
            // Update the array in the Firebase database
            await set(firebaseRef, updatedData);
            console.log('Data deleted successfully');
        } catch (error) {
            console.error('Error deleted data:', error);
        }
        setModals({
            visible: false,
            confirmLoading: false,
        });
        window.location.reload();
    }

    return (
        <>
            <Button className="button-update" type="default" onClick={showModal} size="small">
                Sửa
            </Button>
            <Modal
                title="Thêm người dùng"
                visible={visible}
                // onOk={handleSubmit}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
                onExit={props.reload}
            >
                <Form
                    {...layout}
                    form={form}
                    name="nest-messages"
                    onFinish={handleSubmit}
                    validateMessages={validateMessages}
                >
                    <Form.Item label="Tên Sân" name="name" rules={[{ required: true }]}>
                        <Input
                            defaultValue={name}
                        />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="address" rules={[{ required: true }]}>
                        <Input

                            defaultValue={address}

                        />
                    </Form.Item>

                    <Form.Item label="Mô tả" name="feature" rules={[{ required: true }]}>
                        <Input

                            defaultValue={feature}
                        />
                    </Form.Item>
                    <Form.Item label="Giờ mở cửa" name="open_time" rules={[{ required: true }]}>
                        <Input

                            defaultValue={open_time}
                        />
                    </Form.Item>
                    <Form.Item label="Giờ đóng cửa" name="close_time" rules={[{ required: true }]}>
                        <Input

                            defaultValue={close_time}
                        />
                    </Form.Item>
                    <Form.Item label="Giá thành" name="price" rules={[{ required: true }]}>
                        <Input

                            defaultValue={price}
                        />
                    </Form.Item>
                    <Form.Item label="Trong bao lâu" name="time" rules={[{ required: true }]}>
                        <Input

                            defaultValue={time}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div>
                            <Button className="btn-update" type="primary" htmlType="submit" style={{ backgroundColor: "deepskyblue", marginRight: "20px" }}>
                                Submit
                            </Button>
                            <Button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>delete</Button>
                        </div>

                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default SuaViTri;
