import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;

    //Если поле пустое
    if (!title.trim()) {
      return this.props.showAlert("Название поста не может быть пустым");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    // event.persist();
    //Универсальная обработка значения инпута
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

//Какие экшены нам надо спроецировать в свойства для данного компонента
const mapDispatchToProps = {
  createPost,
  showAlert,
};

//Какое состояние нам надо спроецировать в свойства для данного компонента
const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
