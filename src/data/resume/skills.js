// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Heroku',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Windows',
    competency: 3,
    category: ['Operating Systems'],
  },
  {
    title: 'Linux',
    competency: 1,
    category: ['Operating Systems'],
  },
  {
    title: 'Android',
    competency: 1,
    category: ['Operating Systems', 'Mobile Development'],
  },
  {
    title: 'Ionic Framework',
    competency: 2,
    category: ['Tools', 'Mobile Development'],
  },
  {
    title: 'UX/UI',
    competency: 2,
    category: ['Web Development', 'Mobile Development'],
  },
  {
    title: 'Marvel App',
    competency: 2,
    category: ['Web Development', 'Mobile Development', 'Tools'],
  },
  {
    title: 'Security Awareness',
    competency: 3,
    category: ['Security'],
  },
  {
    title: 'Netlify',
    competency: 1,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#64cb7b',
  '#515dd4',
  '#e47272',
  '#3896e2',
  '#c3423f',
  '#747fff',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
