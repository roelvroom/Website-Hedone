import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


interface Props {
  children: JSX.Element
}

export const RevealBottom = ({ children }: Props) => {
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
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={ mainControles }
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealBottom
