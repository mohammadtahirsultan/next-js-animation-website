import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import { motion } from 'framer-motion'

const Brand = () => {

  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      x: '100%',
      opacity: 0
    }
  }

  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 1.9 }} className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Brand
