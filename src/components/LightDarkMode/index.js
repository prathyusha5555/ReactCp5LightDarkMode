import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false, darkMode: true}

  getDarkMode = () => {
    this.setState(prevState => ({
      lightMode: !prevState.lightMode,
      darkMode: !prevState.darkMode,
    }))
  }

  getLightMode = () => {
    this.setState(prevState => ({
      lightMode: !prevState.lightMode,
      darkMode: !prevState.darkMode,
    }))
  }

  render() {
    const {lightMode, darkMode} = this.state
    let modeContainer
    let modeButton
    if (lightMode) {
      modeButton = (
        <button type="button" className="button" onClick={this.getDarkMode}>
          Dark Mode
        </button>
      )

      modeContainer = (
        <div className="light-mode-container">
          <h1 className="light-mode-heading">Click To Change Mode</h1>
          {modeButton}
        </div>
      )
    }
    if (darkMode) {
      modeButton = (
        <button type="button" className="button" onClick={this.getLightMode}>
          Light Mode
        </button>
      )
      modeContainer = (
        <div className="dark-mode-container">
          <h1 className="dark-mode-heading">Click To Change Mode</h1>
          {modeButton}
        </div>
      )
    }
    return <div className="bg-container">{modeContainer}</div>
  }
}

export default LightDarkMode
