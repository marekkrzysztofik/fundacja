export default {
  navbar: {
    about: 'About Us',
    priorities: 'Priorities',
    mission: 'Mission',
    projects: 'Projects',
    partners: 'Partners',
    news: 'News',
    contact: 'Contact',
    foundation: 'Foundation'
  },
  heroTitleLines: [
    'WE CONNECT SCIENCE,',
    'EDUCATION AND SOCIAL',
    'SOLIDARITY FOR THE',
    'INTERNATIONAL',
    'DIALOGUE'
  ],
  heroButton: 'CONTACT',
  heroDownload: 'DOWNLOAD OUR STATUTE (PDF)',

  priorities: {
    title: 'Priorities for 2025',
    intro: 'This year’s efforts focus on supporting Ukrainian citizens affected by the war.',
    what: 'What?',
    who: 'Who?',
    why: 'Why?',
    items: [
      {
        area: 'Integrative education',
        what: 'Hybrid Polish language courses, adaptation workshops, mentoring',
        who: 'War migrants in Poland',
        why: 'To facilitate professional and social integration'
      },
      {
        area: 'Promotion of Polish culture and science',
        what: '“Flame of Hope” study visits in Gdańsk',
        who: 'Ukrainian youth (14–18 years)',
        why: 'To build positive relations and encourage studies in Poland'
      },
      {
        area: 'Scientific cooperation',
        what: 'Research internships, seminars, and publications',
        who: 'Ukrainian researchers',
        why: 'Knowledge transfer and joint research projects'
      }
    ]
  },

  projects: [
  {
    id: 'uniwersytet',
    title: 'Scientific Webinar Series for Young Researchers',
    description: 'An online educational program supporting the development of research and publication skills among young scholars.',
    image: '/images/project1.jpg',
    desc: `An educational initiative aimed at young scientists and PhD students, offering remote sessions in Polish, English, and Russian. The program is designed to develop research competencies and is conducted by experienced academic staff of the University of Gdańsk. The webinar series is a form of practical academic education, enabling participants to gain knowledge about publishing in journals indexed in Scopus and Web of Science, improve their scientific skills, and build international research networks.`,
    cta: 'Coming soon',
  },
  {
    id: 'staze',
    title: 'Research Internships in Gdańsk',
    description: 'A research program with mentorship support for young scholars from Eastern Partnership countries.',
    image: '/images/project3.jpg',
    desc: `A paid internship program for young researchers and students from Eastern Partnership countries, enabling them to conduct research and gain experience in academic and municipal institutions in Gdańsk. The internships are enriched with study visits to better understand how modern local communities function.  
    The program aims to support academic career development and build long-term connections between the scientific communities of Poland and Ukraine.`,
    cta: 'Coming soon',
  },
],

  partners: {
    title: 'Partners',
    strategic: [
      { name: 'City of Gdańsk', logo: '/images/gd.png' },
      { name: 'Metropolitan Institute', logo: '/images/partners/metropolitalny.png' },
      { name: 'University of Gdańsk', logo: '/images/ug.png' }
    ],
    network: [
      { name: 'Migrants NGO', logo: '/images/ngo.jpg' },
      { name: 'Schools', logo: '/images/partners/szkoly.png' },
      { name: 'Libraries', logo: '/images/partners/biblioteki.png' }
    ]
  },

  mission: {
    title: 'Our Mission',
    motto: 'We connect science, education and social solidarity for international dialogue.',
    goals: [
      {
        title: 'Research and scientific development',
        description: 'We support research and projects in the fields of social sciences and humanities, as well as effective management of scientific funds.',
        icon: 'FlaskConical'
      },
      {
        title: 'Supporting education',
        description: 'Our goal is to improve the quality of education, and develop learning, upbringing, and skills – both in Poland and abroad.',
        icon: 'GraduationCap'
      },
      {
        title: 'Intercultural dialogue',
        description: 'We want to build friendly international relations through social diplomacy and cultural/artistic exchange.',
        icon: 'Users'
      },
      {
        title: 'International cooperation',
        description: 'We strive to develop cooperation between educational institutions, organizations, local governments, and partners from various countries.',
        icon: 'Globe2'
      },
      {
        title: 'Promotion of Poland',
        description: 'We promote the Polish language, culture, science, and the legacy of democratic transformation abroad.',
        icon: 'Flag'
      },
      {
        title: 'Exchange of experiences',
        description: 'We share Poland’s experience in European integration and reform – especially with Eastern Partnership countries.',
        icon: 'Share2'
      },
      {
        title: 'Empowering civil society',
        description: 'We promote self-governance, civil society, a market economy, and accompanying reforms.',
        icon: 'Building'
      },
      {
        title: 'Support for refugees and migrants',
        description: 'We support war refugees and migrants in their social integration and cultural adaptation in Poland.',
        icon: 'HelpingHand'
      }
    ],
    values: [
      'Political independence',
      'Cultural diversity',
      'Openness to cooperation',
      'Social responsibility'
    ]
  },

  board: {
    title: 'Board Members',
    members: [
      {
        id: 'AK',
        name: 'Dr hab. Aleksander Kuczabski',
        photo: '/images/1.png',
        bio: 'Chairman of the Foundation Council – born in Lviv, affiliated with the University of Gdańsk, where he works as a professor in the Department of Regional Development. Habilitated Doctor of Earth Sciences in geography (PhD in public management, Ukraine), graduate of Ivan Franko Lviv State University and the National School of Public Administration in Warsaw. Previously held managerial positions in public administration and higher education in Ukraine and was a Lane Kirkland Program Fellow of the Polish-American Fulbright Commission. His academic work focuses on public administration, territorial reforms, and regional development in Poland and Ukraine. Within the Foundation, he combines academic and administrative experience to support the exchange of knowledge and best practices between both countries.'
      },
      {
        id: 'OZ',
        name: 'Dr Olha Zadorozhna',
        photo: '/images/2.png',
        bio: 'President of the Foundation – born in Kharkiv, Ukraine, currently residing in Gdańsk. Graduate and lecturer of V. N. Karazin Kharkiv National University, Doctor of Economic Sciences in the field of economic theory and history of economic thought, Associate Professor, member of the Academy of Economic Sciences of Ukraine and the Center for Ukrainian-European Scientific Cooperation. Combines professional experience with research and teaching in global economy, national economy, and social responsibility. Completed a scientific and didactic internship at the University of Gdańsk. In her work within the Foundation, she is guided by the idea of international cooperation and the development of science based on humanistic values, believing that science and spiritual creativity can together shape a modern civil society.'
      },
      {
        id: 'PB',
        name: 'Patryk Bławat',
        photo: '/images/patryk.png',
        bio: 'Project Coordinator – founder of the association "Wiatr od Morza" ("Wind from the Sea"), which since 2021 has implemented initiatives within the participatory budget, organized cultural events, and promoted knowledge about the history and identity of Gdynia. Since 2024, he has served as a councilor of the Gdynia Cisowa District, engaging in activities for sustainable development and civic participation. A student of spatial economy at the University of Gdańsk, he combines his passion for cities with academic research on their future. In his work, he strives to merge local experience with a long-term vision of development, viewing spatial planning as a form of responsible design for the social future.'
      },
      {
        id: 'DI',
        name: 'Dominik Igelski',
        photo: '/images/user.png',
        bio: 'Member of the Foundation Council – born in Działdowo, Warmian-Masurian Voivodeship. Graduate of the University of Gdańsk (MSc in Spatial Economy), currently employed at the Department of Urban Planning and Architecture of the Gdańsk City Hall. A person who enjoys engaging in many areas and strives for perfection in his goals and challenges, believing that a strong and committed community is the key to success – a priority he upholds through his involvement in the Foundation.'
      },
    ]
  },


  contact: {
    title: 'Contact Form',
    name: 'First Name',
    surname: 'Last Name',
    email: 'E-mail',
    phone: 'Phone',
    topic: 'Topic',
    topicPlaceholder: 'Select a topic...',
    topicContact: 'General inquiry',
    topicProject: 'Project application',
    project: 'Select a project',
    projectPlaceholder: 'Select a project...',
    projectUni: 'University of the Third Age',
    projectPlomyk: 'Flame of Hope',
    projectIntern: 'Scientific Internships',
    message: 'Message',
    rodo1: 'I consent to the processing of my personal data for contact purposes.',
    rodo2: 'I confirm that I have read the privacy policy.',
    submit: 'Send',
    confirmation: 'Thank you for submitting the form!'
  },

  footer: {
    logoTitle: 'ISEF Foundation',
    logoText: 'INTERNATIONAL SCIENTIFIC AND EDUCATIONAL FORUM',
    contactTitle: 'Contact Information',
    addressLabel: 'Address',
    address: 'Jana Heweliusza St. 11/811, 80-890 Gdańsk, Poland',
    krs: '0001162327',
    nip: '5833533208',
    regon: '54121717200000',
    navTitle: 'Navigation',
    socialTitle: 'Find us',
    copy: 'Foundation. All rights reserved.'
  },

  news: [
    {
      title: 'Cultural Workshops for Youth from Ukraine',
      text: 'On August 2, 2025, unique integration workshops were held, attended by over 40 young participants from Poland and Ukraine. The program included meetings with local artists, Polish language lessons, and creative activities. Thanks to the support of our partners, we created a space for intercultural dialogue and building new friendships.',
      image: '/images/project1.jpg',
      date: '02.08.2025'
    },
    {
      title: 'The Foundation Launches a New Project "Bridge of Generations"',
      text: 'The "Bridge of Generations" project aims to connect seniors with young people through a series of meetings, joint artistic activities, and workshops. The inauguration took place on August 10, 2025, in Gdańsk. Participants had the opportunity to try painting, photography, and traditional handicrafts. This is just the beginning of a series of monthly events.',
      image: '/images/project1.jpg',
      date: '10.08.2025'
    },
    {
      title: 'Charity Concert for Young Talents',
      text: 'On August 20, 2025, we organized a charity concert in the center of Gdańsk, featuring young artists from the region. The proceeds from the event were allocated to scholarships for talented youth from disadvantaged backgrounds. Thanks to the support of residents, we managed to raise over 50,000 PLN!',
      image: '/images/project1.jpg',
      date: '20.08.2025'
    }
  ]
}
