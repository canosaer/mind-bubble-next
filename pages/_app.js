// Global Context
import {Store} from '../context/store'

// Global Styles
import '../styles/globals.scss'

// Font Awesome Initialization
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MindBubble({ Component, pageProps }) {
  return(
    <Store>
      <Component className="app" {...pageProps} />
    </Store>
  ) 
}

export default MindBubble