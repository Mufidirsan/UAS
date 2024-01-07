import React, { Component } from 'react'
import UserService from '../services/UserService'
import Swal from "sweetalert2"

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({
                users:
                    this.state.users.
                        filter(user => user.id !== id)
            });
        });
    }
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    deleteUser(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                UserService.deleteUser(id)
                    .then(() => {
                        this.setState({
                            users: this.state.users.filter(user => user.id !== id)
                        });

                        Swal.fire(
                            'Deleted!',
                            'User data has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'Failed to delete user data.',
                            'error'
                        );
                    });
            }
        });
    }

    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    showUpdateSuccessNotification() {
        Swal.fire(
            'Updated!',
            'User data has been updated.',
            'success'
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.showUpdateSuccessNotification();
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center text-white">
                    List Peminjaman Buku</h2>
                <div className="row">
                    <button className="btn btn-primary"
                        onClick={this.addUser}> Add </button>
                </div>
                <br></br>
                <div className="row">
                    <table className
                        ="table table-striped table-bordered table-light"style={{color:"#B19470"}}>

                        <thead>
                            <tr>
                                <th>Judul</th>
                                <th>Jumlah</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>No Hp</th>
                                <th>tgl Pinjam</th>
                                <th>tgl Pengembalian</th>
                                <th>lama Pinjam</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>
                                                {user.judul_buku}
                                            </td>
                                            <td>
                                                {user.jumlah}
                                            </td>
                                            <td>
                                                {user.nama_peminjam}
                                            </td>
                                            <td>
                                                {user.alamat_peminjam}
                                            </td>
                                            <td>
                                                {user.noHp_peminjam}
                                            </td>
                                            <td>
                                                {user.tanggal_pinjam}
                                            </td>
                                            <td>
                                                {user.tanggal_pengembalian}
                                            </td>
                                            <td>
                                                {user.lama_pinjam}
                                            </td>
                                            <td>
                                                <button onClick={() =>
                                                    this.editUser(user.id)}
                                                    className="btn btn-outline-primary">Update
                                                </button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.deleteUser(user.id)}
                                                    className="btn btn-outline-danger">Delete
                                                </button>
                                                <button style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewUser(user.id)}
                                                    className="btn btn-outline-info">View
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUserComponent
