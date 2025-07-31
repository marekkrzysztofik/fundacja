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
    'MIĘDZYNARODOWEGO DIALOGU'
  ],
  heroButton: 'KONTAKT',


  priorities: {
    title: 'Priorytety na rok 2025',
    intro: 'Tegoroczne działania koncentrują się na wsparciu obywateli Ukrainy dotkniętych wojną.',
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
      image: '/images/project1.png',
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
      image: '/images/project3.png',
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


  team: {
    title: 'O nas',
    subtitle: 'Poznaj osoby zaangażowane w działania Fundacji.',
    members: [
      {
        name: 'Anna Kowalska',
        role: 'Prezeska Fundacji',
        photo: '/images/team/anna.jpg'
      },
      {
        name: 'Jan Nowak',
        role: 'Koordynator projektów',
        photo: '/images/team/jan.jpg'
      },
      {
        name: 'Olena Petrenko',
        role: 'Specjalistka ds. integracji',
        photo: '/images/team/olena.jpg'
      }
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
}