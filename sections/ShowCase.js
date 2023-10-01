import { showcase } from "@/assets/data/dummydata"
import { digitalmarketing } from "@/assets/data/dummydata"
import { brand } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import { motion } from 'framer-motion'

const ShowCase = () => {
  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      y: '-50%',
      opacity: 0
    },
    two: {
      y: '-100%',
      opacity: 0
    },
  }
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <motion.div
              initial={animation.two}
              whileInView={animation.whileInView}
              transition={{ duration: 2.5 }}>
              <TitleSm title='SHOWCASE' /> <br />
            </motion.div>
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
            <Title title='Graphics Designing' className='title-bg mt-4' />
          </div>
          <br />
          <br />
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 1 }}
            className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>

          <div className='py btn'>
            {/* <button className='secondary-button'>View More</button> */}
          </div>
        </div>

      </section>



      <section className='showcase bg-top py-0'>
        <div className='container'>
          <div className='heading-title'>
            <br />
            <Title title='Digital Marketing' className='title-bg mt-4' />
          </div>
          <br />
          <br />
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 1 }}
            className='grid-3'>
            {digitalmarketing.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>

          <div className='py btn'>
            {/* <button className='secondary-button'>View More</button> */}
          </div>
        </div>
      </section>

      <section className='showcase bg-top py-0'>
        <div className='container'>
          <div className='heading-title'>
            <br />
            <Title title='Branding' className='title-bg mt-4' />
          </div>
          <br />
          <br />
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 1 }}
            className='grid-3'>
            {brand.map((item) => (
              <Card data={item} key={item.id}  />
            ))}
          </motion.div>

          <div className='py btn'>
            {/* <button className='secondary-button'>View More</button> */}
          </div>
        </div>
      </section>



    </>
  )
}

export default ShowCase
