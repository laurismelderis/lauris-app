export interface CvEntry {
  day?: number
  month: number
  year: number
  title?: string
  description?: string
}

export const cvEntries: Array<CvEntry> = [
  {
    day: 13,
    month: 9,
    year: 2000,
    title: 'Born date',
  },
  {
    day: 1,
    month: 9,
    year: 2007,
    title: 'Started Rigas 84th secondary school',
    description: 'My favorite subject was actually **math**, only then sports.',
  },
  {
    month: 6,
    year: 2016,
    title: 'The very first "Hello world!" in Pascal',
    description:
      'I always wanted to be a hacker. So at this month, when the summer break started, I heared from my friend that he started to program in Pascal. So, I thought that I should keep up. This was the moment when my very first program was written.',
  },
  {
    day: 1,
    month: 7,
    year: 2017,
    title: 'Rīgas Domes Īpašuma Departaments (Riga City Council)',
    description:
      'Started my very first job as an Archivist. My job was to digitalize physical documents and sort them in the right structure. Worked for 2 months.',
  },
  {
    day: 31,
    month: 5,
    year: 2019,
    title: 'Graduated Rigas 84th secondary school',
    description:
      'Earned primary and secondary school diploma. Graduated with honors from the school activist parliament, for providing a great assistance for 5 years.',
  },
  {
    day: 1,
    month: 9,
    year: 2019,
    title: 'Started Rigas Techincal University at IT',
    description:
      'Initiated bachelors at IT in Rigas Technical University, at computer science and information technologies faculty.',
  },
  {
    day: 5,
    month: 5,
    year: 2021,
    title: 'Started journey at Accenture as intern',
    description:
      'Learned Spring Boot, and other frontend technologies - HTML, CSS and JavaScript. Created sample quiz project using the previously mentioned technologies. Learned React, Redux, Jest and Node.js.',
  },
  {
    day: 1,
    month: 9,
    year: 2021,
    title: 'Joined Accenture',
    description:
      'When I joined Accenture, at first I was working as junior SAP HANA engineer. But very quickly, I realised that it was not for me. So, my frontend professional experience had began.',
  },
  {
    day: 31,
    month: 5,
    year: 2022,
    title: 'Graduated Rigas Techincal University at IT',
    description:
      'Graduated computer science and information technology faculty. Received computer engineer degree.',
  },
]
