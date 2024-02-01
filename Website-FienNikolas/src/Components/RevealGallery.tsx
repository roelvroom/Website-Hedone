import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: JSX.Element
}

export const RevealGallery = ({ children }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControles = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControles.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          right: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='right'
        animate={mainControles}
        transition={{ ease: "easeInOut", duration: 2.7 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealGallery
