import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import { motion } from 'framer-motion'


const Expertise = () => {

  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      y: '-100%',
      opacity: 0
    },
    two: {
      x: '-100%',
      opacity: 0
    }
  }
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>

            <Title title='Our expertise' />

            <motion.p
              initial={animation.two}
              whileInView={animation.whileInView}
              transition={{ duration: 3 }}
            >Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</motion.p>
          </div>
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 2 }}
            className='hero-content grid-4'>

            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Expertise
