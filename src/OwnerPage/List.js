import React, { useEffect, Fragment, useState } from "react";
import { Select, Input, Table, Button, Space, Card } from "antd";
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";
import NAV from "../Constant/SinglePage";

import SuaVitri from "./UpdateCourts";
import XoaVitri from "./DeleteCourts";

const Search = Input.Search;
const initState = {
    selectedRowKeys: [],
};

export default function QLViTri() {
    const updateFunction = () => {
        // if (params === "function") ;
    };

    const [data, setData] = useState();
    const dbRef = ref(getDatabase());

    useEffect(() => {
        get(child(dbRef, `data`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    console.log(snapshot.val())
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Tên sân",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Mô tả",
            dataIndex: "feature",
            key: "feature",
        },
        {
            title: "Giờ mở cửa",
            dataIndex: "open_time",
            key: "open_time",
        },
        {
            title: "Giờ đóng cửa",
            dataIndex: "close_time",
            key: "close_time",
        },
        {
            title: "Giá thành",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Trong bao lâu",
            dataIndex: "time",
            key: "time",
        },

        {
            title: "Thao tác",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    {console.log(record)}
                    <SuaVitri
                        id={record.id}
                        TenSan={record.name}
                        DiaChi={record.address}
                        MoTa={record.feature}
                        OpenTime={record.open_time}
                        CloseTime={record.close_time}
                        Price={record.price}
                        Time={record.time}
                        updateFunction={updateFunction}
                    />
                    <XoaVitri MaViTri={record.ma_vi_tri} />
                </Space>
            ),
        },
    ];

    const [danhSachViTri, setDSVT] = useState([]);
    const getDSVT = async () => {
        // const res = await axios.get(apiConstants.DANH_SACH_VI_TRI);
        // console.log(res);
        // setDSVT(res.data.data.danhsach);
    };

    useEffect(() => {
        getDSVT();
    }, [updateFunction]);

    const renderTable = () => {
        return (
            <Table
                size="small"
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.key}
            />
        );
    };
    return (
        <div>
            <Link className="backtohome" to={NAV.HOME_PAGE}> <i class="fas fa-home" style={{ paddingRight: 10 }}></i>Home </Link>
            <Card title="Quản lý sân" className="gx-card">
                <div className="table-operations">
                    <Space size="small" >
                        <Search
                            size="small"
                            // ref={searchText}
                            // suffix={suffix}

                            placeholder="Tìm kiếm"
                            style={{ width: 200 }}
                        />
                        {/* <Button size="small">Làm mới</Button> */}
                        {/* <ModalViTri onSuccess={getDSVT} /> */}
                    </Space>

                    <a href="/owner-add"><button className="btn-add" >Thêm sân</button></a>

                </div>
                {renderTable()}
            </Card>

        </div >
    );
}
