/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author from 'assets/images/testimonial.png';
import { rgba } from 'polished';

import 'assets/css/react-slick.css';

const data = [
  {
    id: 1,
    avatar: author,
    authorName: 'Joan Wangeci',
    designation: 'Message from the CEO',
    text: `As a truly customer-centric company, we focus on the creation of a new value to achieve sustainable growth.`,
  }
];

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Slider {...settings} sx={styles.carousel}>
          {data.map((item) => (
            <Testimonial key={item.id} testimonial={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [6, null, null, 0],
    backgroundColor: '#F0F3F8',
    position: 'relative',
    '@media only screen and (min-width:767px)': {
      ':before': {
        backgroundColor: 'white',
        content: `''`,
        minHeight: [null, null, null, 30, 70, 100],
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
      },
    },
  },
  carousel: {
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      bottom: [6, null, null, 8, 10],
      listStyle: 'none',
      position: 'absolute',
      left: [
        'calc(50% + 14px)',
        null,
        null,
        'calc(50% + 62px)',
        'calc(50% + 14px)',
        'calc(50% + 60px)',
        'calc(50% + 14px)',
      ],
      transform: 'translateX(-50%)',
      button: {
        backgroundColor: rgba('#5B2B9D', 0.2),
        border: 0,
        outline: 0,
        borderRadius: 5,
        cursor: 'pointer',
        height: [3, null, null, 6],
        width: [10, null, null, 15],
        overflow: 'hidden',
        textIndent: '-9999em',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'primary',
        width: [20, null, null, 30],
      },
    },
    li: {
      display: 'flex',
      '+ li': {
        ml: '6px',
      },
    },
  },
};
