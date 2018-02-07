// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
class NavLink extends React.Component { // eslint-disable-line
  render() {
    return <Link {...this.props}/>
  }
}
export default NavLink;