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
  heroDownload: 'POBIERZ NASZ STATUT (PDF)',


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
      id: 'publikacja',
      title: 'Cykl webinariów „Dobra publikacja”',
      description: 'To seria spotkań online poświęconych praktycznym aspektom przygotowywania i publikowania artykułów naukowych w międzynarodowych czasopismach.',
      image: '/images/project1.jpg',
      desc: `To seria spotkań online poświęconych praktycznym aspektom przygotowywania i publikowania artykułów naukowych w międzynarodowych czasopismach. Program został stworzony z myślą o doktorantach i młodych badaczach z krajów Europy Wschodniej i Kaukazu, którzy chcą podnieść swoje kompetencje publikacyjne oraz zwiększyć widoczność naukową w środowisku międzynarodowym. Uczestnicy poznają proces tworzenia wartościowych badań, zasady pisania dobrych artykułów oraz kluczowe elementy skutecznego procesu publikacyjnego.
W trakcie seminariów i warsztatów uczestnicy zdobędą wiedzę niezbędną do świadomego projektowania badań oraz przygotowywania tekstów zgodnych z wymogami czasopism naukowych. Program oferuje m.in.:
- praktyczne wskazówki dotyczące formułowania celu badań, pytań i hipotez,
- omówienie struktury artykułu empirycznego i pracy z recenzentami,
- wiedzę o wyborze odpowiedniego czasopisma i właściwym przygotowaniu zgłoszenia publikacyjnego.
Pełen plan tematyczny znajduje się poniżej opisu. Osoby, które zapiszą się na wszystkie webinary, otrzymają zniżkę -25%.
 
Spotkania realizowane są online na platformie Google Meet i prowadzone w trzech językach: angielskim, rosyjskim i ukraińskim - w zależności od prowadzącego (dr Maciej Tarkowski oraz prof. UG Aleksander Kuczabski). Dokładne daty poszczególnych spotkań oraz język danego webinaru zostaną podane wkrótce.
`,
      details: {
        intro: 'Cykl webinarów pt. „Dobra publikacja” składa się z pięciu interaktywnych seminariów internetowych i warsztatów.',
        sessions: [
          {
            id: 'pub1',
            title: 'Jak przeprowadzić wartościowe badanie naukowe',
            date: 'orientacyjnie 5 grudnia 2025',
            price: 30,
            time: '1.5h',
            values: ['Poszukiwanie luki badawczej', 'Sformułowanie celu badań, pytań lub hipotez badawczych', 'Studia literaturowe - narracyjny i systematyczny przegląd literatury',
              'Studia empiryczne - zakres versus głębia wnioskowania, metody ilościowe i jakościowe, metoda triangulacji w badaniach społecznych', 'Dyskusja wyników i ich znaczenie dla stanu wiedzy naukowej'
            ]
          },
          {
            id: 'pub2',
            title: 'Jak napisać dobry artykuł',
            date: 'orientacyjnie 12 grudnia 2025',
            price: 30,
            time: '1.5h',
            values: ['Pięć złotych zasad pisania artykułu naukowego', 'Typowa struktura artykułu empirycznego', 'Artykuł naukowy okiem recenzenta'
            ]
          },
          {
            id: 'pub3',
            title: 'Jak opublikować w dobrym czasopiśmie',
            date: 'orientacyjnie 19 grudnia 2025',
            price: 30,
            time: '1.5h',
            values: ['Charakterystyka czasopism naukowych', 'Kryteria wyboru czasopisma', 'Przestrzeganie instrukcji dla autorów', 'List przewodni do redaktora', 'Dialog z recenzentami'
            ]
          },
          {
            id: 'pub4',
            title: 'Jak znaleźć odpowiednie czasopismo dla naszego artykułu',
            date: 'orientacyjnie 8-14 grudnia 2025',
            price: 50,
            time: '1.5h',
          },
          {
            id: 'pub5',
            title: 'Jak prawidłowo złożyć artykuł do publikacji',
            date: 'orientacyjnie 15-22 grudnia 2025',
            price: 50,
            time: '1.5h',
          },
        ],
        packagePrice: 300,
        notes: 'Uczestnicy otrzymają certyfikat ukończenia. Webinary będą prowadzone w języku polskim i angielskim.',
        contact: 'kontakt@isef.pl',
      },
      cta: 'Sprawdź terminy',
      cta2: 'Zapisz się',
    },
    {
      id: 'uniwersytet',
      title: 'Cykl Webinarów Naukowych dla Młodych Badaczy',
      description: 'Program edukacyjny w formie online wspierający rozwój kompetencji naukowych i publikacyjnych młodych badaczy.',
      image: '/images/project1.jpg',
      desc: `Inicjatywa edukacyjna skierowana do młodych naukowców i doktorantów, oferująca zajęcia w formule zdalnej po polsku, angielsku, rosyjsku. Program ma na celu rozwój kompetencji badawczych i prowadzone będą przez doświadczonych pracowników naukowych Uniwersytetu Gdańskiego. Cykl webinarów to forma praktycznej edukacji akademickiej, umożliwiająca uczestnikom zdobycie wiedzy o specyfice publikowania w czasopismach indeksowanych w bazach Scopus i Web of Science, rozwijanie warsztatu naukowego oraz budowanie sieci współpracy międzynarodowej.`,
      details: {
        intro: 'Cykl składa się z trzech spotkań online prowadzonych przez wykładowców Uniwersytetu Gdańskiego.',
        sessions: [
          {
            id: 'uni1',
            title: 'Jak publikować w czasopismach naukowych Scopus i WoS',
            date: '15 listopada 2025',
            price: 120,
            time: '17:00–19:00',
          },
          {
            id: 'uni2',
            title: 'Budowanie współpracy międzynarodowej w badaniach',
            date: '22 listopada 2025',
            price: 120,
            time: '17:00–19:00',
          },
          {
            id: 'uni3',
            title: 'Warsztat badacza: metodologia i etyka',
            date: '29 listopada 2025',
            price: 120,
            time: '17:00–19:00',
          },
        ],
        packagePrice: 300,
        notes: 'Uczestnicy otrzymają certyfikat ukończenia. Webinary będą prowadzone w języku polskim i angielskim.',
        contact: 'kontakt@isef.pl',
      },
      cta: 'Sprawdź terminy',
      cta2: 'Zapisz się',
    },

    {
      id: 'staze',
      title: 'Staże naukowe w Gdańsku',
      description: 'Program badawczy z opieką mentorską dla młodych naukowców z krajów Partnerstwa Wschodniego.',
      image: '/images/project3.jpg',
      desc: `Program płatnych staży dla młodych naukowców i studentów z krajów Partnerstwa Wschodniego, umożliwiający im prowadzenie badań i zdobywanie doświadczenia w instytucjach akademickich i miejskich w Gdańsku. Staże wzbogacane są o wizyty studyjne, by lepiej zrozumieć mechanizmy funkcjonowania nowoczesnych społeczności lokalnych.
      Program ma na celu wspieranie rozwoju kariery akademickiej oraz tworzenie długofalowych więzi między środowiskami naukowymi Polski i Ukrainy.`,
      details: {
        intro: `Program stażowy realizowany jest w partnerstwie z Uniwersytetem Gdańskim oraz instytucjami miejskimi. 
    Uczestnicy przez trzy tygodnie biorą udział w badaniach naukowych, szkoleniach i wizytach studyjnych.`,

        sessions: [
          {
            id: 'staz1',
            title: 'Moduł I: Wprowadzenie do badań społecznych i miejskich',
            date: '1–7 lipca 2025',
            price: 600,
            time: '09:00–15:00',
          },
          {
            id: 'staz2',
            title: 'Moduł II: Praca badawcza w instytucjach gdańskich',
            date: '8–14 lipca 2025',
            price: 600,
            time: '09:00–15:00',
          },
          {
            id: 'staz3',
            title: 'Moduł III: Prezentacja wyników i mentoring naukowy',
            date: '15–21 lipca 2025',
            price: 600,
            time: '09:00–15:00',
          },
        ],

        packagePrice: 1500,
        notes: `Program obejmuje łącznie 60 godzin zajęć praktycznych i warsztatowych. 
    Uczestnicy otrzymują certyfikat oraz indywidualne rekomendacje mentorskie. 
    Język programu: polski i angielski.`,

        contact: 'kontakt@isef.pl',
      },
      cta: 'Sprawdź terminy',
      cta2: 'Zapisz się',
    },
    // {
    //   id: 'plomyk',
    //   title: 'Płomyk nadziei',
    //   description: '10-dniowe wizyty edukacyjno-kulturowe dla młodzieży z Ukrainy.',
    //   image: '/images/project2.png',
    //   desc: `Edukacyjno-integracyjne wizyty w Gdańsku dla dzieci i młodzieży z Ukrainy, których rodziny zostały dotknięte wojną. Tygodniowe wyjazdy mają na celu nie tylko poznanie historii i kultury miasta, ale także budowanie poczucia bezpieczeństwa, przynależności i możliwości przyszłego życia w Polsce.
    //   Program daje młodym uczestnikom szansę na chwilę oddechu od wojennej rzeczywistości oraz poznanie rówieśników z Polski.`,
    //   cta: 'Dołącz do turnusu',
    // },
  ],
  signup: {
    title: 'Formularz zgłoszeniowy',
    fields: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
    },
    labels: {
      choose: 'Wybierz webinary, w których chcesz uczestniczyć:',
      newsletter: 'Zapisz mnie do newslettera',
      terms: 'Akceptuję',
      termsLink: 'regulamin',
      rodoLink: 'RODO',
      total: 'Łączna kwota:',
      submit: 'Wyślij zgłoszenie',
    },
    payment: {
      title: 'Dane do przelewu',
      account:
        'Fundacja ISEF\nNr konta: 12 3456 7890 1234 5678 9012 3456\nTytuł: Imię i nazwisko + „Webinar ISEF”',
      email: 'kontakt@isef.pl',
      note: 'Potwierdzenie przelewu prosimy wysłać na powyższy adres e-mail.',
    },
    links: {
      terms: '/files/regulamin.pdf',
      rodo: '/files/rodo.pdf',
    },
  },


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
        id: 'AK',
        name: 'dr hab. Aleksander Kuczabski',
        photo: '/images/1.png',
        bio: 'Przewodniczący Rady Fundacji - urodzony we Lwowie, związany z Uniwersytetem Gdańskim, gdzie pracuje jako profesor w Zakładzie Rozwoju Regionalnego. Doktor habilitowany nauk o Ziemi w dyscyplinie geografia (nostryfikacja dyplomu doktora nauk z zarządzania państwowego, Ukraina), absolwent Lwowskiego Uniwersytetu Państwowego im. I. Franki oraz Krajowej Szkoły Administracji Publicznej w Warszawie. Wcześniej pełnił funkcje kierownicze w administracji publicznej i szkolnictwie wyższym na Ukrainie, a także był stypendystą programu im. Lane’a Kirklanda Polsko-Amerykańskiej Komisji Fulbrighta. Naukowo zajmuje się problematyką zarządzania publicznego, reformami terytorialnymi i rozwojem regionalnym w Polsce i na Ukrainie. W działaniach Fundacji łączy doświadczenie naukowe i administracyjne, wspierając wymianę wiedzy i dobrych praktyk między oboma krajami.'
      },
      {
        id: 'OZ',
        name: 'dr Olha Zadorozhna',
        photo: '/images/2.png',
        bio: 'Prezes Zarządu Fundacji - urodzona w Charkowie na Ukrainie, obecnie związana z Gdańskiem. Absolwentka i wykładowczyni Narodowego Uniwersytetu im. W. N. Karazina w Charkowie, doktor nauk ekonomicznych w zakresie teorii ekonomii i historii myśli ekonomicznej, posiadająca tytuł profesora nadzwyczajnego, członkini Akademii Nauk Ekonomicznych Ukrainy oraz Centrum Ukraińsko-Europejskiej Współpracy Naukowej . Doświadczenie zawodowe łączy z działalnością naukową i dydaktyczną, m.in. w zakresie gospodarki światowej, ekonomii narodowej i odpowiedzialności społecznej. Uczestniczka stażu naukowo-dydaktycznego na Uniwersytecie Gdańskim. W działaniach Fundacji kieruje się ideą współpracy międzynarodowej i rozwoju nauki opartej na wartościach humanistycznych, wierząc, że nauka i duchowa twórczość mogą współtworzyć nowoczesne społeczeństwo obywatelskie.'
      },
      {
        id: 'PB',
        name: 'Patryk Bławat',
        photo: '/images/patryk.png',
        bio: 'Koordynator projektów - założyciel stowarzyszenia „Wiatr od Morza”, które od 2021 roku realizuje inicjatywy w ramach budżetu obywatelskiego, organizuje wydarzenia kulturalne i popularyzuje wiedzę o historii oraz tożsamości Gdyni. Od 2024 roku pełni funkcję radnego Dzielnicy Gdynia Cisowa, angażując się w działania na rzecz zrównoważonego rozwoju i aktywności obywatelskiej. Student gospodarki przestrzennej Uniwersytetu Gdańskiego, łączy pasję do miast z naukowymi badaniami nad ich przyszłością. W swojej pracy dąży do łączenia lokalnego doświadczenia z szeroką, długofalową wizją rozwoju - postrzega planowanie przestrzenne jako formę odpowiedzialnego projektowania przyszłości społecznej.'
      },
      {
        id: 'DI',
        name: 'Dominik Igelski',
        photo: '/images/dominik.jpeg',
        bio: 'Członek Rady Fundacji - urodzony w Działdowie w województwie Warmińsko-mazurskim. Absolwent Uniwersytetu Gdańskiego mgr Gospodarki przestrzennej, obecnie pracownik Wydziału Urbanistyki i Architektury Urządu Miejskiego w Gdańsku. Człowiek lubiący udzielać się na wielu polach i starający się dążyć do perfekcji w stawianych sobie celach i wyzwaniach, wierzący, że silna i zaangażowana społeczność jest kluczem do sukcesu co stawia sobie jako priorytet włączając się w działanie Fundacji.'
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
    projectIntern: 'Staże naukowe',
    message: 'Wiadomość',
    rodo1: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celach kontaktowych.',
    rodo2: 'Potwierdzam zapoznanie się z polityką prywatności.',
    submit: 'Wyślij',
    confirmation: 'Dziękujemy za przesłanie formularza!'
  },

  footer: {
    logoTitle: 'Fundacja',
    logoText: 'INTERNATIONAL SCIENTIFIC AND EDUCATIONAL FORUM',
    contactTitle: 'Dane kontaktowe',
    addressLabel: 'Adres',
    address: 'ul. Jana Heweliusza 11/811, 80-890 Gdańsk',
    krs: '0001162327',
    nip: '5833533208',
    regon: '54121717200000',
    navTitle: 'Nawigacja',
    socialTitle: 'Znajdziesz nas',
    copy: 'Fundacja. Wszelkie prawa zastrzeżone.'
  },

  news: [
    {
      title: 'Trwają zapisy na webinary!',
      text: 'Rozpoczynamy zapisy na cykl pięciu webinariów „Dobra publikacja”, skierowany do doktorantów i młodych badacz, którzy chcą podnieść swoje kompetencje publikacyjne. Uczestnicy poznają praktyczne zasady przygotowywania badań, pisania artykułów oraz skutecznego procesu publikacji w międzynarodowych czasopismach. Spotkania odbędą się online w trzech wariantach językowych: angielskim, rosyjskim i ukraińskim, a prowadzone będą przez dr. Macieja Tarkowskiego oraz prof. UG Aleksandra Kuczabskiego. Osoby zapisujące się na cały cykl otrzymają zniżkę -25%.',
      button: 'Sprawdź terminy',
      image: '/images/webinar.jpg',
      date: '20.11.2025'
    },
    {
      title: 'Wizyta Pani dr Olgi Dorokhina z St. King Tamar University w Tbilisi.',
      text: `Miło nam poinformować, że Gdańsk odwiedziła Pani dr Olga Dorokhina z St. King Tamar University w Tbilisi. Wizyta odbyła się na zaproszenie Fundacji ISEF i stanowiła okazję do rozmów o możliwych kierunkach współpracy oraz zaangażowania Pani Doktor w przyszłe projekty Fundacji.
W ramach wizyty Pani dr Dorokhina wygłosiła również referat pt. „Borderization in Georgia as a Gray Zone Instrument for Institutionalizing Ambiguity” w Instytucie Geografii Społeczno-Ekonomicznej i Gospodarki Przestrzennej Uniwersytetu Gdańskiego, spotykając się z dużym zainteresowaniem ze strony pracowników i studentów.
Mimo niesprzyjającej pogody udało się pokazać gościowi uroki Gdańska oraz opowiedzieć o historii miasta i jego współczesnych wyzwaniach. Wizyta zapowiada dalszą, obiecującą współpracę.
`,
      image: '/images/wizyta.jpg',
      date: '19.11.2025'
    },
    {
      title: 'Koncert charytatywny na rzecz młodych talentów',
      text: '20 sierpnia 2025 r. zorganizowaliśmy koncert charytatywny w centrum Gdańska, podczas którego wystąpili młodzi artyści z regionu. Dochód z wydarzenia przeznaczony został na stypendia dla utalentowanej młodzieży z trudnych środowisk. Dzięki wsparciu mieszkańców udało się zebrać ponad 50 000 zł!',
      image: '/images/project1.jpg',
      date: '20.08.2025'
    },
    {
      title: 'Fundacja rozpoczyna nowy projekt "Most Pokoleń"',
      text: 'Projekt "Most Pokoleń" ma na celu połączenie seniorów z młodzieżą poprzez cykl spotkań, wspólne działania artystyczne i warsztaty. Inauguracja odbyła się 10 sierpnia 2025 r. w Gdańsku. Uczestnicy mogli spróbować swoich sił w malarstwie, fotografii i tradycyjnym rękodziele. To dopiero początek serii wydarzeń, które będą odbywać się co miesiąc.',
      image: '/images/project1.jpg',
      date: '10.08.2025'
    },
    {
      title: 'Warsztaty kulturowe dla młodzieży z Ukrainy',
      text: '2 sierpnia 2025 roku odbyły się wyjątkowe warsztaty integracyjne, w których wzięło udział ponad 40 młodych uczestników z Polski i Ukrainy. W programie znalazły się spotkania z lokalnymi artystami, nauka języka polskiego oraz zajęcia kreatywne. Dzięki wsparciu partnerów udało się stworzyć przestrzeń do dialogu międzykulturowego i budowania nowych przyjaźni.',
      image: '/images/project1.jpg',
      date: '02.08.2025'
    },
  ]
}