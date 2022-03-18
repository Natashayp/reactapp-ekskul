import React from "react";
import Info from "./component/Info";
import "./App.css";
import Image from "./component/Image";
import { apiCall } from "./services";
import { NodeBuilderFlags } from "typescript";
import { API_URL } from "./constants";
import { IUsersResponse } from "./interface/index";
import { userInfo } from "os";

interface IState {
  counter: number;
  data: IUsersResponse[];
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0,
      data: [],
    };
  }

  componentDidMount() {
    console.log("did mounting");
    apiCall(API_URL.users)
      .then((data: any) => {
        this.setState({ data: data });
        console.log(data);

        data.forEach((user: IUsersResponse) => {
          apiCall(API_URL.posts);

          let url = API_URL.posts.replace("{userId}", user.id.toString());
          console.log(url);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("did Update");
  }

  renderInfo = () => {
    const { counter } = this.state;
    if (counter % 3 === 0) {
      return <Image />;
    }
    return null;
  };

  renderUsers = () => {
    const { data } = this.state;

    return data.map((user) => {
      return (
        <div key={user.id}>
          <h5>{user.id}</h5>
          <h5>{user.name}</h5>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <p>{user.address.geo.lat}</p>
          <p>{user.address.geo.lng}</p>
          <p>{user.company.name}</p>
          <p>{user.company.catchPrhase}</p>
          <p>{user.company.bs}</p>
        </div>
      );
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="app-wrapper">
        <Info nama="Tasha" kelas="XII MIPA 3" isMorning={true} />
        <br></br>
        <h1>{counter}</h1>
        <br></br>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me</button>
        {this.renderInfo()}
        {this.renderUsers()}
      </div>
    );
  }
}

export default App;
