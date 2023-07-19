import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreed: false
    };
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      agreed: !prevState.agreed
    }));
  }

  render() {
    return (
      <div className='terms'>
        <h1>Terms and Conditions</h1>
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.state.agreed}
              onChange={this.handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button disabled={!this.state.agreed}><Link to="/home">Continue</Link></button>
      </div>
    );
  }
}

export default TermsAndConditions;