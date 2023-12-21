import { Box, Grid } from '@radix-ui/themes'
import React from 'react'
import { animationList } from './config'

const AnimationRender: React.FC = () => {
  return (
    <Grid columns="3" gap="3" width="auto" height="auto">
      {animationList.map((config, idx) => {
        return (
          <Box key={idx} height="9" width="9" className="bg-lime-800">
            test
            {config}
          </Box>
        )
      })}
    </Grid>
  )
}

export default AnimationRender
