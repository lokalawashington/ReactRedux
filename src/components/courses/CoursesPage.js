import React from "react";
import { connect } from 'react-redux'
import * as courseActions from "../../redux/action/courseAction"
import { PropTypes } from "prop-types";

class CoursesPage extends React.Component {

  state = {
    course: {
      title: ""
    }
  }


  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" value="save" />
      </form>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}



export default connect(mapStateToProps)(CoursesPage);
