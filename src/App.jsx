import Main from './pages/Main'

/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'

const style = css({
  background: "#f1f1f1",
  paddingTop: "20px",
  height: "100vh",
})

function App() {
  return (
    <div css={style}>
      <Main/>
    </div>
  )
}

export default App
