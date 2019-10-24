import React from "react";
import "./App.css";
import {Notices, NoticeCreator} from "./components/Notices.js";
import {Notices as NoticesModel} from "./models/Notices.js";
import {Stats as StatsModel} from "./models/Stats.js";

class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      noticesLoading: true,
      notices: [],
      numCharactersSubmitted: 0,
    };

    this.noticesModel = new NoticesModel();
    this.statsModel = new StatsModel();

    this.update();
    this.handleNoticeCreated = this.handleNoticeCreated.bind(this)
  }

  update() {
    this.noticesModel.getNotices().then(notices => {
      console.log(JSON.stringify(notices));
      this.setState({
        noticesLoading: false,
        notices: notices,
      });
    });

    this.statsModel.getNumCharacters().then(numCharacters => {
      console.log(JSON.stringify(numCharacters));
      this.setState({
        numCharactersSubmitted: numCharacters,
      });
    });
  }

  handleNoticeCreated(notice) {
    this.noticesModel.createNotice(notice.title, notice.content).then(id => {
      this.update();
    });
  }

  render() {
    return (
      <div className="notices-app">
        <NoticeCreator onCreate={this.handleNoticeCreated} />
        <Notices notices={this.state.notices} loading={this.state.noticesLoading} />
      </div>
    );
  }
}

export default App;
