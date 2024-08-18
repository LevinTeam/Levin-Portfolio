import React, { Component } from 'react';
import './CommentForm.css';
// import Popup from '../Popup/Popup.js';
import axios from 'axios';
class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleData(this.state);

    this.setState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <h2>ارسال دیدگاه</h2>
          <div className='duo'>
        <div className="form-group">
          <label htmlFor="name">نام:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </div>
          <div className="form-group">
            <label htmlFor="email">ایمیل:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">شماره تلفن:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
</div>
        <div className="form-group">
          <label htmlFor="subject">موضوع:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">نظر:</label>
          <textarea
            id="message"
            className='comment-box'
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className='btn'>ارسال</button>
      </form>
    );
  }

  handleData(Data) {
    console.log(Data);
    axios.post('http://localhost:8000/api/v1/create-comment', {
      CommentData: Data,
    })
    .then(response => {
      if (response.status === 200) {
        if (response.data.status.code === 201) {
          if (response.data.status.message === 'Created') {
            console.log(response.data.message);
          }
        } else {
          console.log(response.data);
        }
      }
    })
    .catch(error => {
      console.log(`React Application Error: ${error}`);
    });
  }
}
export default FeedbackForm;
