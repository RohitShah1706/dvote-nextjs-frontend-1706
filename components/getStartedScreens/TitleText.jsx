import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';

const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white gradient__text ${textStyles}`}
  >
    {title}
  </motion.h2>
);
export default TitleText;