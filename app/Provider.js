import React, {Component, Children} from 'preact-compat'
import ReactDOM from 'preact-compat'
import PropTypes from 'proptypes'

export default class Provider extends Component {
  getChildContext() {
    return { store: this.store }
  }

  //constructor(props, context) {
  //  console.log(props)
  //  super(props, context)
  //  this.store = props.store
  //}
  //
  componentWillReceiveProps(nextProps) {
    const { store } = this
    const { store: nextStore } = nextProps

    if (store !== nextStore) {
      //warnAboutReceivingStore()
    }
  }
  //
  render() {
    //console.log(this.props)
    let { children } = this.props
    return Children.only(children)
  }
}

//Provider.childContextTypes = {
//  store: PropTypes.shape({
//    subscribe: PropTypes.func.isRequired,
//    dispatch: PropTypes.func.isRequired,
//    getState: PropTypes.func.isRequired
//  })
//}
//
//
