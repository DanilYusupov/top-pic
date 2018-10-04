import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { photos, year } = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые "залайканные" фотки</p>
        <p>Привет {name}!</p>
        <p>
          У тебя {photos.length} фото за {year} год.
        </p>
      </div>
    )
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store) // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page,
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)
