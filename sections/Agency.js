import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import { motion } from 'framer-motion'


const Agency = () => {

  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      y: '200%',
      opacity: 0
    },
    two: {
      y: '-100%',
      opacity: 0
    }
  }
  return (
    <>
      <section className='agency bg-top max-w-[100vw]'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT ARTLINE' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <motion.div
              initial={animation.one}
              whileInView={animation.whileInView}
              transition={{ duration: 1.9 }} className='left w-60 py'>

              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
              <div className='grid-3 max-w-[100vw]'>
                <div className='box w-8 md:w-full'>
                  <h1 className='indigo w-2 md:w-full'>10+</h1>
                  <h3 className="w-20">Years of experience</h3>
                </div>
                <div className='box w-8 md:w-12'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box w-8 md:w-12'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={animation.two}
              whileInView={animation.whileInView}
              transition={{ duration: 1.9 }} className='right w-40 ml'>

              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </motion.div>
          </div>

          <div className='content flex'>
            <motion.div
              initial={animation.two}
              whileInView={animation.whileInView}
              transition={{ duration: 1.9 }} className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </motion.div>
            <motion.div
              initial={animation.one}
              whileInView={animation.whileInView}
              transition={{ duration: 1.9 }} className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Fusce fringilla justo vel dui consectetur, fringilla maximus ante malesuada. Suspendisse facilisis nisl augue, ut sollicitudin lectus ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse vitae officia nostrum facere. Fugiat voluptates, expedita dolore at perferendis quae libero fuga consequatur veniam, eius non fugit nulla vitae?</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
