import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'

import './Start.css'

class Start extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    const { children, to } = this.props
    return (
      <Fragment>
        <div className="taCenter">
          <h3>次はこちらへ</h3>
          <Link to={`${to}`}>
            <div class="Button">{children}</div>
          </Link>
        </div>
      </Fragment>
    )
  }
}
export default Start
