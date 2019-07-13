import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

export const FakeCard = () => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div style={{
             willChange: transform, opacity,
            background: 'tomato',
            position: 'absolute',
            maxWidth: '200px',
            maxHeight: '100px',
            width: '20ch',
            height: '10ch',
            opacity: opacity.interpolate(o => 1 - o), transform }}
            />
      <a.div style={{
            willChange: transform, opacity,
            background: 'blue',
            position: 'absolute',
            maxWidth: '200px',
            maxHeight: '100px',
            width: '20ch',
            height: '10ch',
            opacity, 
            transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
            />
    </div>
  )
}