import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image_id: "",
      content: "",
      summary: "",
      status: "public",
    };
  }

  handleNewPost(titleArg, image_idArg, contentArg, summaryArg, statusArg) {
    this.setState({
      title: titleArg,
      image_id: image_idArg,
      content: contentArg,
      summary: summaryArg,
      status: statusArg
    }, this.handleAddPost);
  }

  handleAddPost() {
    axios.post('/jotnet', {
      title: this.state.title,
      image_id: this.state.image_id,
      content: this.state.content,
      summary: this.state.summary,
      status: this.state.status
    });
  }

  render() {
    return (
      <section>
        <header>
          <h2>New Ticket</h2>
        </header>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.handleNewPost(event.target.title.value, event.target.image_id.value, event.target.content.value, event.target.summary.value, this.state.status);
        }}>
          <label>
            Name:
            <input
              type="text"
              name="title"
              placeholder="Ticket name"
              required
              autocomplete="off"
            />
          </label> <br></br>

          <label>
            Wage:
            <input
              type="text"
              name="image_id"
              placeholder="$$$"
              required
              autocomplete="off"
            />
          </label> <br></br>

          <label>
            Description:
            <textarea
              cols="48"
              rows="8"
              name="content"
              placeholder="Enter additional information here"
              required
              autocomplete="off"
            />
          </label> <br></br>

          <label>
            Location:
            <input
              type="text"
              name="summary"
              placeholder="Address Of Chore"
              required
              autocomplete="off"
            />
          </label> <br></br>


          <input type="submit" value="Submit Ticket" />

          <hr />
        </form>
      </section>
    );
  }
}
