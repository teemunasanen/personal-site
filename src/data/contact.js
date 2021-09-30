import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/teemunasanen',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://fi.linkedin.com/in/teemu-n%C3%A4s%C3%A4nen-799968196',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:teemu.nasanen@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
