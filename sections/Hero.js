import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { Brand } from "@/components/router"
import { motion } from 'framer-motion'

const Hero = () => {

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
    },
    three: {
      x: '-100%',
      opacity: 0
    },
    four: {
      y: '-300%',
      opacity: 0
    },
    five: {
      y: '300%',
      opacity: 0
    },
    seconddiv: {
      x: '-100%',
      opacity: 0
    },
   

  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <motion.div
            initial={animation.one}
            whileInView={animation.whileInView}
            transition={{ duration: 4 }}
          >
            <TitleLogo caption='Artline' className='logobg' />
          </motion.div>

          <motion.div
            initial={animation.three}
            whileInView={animation.whileInView}
            transition={{ duration: 2 }}
          >

            <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>
          </motion.div>

          <motion.div
            initial={animation.two}
            whileInView={animation.whileInView}
            transition={{ duration: 6 }}
          >

            <div className='sub-heading'>
              <TitleSm title='WEBSITES' /> <span>.</span>
              <TitleSm title='BRANDING' /> <span>.</span>
              <TitleSm title='Graphics Designing' />
            </div>
          </motion.div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <motion.div
              initial={animation.four}
              whileInView={animation.whileInView}
              transition={{ duration: 1.72 }}
            >
              <Title title='The last digital agency you ll ever need' />
            </motion.div>
            <motion.div
              initial={animation.five}
              whileInView={animation.whileInView}
              transition={{ duration: 2 }}
            >

              <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
            </motion.div>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (

              <motion.div
                initial={animation.seconddiv}
                whileInView={animation.whileInView}
                transition={{ duration: 2 }}
                className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

    </>
  )
}

export default Hero
