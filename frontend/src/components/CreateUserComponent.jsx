import React, { Component } from "react";
import UserService from "../services/UserService";
import Swal from "sweetalert2";
class CreateUserComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // step 2

      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: 1,
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",

    };
    this.changeJudul = this.changeJudul.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNama = this.changeNama.bind(this);
    this.changeAlamat = this.changeAlamat.bind(this);
    this.changeNoHp = this.changeNoHp.bind(this);
    this.changetglPinjam = this.changetglPinjam.bind(this);
    this.changetglKembali = this.changetglKembali.bind(this);
    this.changelamaPinjam = this.changelamaPinjam.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }


  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          judul_buku: user.judul_buku,
          jumlah: user.jumlah,
          nama_peminjam: user.nama_peminjam,
          alamat_peminjam: user.alamat_peminjam,
          noHp_peminjam: user.noHp_peminjam,
          tanggal_pinjam: user.tanggal_pinjam,
          tanggal_pengembalian: user.tanggal_pengembalian,
          lama_pinjam: user.lama_pinjam,
        });
      });
    }
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      judul_buku: this.state.judul_buku,
      jumlah: String(this.state.jumlah),
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tanggal_pinjam: this.state.tanggal_pinjam,
      tanggal_pengembalian: this.state.tanggal_pengembalian,
      lama_pinjam: this.state.lama_pinjam,


    };
    console.log("user => " + JSON.stringify(user));

    // step 5
    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
        this.showUpdateSuccessNotification();
      });
    }
  };

  changeJudul = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: event.target.value });
  };

  changeNama = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamat = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNoHp = (event) => {
    this.setState({ noHp_peminjam: event.target.value });
  };

  changetglPinjam = (event) => {
    this.setState({ tanggal_pinjam: event.target.value });
  };

  changetglKembali = (event) => {
    this.setState({ tanggal_pengembalian: event.target.value });
  };

  changelamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Isi Biodata</h3>;
    } else {
      return <h3 className="text-center">Update buku</h3>;
    }
  }


  // changeJumlah = (event) => {
  //   const quantity = Math.max(1, parseInt(event.target.value) || 1);
  //   this.setState({ jumlah: quantity });
  // };
  

  increment = () => {
    this.setState((prevState) => ({
      jumlah: prevState.jumlah + 1,
    }));
  };

  decrement = () => {
    if (this.state.jumlah > 1) {
      this.setState((prevState) => ({
        jumlah: prevState.jumlah - 1,
      }));
    }
  };


  showUpdateSuccessNotification() {
    Swal.fire(
      'Updated!',
      'User data has been updated.',
      'success'
    );
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container ">
          <div className="row ">
            <div className="card col-md-6 offset-md-3" style={{color:"#B19470"}}>
              <div className="card-header text-center">Pinjam Dulu</div>
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Nama: </label>
                    <input
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNama}
                    />
                  </div>
                  <div className="form-group">
                    <label> No HP: </label>
                    <input
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNoHp}
                    />
                  </div>
                  <div className="form-group">
                    <label> Alamat: </label>
                    <input
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamat}
                    />
                  </div>
                  <div className="form-group">
                    <label> Judul Buku: </label>
                    <input
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudul}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jumlah: </label>
                    <div className="input-group">
                      <input
                        type="number"
                        name="jumlah"
                        className="form-control"
                        value={this.state.jumlah}
                        onChange={this.changeJumlah}
                        
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-info"
                          type="button"
                          onClick={this.increment}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={this.decrement}
                        >
                          -
                        </button>
                        
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label> Tanggal Pinjam: </label>
                    <input
                      type="date"
                      name="tanggal_pinjam"
                      className="form-control"
                      value={this.state.tanggal_pinjam}
                      onChange={this.changetglPinjam}
                    />
                  </div>
                  <div className="form-group">
                    <label> Tanggal Pengembalian: </label>
                    <input
                      type="date"
                      name="tanggal_pengembalian"
                      className="form-control"
                      value={this.state.tanggal_pengembalian}
                      onChange={this.changetglKembali}
                    />
                  </div>

                  <div className="form-group">
                    <label> Lama Pinjam: </label>
                    <input
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changelamaPinjam}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
