import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User.jsx'
import { Page } from '../components/Page.jsx'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import './App.css'

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    return (
      <div className="App">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
          error={page.error}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    )
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
