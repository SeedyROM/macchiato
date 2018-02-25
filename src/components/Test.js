import React from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Test = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Test)