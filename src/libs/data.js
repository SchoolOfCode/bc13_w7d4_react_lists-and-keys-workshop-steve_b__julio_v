import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const postTemplate = {
  postId: 0,
  title: 'a title',
  date: 'DD/MM/YY',
  author: 'author',
  text: lorem.generateParagraphs(7),
  highlights: [
    lorem.generateWords(3),
    lorem.generateWords(3),
    lorem.generateWords(3),
  ],
  image: { link: 'link', alt: 'alt' },
};

const samplePosts = [
  {
    postId: 1,
    title: 'One Of My Favourites',
    date: '12/10/20',
    author: 'Bobby Nest',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
      alt: 'A blue-grey pigeon turns to face the camera.',
    },
  },
  {
    postId: 2,
    title: 'Look At This Marvellous Pigeon',
    date: '14/10/20',
    author: 'Lucy Wing',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: 'https://i.redd.it/u6xrjmzbrf321.png',
      alt: 'A close up shot of a pigeon with glorious ruffles.',
    },
  },
  {
    postId: 3,
    title: 'A Lovely Pidgeon',
    date: '16/10/20',
    author: 'Mohammad Feather',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://image.freepik.com/free-photo/pidgeon-waters-edge_19485-37038.jpg',
      alt:
        'A pigeon with a spectacular green plumage stares thoughtfully into the distance.',
    },
  },
  {
    postId: 4,
    title: 'A Sexy Pidgeon',
    date: '16/10/20',
    author: 'Mohammad Feather',
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        'https://ih1.redbubble.net/image.1278023532.5097/st,small,507x507-pad,600x600,f8f8f8.jpg',
      alt:
        'A pigeon with a cracking set of legs.',
    },
  },
];

export default samplePosts;
