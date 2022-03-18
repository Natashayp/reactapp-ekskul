import React from "react";

interface IProps {
  nama: string;
  kelas: string;
  isMorning: boolean;
}

class Info extends React.Component<IProps> {
  render() {
    return (
      <>
        <h3>Nama: {this.props.nama}</h3>
        <h5>Kelas: {this.props.kelas}</h5>
        <p>Pagi/Siang: {this.props.isMorning} </p>
        boolean value: {String(true)}
      </>
    );
  }
}

export default Info;
