import { Flex } from '@radix-ui/themes'
import './App.css'
import AnimationRender from './pages/AnimationRender'

function App() {
  return (
    <Flex width="100%" height="100%" direction="column" justify="center" align="center" className="bg-slate-500">
      <AnimationRender />
    </Flex>
  )
}

export default App
