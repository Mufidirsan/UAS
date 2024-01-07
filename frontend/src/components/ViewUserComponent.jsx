import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3" style={{color:"#B19470"}}>
          <h3 className="text-center">Detail Peminjam</h3>
          <div className="card-body ">
            <div className="col auto">
              <table className="row row-cols-2 row-cols-lg-2">
              <div className="col ">
              <th>Judul Buku: </th> 
              <div> {this.state.user.judul_buku}</div>
            </div>
            <div className="col">
              <th> Jumlah: </th>
              <div> {this.state.user.jumlah}</div>
            </div>
            <div className="col">
              <th> Nama: </th>
              <div> {this.state.user.nama_peminjam}</div>
            </div>
            <div className="col">
              <th> Alamat: </th>
              <div> {this.state.user.alamat_peminjam}</div>
            </div>
            <div className="col">
              <th> No HP: </th>
              <div> {this.state.user.noHp_peminjam}</div>
            </div>
            <div className="col">
              <th> Tanggal Pinjam: </th>
              <div> {this.state.user.tanggal_pinjam}</div> 
            </div>
            <div className="col">
              <th> Tanggal Pengembalian: </th>
              <div> {this.state.user.tanggal_pengembalian}</div> 
            </div>
            <div className="col">
              <th> Lama Pinjam: </th>
              <div> {this.state.user.lama_pinjam}</div> 
            </div> 
              </table>
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
