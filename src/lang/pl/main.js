export default {
  navbar: {
    about: 'O nas',
    priorities: 'Priorytety',
    mission: 'Misja',
    projects: 'Projekty',
    partners: 'Partnerzy',
    news: 'Aktualności',
    contact: 'Kontakt',
    foundation: 'Fundacja'
  },
  heroTitleLines: [
    'ŁĄCZYMY NAUKĘ,',
    'EDUKACJĘ I SPOŁECZNĄ',
    'SOLIDARNOŚĆ NA RZECZ',
    'MIĘDZYNARODOWEGO ',
    'DIALOGU'
  ],
  heroButton: 'KONTAKT',


  priorities: {
    title: 'Priorytety na rok 2025',
    intro: 'Tegoroczne działania koncentrują się na wsparciu obywateli Ukrainy dotkniętych wojną.',
    what: 'Co?',
    who: 'Kto?',
    why: 'Dlaczego?',
    items: [
      {
        area: 'Edukacja integracyjna',
        what: 'Hybrydowe kursy języka polskiego, warsztaty adaptacyjne, mentoring',
        who: 'Migranci wojenni w Polsce',
        why: 'Ułatwienie startu zawodowego i społecznego'
      },
      {
        area: 'Promocja polskiej kultury i nauki',
        what: 'Wizyty studyjne „Płomyk nadziei” w Gdańsku',
        who: 'Młodzież z Ukrainy (14–18 lat)',
        why: 'Budowanie pozytywnych relacji i zachęcanie do studiów w Polsce'
      },
      {
        area: 'Współpraca naukowa',
        what: 'Staże badawcze, seminaria i publikacje',
        who: 'Naukowcy z Ukrainy',
        why: 'Transfer wiedzy, wspólne projekty badawcze'
      },
    ]
  },


  projects: [
    {
      id: 'uniwersytet',
      title: 'Ogólnopolski Uniwersytet Trzeciego Wieku dla Ukraińców',
      description: 'Program edukacyjny w formie hybrydowej wspierający rozwój i integrację seniorów z Ukrainy.',
      image: '/images/project1.jpg',
      desc: `Inicjatywa edukacyjna skierowana do osób starszych pochodzenia ukraińskiego, oferująca zajęcia w
      formule hybrydowej lub zdalnej. Program ma na celu aktywizację społeczną i integrację
                    międzypokoleniową, a jego realizacja zakłada współpracę z samorządem lokalnym, w tym pozyskanie
                    odpowiedniego lokalu.
                    Uniwersytety Trzeciego Wieku to forma nieformalnej edukacji dorosłych, pozwalająca seniorom rozwijać
                    zainteresowania, zdobywać wiedzę i budować więzi społeczne.`,

      cta: 'Dołącz do nas',
    },
    {
      id: 'plomyk',
      title: 'Płomyk nadziei',
      description: '10-dniowe wizyty edukacyjno-kulturowe dla młodzieży z Ukrainy.',
      image: '/images/project2.png',
      desc: `Edukacyjno-integracyjne wizyty w Gdańsku dla dzieci i młodzieży z Ukrainy, których rodziny zostały dotknięte wojną. Tygodniowe wyjazdy mają na celu nie tylko poznanie historii i kultury miasta, ale także budowanie poczucia bezpieczeństwa, przynależności i możliwości przyszłego życia w Polsce.
      Program daje młodym uczestnikom szansę na chwilę oddechu od wojennej rzeczywistości oraz poznanie rówieśników z Polski.`,
      cta: 'Dołącz do turnusu',
    },
    {
      id: 'staze',
      title: 'Staże naukowe w Gdańsku',
      description: 'Program badawczy z opieką mentorską dla młodych naukowców z Ukrainy.',
      image: '/images/project3.jpg',
      desc: `Program płatnych staży dla młodych naukowców i studentów z Ukrainy, umożliwiający im prowadzenie badań i zdobywanie doświadczenia w instytucjach akademickich i miejskich w Gdańsku. Staże wzbogacane są o wizyty studyjne, by lepiej zrozumieć mechanizmy funkcjonowania nowoczesnych społeczności lokalnych.
      Program ma na celu wspieranie rozwoju kariery akademickiej oraz tworzenie długofalowych więzi między środowiskami naukowymi Polski i Ukrainy.`,
      cta: 'Aplikuj na staż',
    },
  ],

  partners: {
    title: 'Partnerzy',
    strategic: [
      { name: 'Miasto Gdańsk', logo: '/images/gd.png' },
      { name: 'Instytut Metropolitalny', logo: '/images/partners/metropolitalny.png' },
      { name: 'Uniwersytet Gdański', logo: '/images/ug.png' }
    ],
    network: [
      { name: 'Migranci NGO', logo: '/images/ngo.jpg' },
      { name: 'Szkoły', logo: '/images/partners/szkoly.png' },
      { name: 'Biblioteki', logo: '/images/partners/biblioteki.png' }
    ]
  },


  mission: {
    title: 'Nasza misja',
    motto: 'Łączymy naukę, edukację i społeczną solidarność na rzecz międzynarodowego dialogu.',
    goals: [
      {
        title: 'Badania i rozwój nauki',
        description: 'Dążymy do wspierania badań i projektów w dziedzinie nauk społecznych i humanistycznych oraz do efektywnego zarządzania funduszami naukowymi.',
        icon: 'FlaskConical' // eksperymenty, badania
      },
      {
        title: 'Wspieranie edukacji',
        description: 'Naszym celem jest podnoszenie jakości kształcenia, rozwój oświaty, wychowania i kompetencji – zarówno w Polsce, jak i za granicą.',
        icon: 'GraduationCap' // edukacja, nauka
      },
      {
        title: 'Dialog międzykulturowy',
        description: 'Chcemy budować przyjazne relacje między krajami poprzez rozwój dyplomacji społecznej oraz wymiany kulturowej i artystycznej.',
        icon: 'Users' // spotkania, relacje
      },
      {
        title: 'Międzynarodowa współpraca',
        description: 'Zależy nam na rozwijaniu współpracy między instytucjami edukacyjnymi, organizacjami, samorządami i partnerami z różnych państw.',
        icon: 'Globe2' // współpraca międzynarodowa
      },
      {
        title: 'Promocja Polski',
        description: 'Dążymy do upowszechniania języka polskiego, kultury, nauki oraz dziedzictwa transformacji ustrojowej na arenie międzynarodowej.',
        icon: 'Flag' // symbol kraju, promocja Polski
      },
      {
        title: 'Wymiana doświadczeń',
        description: 'Chcemy dzielić się polskim doświadczeniem integracji europejskiej i reform – zwłaszcza z krajami Partnerstwa Wschodniego.',
        icon: 'Share2' // wymiana, dzielenie się
      },
      {
        title: 'Wzmacnianie społeczeństwa obywatelskiego',
        description: 'Naszą misją jest promowanie samorządności, społeczeństwa obywatelskiego, gospodarki rynkowej i towarzyszących im reform.',
        icon: 'Building' // społeczność, struktury
      },
      {
        title: 'Wsparcie dla uchodźców i migrantów',
        description: 'Dążymy do wspierania uchodźców wojennych i migrantów w ich integracji społecznej i adaptacji kulturowej w Polsce.',
        icon: 'HelpingHand' // pomoc, wsparcie
      }
    ],

    values: [
      'Niezależność polityczna',
      'Różnorodność kulturowa',
      'Otwartość na współpracę',
      'Odpowiedzialność społeczna'
    ]
  },

  board: {
    title: 'Członkowie zarządu',
    members: [
      {
        id: 'patryk-blawat',
        name: 'Patryk Bławat',
        photo: '/images/patryk.png',
        bio: 'Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku radny Dzielnicy Gdynia Cisowa oraz członek Gdyńskiego Komitetu Rewitalizacji. Student gospodarki przestrzennej — łączy działalność społeczną z planowaniem przestrzennym i rozwojem lokalnym.'
      },
      {
        id: 'patryk-blawat',
        name: 'Patryk Bławat',
        photo: '/images/patryk.png',
        bio: 'Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku radny Dzielnicy Gdynia Cisowa oraz członek Gdyńskiego Komitetu Rewitalizacji. Student gospodarki przestrzennej — łączy działalność społeczną z planowaniem przestrzennym i rozwojem lokalnym.'
      },
      {
        id: 'patryk-blawat',
        name: 'Patryk Bławat',
        photo: '/images/patryk.png',
        bio: 'Założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje projekty w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o Gdyni. Od 2024 roku radny Dzielnicy Gdynia Cisowa oraz członek Gdyńskiego Komitetu Rewitalizacji. Student gospodarki przestrzennej — łączy działalność społeczną z planowaniem przestrzennym i rozwojem lokalnym.'
      },
    ]
  },

  contact: {
    title: 'Formularz kontaktowy',
    name: 'Imię',
    surname: 'Nazwisko',
    email: 'E-mail',
    phone: 'Telefon',
    topic: 'Temat',
    topicPlaceholder: 'Wybierz temat...',
    topicContact: 'Kontakt ogólny',
    topicProject: 'Zgłoszenie do projektu',
    project: 'Wybierz projekt',
    projectPlaceholder: 'Wybierz projekt...',
    projectUni: 'Uniwersytet III Wieku',
    projectPlomyk: 'Płomyk nadziei',
    projectIntern: 'Staże naukowe',
    message: 'Wiadomość',
    rodo1: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celach kontaktowych.',
    rodo2: 'Potwierdzam zapoznanie się z polityką prywatności.',
    submit: 'Wyślij',
    confirmation: 'Dziękujemy za przesłanie formularza!'
  },

  footer: {
    logoTitle: 'Fundacja ISEF',
    logoText: 'INTERNATIONAL SCIENTIFIC AND EDUCATIONAL FORUM',
    contactTitle: 'Dane kontaktowe',
    addressLabel: 'Adres',
    address: 'ul. Jana Heweliusza 11/811, 80-890 Gdańsk',
    krs: '0001162327',
    nip: '5835533208',
    regon: '54121717200000',
    navTitle: 'Nawigacja',
    socialTitle: 'Znajdziesz nas',
    copy: 'Fundacja. Wszelkie prawa zastrzeżone.'
  },

  news: [
    {
      title: 'Warsztaty kulturowe dla młodzieży z Ukrainy',
      text: '2 sierpnia 2025 roku odbyły się wyjątkowe warsztaty integracyjne, w których wzięło udział ponad 40 młodych uczestników z Polski i Ukrainy. W programie znalazły się spotkania z lokalnymi artystami, nauka języka polskiego oraz zajęcia kreatywne. Dzięki wsparciu partnerów udało się stworzyć przestrzeń do dialogu międzykulturowego i budowania nowych przyjaźni.',
      image: '/images/project1.jpg',
      date: '02.08.2025'
    },
    {
      title: 'Fundacja rozpoczyna nowy projekt "Most Pokoleń"',
      text: 'Projekt "Most Pokoleń" ma na celu połączenie seniorów z młodzieżą poprzez cykl spotkań, wspólne działania artystyczne i warsztaty. Inauguracja odbyła się 10 sierpnia 2025 r. w Gdańsku. Uczestnicy mogli spróbować swoich sił w malarstwie, fotografii i tradycyjnym rękodziele. To dopiero początek serii wydarzeń, które będą odbywać się co miesiąc.',
      image: '/images/project1.jpg',
      date: '10.08.2025'
    },
    {
      title: 'Koncert charytatywny na rzecz młodych talentów',
      text: '20 sierpnia 2025 r. zorganizowaliśmy koncert charytatywny w centrum Gdańska, podczas którego wystąpili młodzi artyści z regionu. Dochód z wydarzenia przeznaczony został na stypendia dla utalentowanej młodzieży z trudnych środowisk. Dzięki wsparciu mieszkańców udało się zebrać ponad 50 000 zł!',
      image: '/images/project1.jpg',
      date: '20.08.2025'
    }
  ]
}