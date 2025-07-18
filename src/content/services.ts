export const servicesContent = {
  landing: {
    title: 'I nostri servizi',
    subtitle:
      'Demolizione, movimento terra e gestione rifiuti, con un unico referente per tutto il progetto.',
    categories: [
      {
        id: 'demolizioni',
        title: 'Demolizioni complete',
        description:
          "Servizi completi di demolizione per qualsiasi struttura con un unico referente, dalla pianificazione alla consegna del sito. Gestiamo l'intero processo eliminando complessità e stress per il cliente.",
        image: '/img/demolizioni-complete.jpg',
        link: '/servizi/demolizioni',
        features: [
          'Demolizioni civili',
          'Demolizioni industriali',
          'Demolizioni specialistiche',
          'Gestione completa del progetto',
          'Unico punto di contatto',
          'Conformità normativa garantita',
        ],
      },
      {
        id: 'strip-out',
        title: 'Strip-out',
        description:
          "Eseguiamo servizi di strip-out per preparare gli spazi alla ristrutturazione o riqualificazione, minimizzando l'impatto sulle strutture adiacenti e garantendo la massima efficienza.",
        image: '/img/strip-out.jpg',
        link: '/servizi/strip-out',
        features: [
          'Rimozione di elementi non strutturali',
          'Preparazione per ristrutturazioni',
          'Minimizzazione dei disturbi',
          'Preservazione degli elementi da mantenere',
          'Recupero di materiali riutilizzabili',
          'Consegna area completata',
        ],
      },
      {
        id: 'bonifiche',
        title: 'Bonifiche ambientali',
        description:
          "Ci occupiamo di bonifiche ambientali e gestione sicura di materiali speciali, incluso l'amianto, con un focus sulla sicurezza, la conformità normativa e la tutela dell'ambiente.",
        image: '/img/servizio-bonifiche.jpg',
        link: '/servizi/bonifiche',
        features: [
          'Bonifica amianto',
          'Gestione materiali speciali',
          'Analisi e caratterizzazione',
          'Conformità normativa',
          'Certificazioni complete',
          "Soluzioni rispettose dell'ambiente",
        ],
      },
      {
        id: 'smaltimento-macchinari-industriali',
        title: 'Smaltimento macchinari industriali',
        description:
          'Servizio completo per lo smaltimento di macchinari e impianti industriali obsoleti o dismessi, con valorizzazione dei beni e rispetto delle normative ambientali.',
        image: '/img/rottami-metallici.jpg',
        link: '/servizi/smaltimento-macchinari-industriali',
        features: [
          'Sopralluogo e valutazione gratuita',
          'Bonifica e messa in sicurezza',
          'Smontaggio professionale',
          'Trasporto e smaltimento',
          'Valorizzazione beni dismessi',
          'Conformità normativa garantita',
        ],
      },
    ],
  },
  detail: {
    demolizioni: {
      id: 'demolizioni',
      title: 'Demolizioni complete',
      subtitle: 'Soluzioni complete con un unico referente',
      heroImage: '/img/demolizioni_01.jpg',
      description:
        'De.Sma.Re offre <span>servizi completi di demolizione</span> per strutture civili e industriali. Ci occupiamo di tutto il processo, dalla <span>pianificazione iniziale</span> alla <span>consegna finale del sito</span>, garantendo <span>sicurezza, efficienza e conformità normativa</span>.',
      benefits: [
        {
          title: 'Un unico referente',
          description:
            "Gestiamo l'<span>intero progetto</span>, eliminando <span>complessità e stress</span> per il cliente",
          icon: 'user',
        },
        {
          title: 'Sicurezza garantita',
          description:
            'Rispetto rigoroso delle <span>normative</span> con un focus sulla <span>sicurezza di persone e ambiente</span>',
          icon: 'shield',
        },
        {
          title: 'Gestione completa dei rifiuti',
          description:
            'Ci assumiamo la <span>responsabilità legale e operativa</span> di tutti i <span>rifiuti generati</span>',
          icon: 'recycle',
        },
        {
          title: 'Movimento terra integrato',
          description:
            'Prepariamo il sito per la fase successiva con servizi di <span>movimento terra professionali</span>',
          icon: 'truck',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Valutazione e progettazione',
          description:
            'Analisi approfondita della struttura, pianificazione dettagliata e definizione delle strategie di intervento',
        },
        {
          step: 2,
          title: 'Preparazione e messa in sicurezza',
          description:
            "Delimitazione dell'area, installazione delle protezioni e preparazione del sito per la demolizione",
        },
        {
          step: 3,
          title: 'Esecuzione controllata',
          description:
            'Demolizione controllata con tecniche e macchinari appropriati al contesto e alla struttura',
        },
        {
          step: 4,
          title: 'Gestione e smaltimento rifiuti',
          description:
            'Separazione, caratterizzazione e smaltimento o recupero dei materiali secondo le normative',
        },
      ],
      categories: [
        {
          title: 'Demolizioni civili',
          description:
            'Eseguiamo demolizioni civili su edifici residenziali, scuole, uffici e strutture pubbliche o private. Operiamo in contesti urbani e spazi limitati, applicando tecniche a basso impatto ambientale e garantendo la sicurezza di persone e strutture adiacenti.',
          image: '/img/demo-civ.jpg',
        },
        {
          title: 'Demolizioni industriali',
          description:
            'Siamo specializzati nella demolizione di impianti produttivi, capannoni, silos e infrastrutture industriali, gestiamo con attenzione tutte le fasi, dalla disattivazione impianti alla bonifica dei materiali contaminati',
          image: '/img/demo-industriali.jpg',
        },
        {
          title: 'Demolizioni specialistiche',
          description:
            'Affrontiamo demolizioni complesse in contesti vincolati come centri storici, aree sensibili, edifici monumentali o in prossimità di infrastrutture attive.  Ogni intervento è preceduto da analisi strutturali e piani di sicurezza su misura. Questo approccio è ideale per ridurre rischi, tempi e costi nei contesti ad alta complessità tecnica',
          image: '/img/demolizioni_01.jpg',
        },
      ],
      // certifications: [
      //   'Albo Nazionale Gestori Ambientali',
      //   'Categoria 8 - Intermediazione rifiuti',
      //   'ISO 9001 - Gestione Qualità',
      //   'ISO 14001 - Gestione Ambientale',
      //   'ISO 45001 - Sicurezza sul lavoro',
      // ],
      cta: {
        title: 'Hai un progetto di demolizione?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
    'strip-out': {
      id: 'strip-out',
      title: 'Servizi di Strip-out',
      subtitle: 'Preparazione professionale per ristrutturazioni',
      heroImage: '/img/strip.jpg',
      description:
        'Servizi di <span>strip-out di precisione</span> per la preparazione degli spazi alla <span>ristrutturazione o riqualificazione</span>, con <span>minimo impatto</span> sulle strutture adiacenti.',
      benefits: [
        {
          title: 'Precisione e cura',
          description:
            'Rimozione selettiva degli elementi con <span>massima attenzione ai dettagli</span>',
          icon: 'precision',
        },
        {
          title: 'Minimizzazione dei disturbi',
          description:
            "Tecniche e procedure che riducono al <span>minimo l'impatto</span> sulle aree circostanti",
          icon: 'shield',
        },
        {
          title: 'Recupero materiali',
          description:
            'Separazione e recupero di materiali riutilizzabili per ridurre i rifiuti',
          icon: 'recycle',
        },
        {
          title: 'Consegna professionale',
          description:
            "Consegna dell'area <span>completata e pronta all'uso</span>",
          icon: 'check',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Analisi e pianificazione',
          description:
            "Valutazione degli elementi da rimuovere e pianificazione dell'intervento",
        },
        {
          step: 2,
          title: 'Protezione e preparazione',
          description:
            'Protezione delle aree adiacenti e preparazione del cantiere',
        },
        {
          step: 3,
          title: 'Rimozione selettiva',
          description:
            'Rimozione controllata degli elementi secondo il piano stabilito',
        },
        {
          step: 4,
          title: 'Gestione materiali',
          description:
            'Separazione e smaltimento dei materiali secondo le normative',
        },
      ],
      categories: [
        {
          title: 'Strip-out commerciale',
          description:
            'Rimozione di elementi non strutturali in spazi commerciali e uffici',
          image: '/img/strip-out-commerciale.jpg',
        },
        {
          title: 'Strip-out industriale',
          description:
            "Preparazione di spazi industriali per ristrutturazione o cambio destinazione d'uso",
          image: '/img/strip-out-industriale.jpg',
        },
        {
          title: 'Strip-out residenziale',
          description:
            'Rimozione di elementi in spazi residenziali con attenzione ai dettagli',
          image: '/img/strip-out-residenziale.jpg',
        },
      ],
      // certifications: [
      //   'Albo Nazionale Gestori Ambientali',
      //   'Categoria 8 - Intermediazione rifiuti',
      //   'ISO 9001 - Gestione Qualità',
      //   'ISO 14001 - Gestione Ambientale',
      //   'ISO 45001 - Sicurezza sul lavoro',
      // ],
      cta: {
        title: 'Hai bisogno di servizi di strip-out?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
    bonifiche: {
      id: 'bonifiche',
      title: 'Bonifiche Ambientali',
      subtitle: "Soluzioni sicure e conformi per la tutela dell'ambiente",
      heroImage: '/img/bonifiche.jpg',
      description:
        "Bonifiche ambientali e <span>gestione sicura di materiali speciali</span>, incluso <span>amianto</span>. Servizi specializzati con focus su <span>sicurezza e tutela dell'ambiente</span>.",
      benefits: [
        {
          title: 'Sicurezza garantita',
          description:
            'Procedure rigorose per la <span>protezione di persone e ambiente</span>',
          icon: 'shield',
        },
        {
          title: 'Conformità normativa',
          description:
            'Rispetto di tutte le <span>normative vigenti</span> per la gestione dei <span>rifiuti pericolosi</span>',
          icon: 'check',
        },
        {
          title: 'Certificazioni complete',
          description:
            '<span>Documentazione dettagliata e certificazioni</span> per ogni intervento',
          icon: 'certificate',
        },
        {
          title: 'Soluzioni sostenibili',
          description:
            'Approccio <span>eco-sostenibile</span> alla gestione dei <span>rifiuti pericolosi</span>',
          icon: 'leaf',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Analisi e caratterizzazione',
          description:
            'Valutazione dei materiali e caratterizzazione dei rifiuti pericolosi',
        },
        {
          step: 2,
          title: "Pianificazione dell'intervento",
          description:
            'Definizione delle procedure e delle misure di sicurezza necessarie',
        },
        {
          step: 3,
          title: 'Esecuzione della bonifica',
          description:
            'Intervento di bonifica con tecniche e procedure specializzate',
        },
        {
          step: 4,
          title: 'Gestione dei rifiuti',
          description:
            'Raccolta, trasporto e smaltimento dei rifiuti pericolosi',
        },
      ],
      categories: [
        {
          title: 'Bonifica amianto',
          description:
            'Siamo specializzati nella bonifica amianto sia in matrice compatta che friabile, con operazioni che comprendono mappatura, rimozione, incapsulamento e confinamento. Operiamo nel pieno rispetto della normativa vigente garantendo la massima sicurezza per le persone e l’ambiente',
          image: '/img/bonifica-amianto.jpg',
        },
        {
          title: 'Bonifica di siti contaminati e inquinati',
          description:
            'Interveniamo su terreni e siti industriali dismessi o inquinati da idrocarburi, metalli pesanti o composti organici pericolosi. Garantiamo l’intero iter tecnico e amministrativo: dalla caratterizzazione ambientale iniziale alla restituzione dell’area in condizioni di sicurezza e conformità ambientale',
          image: '/img/bonifica-contaminati.jpg',
        },
        {
          title: 'Bonifica falde e sedimenti',
          description:
            'Effettuiamo interventi di bonifica ambientale per falde acquifere e sedimenti contaminati da sostanze chimiche, metalli pesanti, idrocarburi o solventi clorurati. ',
          image: '/img/bonifica-falde.jpg',
        },
      ],
      // certifications: [
      //   'Albo Nazionale Gestori Ambientali',
      //   'Categoria 8 - Intermediazione rifiuti',
      //   'ISO 9001 - Gestione Qualità',
      //   'ISO 14001 - Gestione Ambientale',
      //   'ISO 45001 - Sicurezza sul lavoro',
      // ],
      cta: {
        title: 'Hai bisogno di servizi di bonifica?',
        description:
          'Contattaci per un preventivo personalizzato o per una consulenza gratuita',
        buttonText: 'Richiedi un preventivo',
      },
    },
    'smaltimento-macchinari-industriali': {
      id: 'smaltimento-macchinari-industriali',
      title: 'Smaltimento macchinari industriali',
      subtitle: 'Soluzioni complete per la gestione dei tuoi beni dismessi',
      heroImage: '/img/rottami-metallici.jpg',
      description:
        'De.Sma.Re offre un <span>servizio completo</span> per lo smaltimento di <span>macchinari e impianti industriali</span> obsoleti o dismessi. Dallo <span>smontaggio in loco</span> al trasporto e al conferimento in <span>centri autorizzati</span>, gestiamo ogni fase con la massima professionalità, garantendo <span>sicurezza, efficienza e pieno rispetto delle normative ambientali</span>.',
      benefits: [
        {
          title: 'Servizio completo',
          description:
            'Ci occupiamo di <span>ogni aspetto</span>, dallo <span>smontaggio alla documentazione finale</span>, offrendoti un <span>unico partner affidabile</span> e sollevandoti da ogni complessità.',
          icon: 'user',
        },
        {
          title: 'Valorizzazione dei beni',
          description:
            "Acquistiamo i macchinari o le strutture industriali dismesse, riconoscendo il loro <span>valore di recupero</span> e trasformando un potenziale costo in un'<span>opportunità economica</span>.",
          icon: 'coins',
        },
        {
          title: 'Ottimizzazione',
          description:
            'Grazie alla nostra <span>esperienza e pianificazione</span>, riduciamo al minimo i <span>tempi di fermo e gli imprevisti</span>, completando le operazioni in modo <span>rapido ed efficiente</span>.',
          icon: 'clock',
        },
        {
          title: 'Impatto ridotto',
          description:
            'Privilegiamo il <span>recupero e il riciclo dei materiali</span>, minimizzando la quantità di rifiuti destinati a discarica e contribuendo attivamente alla <span>sostenibilità ambientale</span>.',
          icon: 'leaf',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Sopralluogo e pianificazione',
          description:
            'Ogni intervento inizia con un sopralluogo gratuito presso la tua sede. I nostri tecnici valuteranno i macchinari e i materiali da smaltire, identificando eventuali componenti pericolose e definendo le modalità operative più adatte.',
        },
        {
          step: 2,
          title: 'Bonifica e messa in sicurezza',
          description:
            "Prima dello smontaggio, mettiamo in sicurezza l'area di lavoro e i macchinari. Questo include lo scollegamento di impianti elettrici e fluidici, la segregazione della zona e la bonifica di eventuali componenti pericolose (es. oli, refrigeranti, amianto).",
        },
        {
          step: 3,
          title: 'Smontaggio e rimozione',
          description:
            'Il nostro team specializzato esegue lo smontaggio dei macchinari e impianti direttamente presso la tua sede. Utilizziamo attrezzature professionali e personale qualificato per rimuovere in modo efficiente sia grandi impianti che piccole apparecchiature.',
        },
        {
          step: 4,
          title: 'Trasporto e smaltimento',
          description:
            'Organizziamo il trasporto dei materiali dal tuo sito agli impianti di smaltimento. I materiali raccolti vengono conferiti a impianti autorizzati per il trattamento finale. Ove possibile privilegiamo il recupero e il riciclo.',
        },
      ],
      categories: [
        {
          title: 'Recupero di rottami metallici',
          description:
            'Effettuiamo il recupero e il riciclo di rottami metallici provenienti da demolizioni industriali, dismissioni impianti e linee di produzione. Gestiamo acciaio, ferro, rame, alluminio e altri metalli in modo conforme alle normative ambientali, assicurando tracciabilità completa e valorizzazione economica del materiale recuperato.',
          image: '/img/smaltimento-macchinari.jpg',
        },
        {
          title: 'Demolizione di impianti industriali',
          description:
            'Offriamo un servizio completo per lo smontaggio, il trasporto e lo smaltimento certificato di macchinari industriali, linee produttive e attrezzature specializzate. Interveniamo in contesti produttivi dismessi o in ristrutturazione, garantendo sicurezza, rispetto delle normative (ADR e ambientali), e gestione documentale ',
          image: '/img/smaltimento-industriale.jpg',
        },
      ],
      cta: {
        title: 'Hai macchinari industriali da smaltire?',
        description:
          'Contattaci per un sopralluogo gratuito e un preventivo personalizzato',
        buttonText: 'Richiedi un preventivo',
      },
    },
  },
  process: {
    title: 'Il Nostro Processo',
    subtitle: 'Come lavoriamo',
    steps: [
      {
        number: '01',
        title: 'Valutazione',
        description: 'Analisi dettagliata del progetto e delle esigenze',
      },
      {
        number: '02',
        title: 'Preventivo',
        description: 'Preparazione di un preventivo dettagliato e trasparente',
      },
      {
        number: '03',
        title: 'Pianificazione',
        description: 'Organizzazione logistica e operativa del progetto',
      },
      {
        number: '04',
        title: 'Esecuzione',
        description: 'Realizzazione del progetto con massima professionalità',
      },
    ],
  },
  cta: {
    title: 'Hai un Progetto in Mente?',
    subtitle: 'Contattaci per un preventivo gratuito',
    button: 'Richiedi Preventivo',
  },
};
