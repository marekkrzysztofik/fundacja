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
      title: 'National University of the Third Age for Ukrainians',
      description: 'A hybrid educational program supporting the development and integration of Ukrainian seniors.',
      image: '/images/project1.jpg',
      desc: `An educational initiative for older people of Ukrainian origin, offering hybrid or online classes. 
      The program aims to foster social activity and intergenerational integration. It involves cooperation 
      with local governments, including securing a suitable venue. 
      Universities of the Third Age are a form of informal adult education that allow seniors to explore 
      interests, gain knowledge, and build social connections.`,
      cta: 'Join us',
    },
    {
      id: 'plomyk',
      title: 'Flame of Hope',
      description: '10-day educational and cultural visits for Ukrainian youth.',
      image: '/images/project2.png',
      desc: `Educational and integrative visits to Gdańsk for children and youth from war-affected Ukrainian families. 
      These week-long trips aim to introduce participants to the history and culture of the city while fostering 
      a sense of safety, belonging, and possibilities for future life in Poland. 
      The program offers young participants a break from the war and a chance to connect with Polish peers.`,
      cta: 'Join the trip',
    },
    {
      id: 'staze',
      title: 'Scientific Internships in Gdańsk',
      description: 'A research program with mentoring support for young Ukrainian scientists.',
      image: '/images/project3.jpg',
      desc: `A paid internship program for young researchers and students from Ukraine, allowing them to conduct 
      research and gain experience in academic and municipal institutions in Gdańsk. 
      The internships include study visits to help participants understand how modern local communities function. 
      The program aims to support academic careers and foster long-term bonds between Polish and Ukrainian 
      academic circles.`,
      cta: 'Apply for internship',
    }
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

  team: {
    title: 'About Us',
    subtitle: 'Meet the people behind the Foundation’s initiatives.',
    members: [
      {
        name: 'Anna Kowalska',
        role: 'President of the Foundation',
        photo: '/images/team/anna.jpg'
      },
      {
        name: 'Jan Nowak',
        role: 'Project Coordinator',
        photo: '/images/team/jan.jpg'
      },
      {
        name: 'Olena Petrenko',
        role: 'Integration Specialist',
        photo: '/images/team/olena.jpg'
      }
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
    logoText: 'We build bridges between cultures and generations.',
    contactTitle: 'Contact Information',
    addressLabel: 'Address',
    address: 'Jana Heweliusza St. 11/811, 80-890 Gdańsk, Poland',
    krs: '0001162327',
    nip: '5835533208',
    regon: '54121717200000',
    navTitle: 'Navigation',
    socialTitle: 'Find us',
    copy: 'Foundation. All rights reserved.'
  }
}
