import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"
import { motion } from 'framer-motion'


const ShowCase = () => {
  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      x: '-100%',
      opacity: 0
    }
  }
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
          </div>
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 2.9 }}
            className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </motion.div>
          <div className='card links'>
            <Link href='/showcase'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
