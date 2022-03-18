import React from "react";

class Image extends React.Component {
  componentWillUnmount() {
    console.log("willUnmount terpanggil");
  }
  render(): React.ReactNode {
    return (
      <div>
        <img width={160} height={200} src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" />
      </div>
    );
  }
}

export default Image;
