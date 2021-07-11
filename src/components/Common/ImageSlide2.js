import React from 'react';
import { useTransition, animated} from '@react-spring/web'


export default function ImageSlide2(props) {

  const{slides, className, index}=props

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
    config: { duration: 1500 },
  })

  return (
    <div className={className}>
      {transitions((style, i) => (
        <animated.img
           src={slides[i].image}
            style={{
                ...style,
                width:"100%",
                height:"auto",
                position:"absolute"        
            }}
        />
      ))}
    </div>
  )
}
