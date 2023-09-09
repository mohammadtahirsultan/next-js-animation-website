import React from "react"
import { Title, TitleLogo } from "./common/Title"
import { motion } from 'framer-motion'

const Banner = () => {

  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      y: '100%',
      opacity: 0
    },
  }
  return (
    <motion.div
      initial={animation.one}
      whileInView={animation.whileInView}
      transition={{ duration: 1.9 }}>

      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary'>Request a call-back</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Banner
