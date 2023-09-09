import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import { motion } from 'framer-motion'


const Services = () => {

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
      y: '200%',
      opacity: 0
    }
  }
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <motion.div
              initial={animation.one}
              whileInView={animation.whileInView}
              transition={{ duration: 2.5 }}>
              <TitleSm title='SERVICES' /> <br />
            </motion.div>
            <br />
            <motion.div
              initial={animation.two}
              whileInView={animation.whileInView}
              transition={{ duration: 1.9 }} >
              <Title title='Unique technologies & modern approach' className='title-bg' />
            </motion.div>
          </div>
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 1 }}
            className='grid-2 py'>

            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
