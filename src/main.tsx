import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme
      style={{
        width: '100%',
        height: '100%',
      }}
      appearance="dark"
      accentColor="green"
      grayColor="sand"
      radius="full"
    >
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>,
)
