/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import ipad from 'assets/images/ipad.png';

const data = [
  {
    title: 'Organized project content',
    contents: (
      <div>
        Tell us what sort of assignment you'd like done, we'll get an expert to work on it.
      </div>
    ),
  },
  {
    title: 'Collaborative environment',
    contents: (
      <div>
        Work closely with a writers and professionals tasked with understanding your project.
      </div>
    ),
  },
  {
    title: `Timely deliveries`,
    contents: (
      <div>
        We shall meet our deadlines and ensure you enjoy working with us.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Box
        as="figure"
        sx={{ ...styles.illustration, background: `url(${ipad}) no-repeat` }}
      />
      <Container sx={styles.container}>
        <Box sx={styles.accordionGroup}>
          <SectionHeading
            sx={styles.heading}
            slogan="Professional nursing essay help"
            title="Meet our premium services that will make you wow"
            description="A competent team crafting your custom made nursing papers. Providing top-notch help on your way to academic excellence!"
          />
          <Accordion items={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: 0,
    pb: [12, null, null, null, null, 14, 18],
    // marginBottom: [null, null, null, null, null, null, '-85px'],
    backgroundColor: '#fef8f3',
    clipPath: 'ellipse(90% 100% at 69.6% 0%)',
    position: 'relative',
    zIndex: 0,
    '@media only screen and (max-width: 768px)': {
      backgroundColor: '#641BC9',
      clipPath: 'ellipse(111% 100% at 53.05% 0%)',
    }
  },
  container: {
    display: ['flex'],
    alignItems: ['flex-start'],
    justifyContent: 'flex-end',
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, '62%', '50%', '66%', '62%'],
    '@media only screen and (min-width: 1601px)': {
      backgroundSize: '60%',
      backgroundPosition: '0 0',
    },
    backgroundPosition: [
      null,
      null,
      null,
      null,
      null,
      '-80px 0',
      null,
      null,
      '0 0',
      '-140px 0px',
    ],
    bottom: 0,
    display: ['none', null, null, null, null, 'block'],
    height: '100%',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, '0 auto', null, '0', null],
    // marginLeft: [null, null, null, 'auto', null, 10, 12, 16],
    // marginRight: [null, null, null, 'auto', null, 'unset'],
    // px: [6, null, null, null, 0],
  },
  heading: {
    textAlign: ['center', null, null, null, null, 'left'],
    maxWidth: [null, null, null, 440, 450, 'none'],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 'heading',
      maxWidth: [250, null, null, 'none'],
      margin: ['0 auto', null, null, 'unset'],
      '@media only screen and (max-width: 768px)': {
        color: '#fefdff',
      }
    },
    p:{
      '@media only screen and (max-width: 768px)': {
        color: '#fefdff',
      }
    }
  },
};
