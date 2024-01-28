import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


interface Props {
  children: JSX.Element
}

export const RevealMenu = ({ children }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControles = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControles.start("visible")
        }
    }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          right: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="right"
        animate={ mainControles }
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealMenu
