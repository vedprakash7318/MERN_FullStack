import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Swal from 'sweetalert2';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function ShowData() {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);

    const FetchData = async () => {
        const res = await axios.get('http://localhost:4000/get');
        setData(res.data.data);
    };

    useEffect(() => {
        FetchData();
    }, []);

    const [editData, setEditData] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    });

    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' }
    ];

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Do you want to Delete?",
            showCancelButton: true,
            confirmButtonText: "Yes! Delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:4000/delete/${id}`);
                FetchData();
                Swal.fire("Deleted!", "", "success");
            }
        });
    };

    const actionTemplate = (rowData) => {
        return (
            <div style={{ display: "flex", gap: "10px" }}>
                <Button label="Edit" onClick={() => handleEditMode(rowData)} />
                <Button label="Delete" onClick={() => handleDelete(rowData._id)} />
            </div>
        );
    };

    const handleEditMode = (rowData) => {
        setVisible(true);
        setEditData(rowData);
    };

    const handleInputChange = (e, field) => {
        setEditData({ ...editData, [field]: e.target.value });
    };

    const handleUpdate = async () => {
        const id = editData._id;
        await axios.put(`http://localhost:4000/edit/${id}`, editData);
        setVisible(false);
        FetchData();
    };

    return (
        <div className="card">
            <DataTable value={data} emptyMessage="No customers found.">
                <Column field="name" header="Name" />
                <Column field="email" header="Email" />
                <Column field="age" header="Age" />
                <Column field="gender" header="Gender" />
                <Column field="password" header="Password" />
                <Column field="isBlocked" header="Status" />
                <Column body={actionTemplate} header="Action" />
            </DataTable>

            <Dialog header="Edit User" visible={visible} style={{ width: '40vw' }} onHide={() => setVisible(false)}>
                <div className="field">
                    <label>Name</label>
                    <InputText
                        value={editData.name}
                        onChange={(e) => handleInputChange(e, "name")}
                    />
                    <br /><br />

                    <label>Email</label>
                    <InputText
                        value={editData.email}
                        onChange={(e) => handleInputChange(e, "email")}
                    />
                    <br /><br />

                    <label>Age</label>
                    <InputText
                        value={editData.age}
                        onChange={(e) => handleInputChange(e, "age")}
                    />
                    <br /><br />

                    <label>Gender</label>
                    <Dropdown
                        value={editData.gender}
                        options={genderOptions}
                        onChange={(e) => setEditData({ ...editData, gender: e.value })}
                        placeholder="Select Gender"
                        className="w-full"
                    />
                    <br /><br />

                    <Button label="Update" onClick={handleUpdate} />
                </div>
            </Dialog>
        </div>
    );
}
