const app = document.getElementById('app');
const originalPlacement = {"fr":[["🍎 Quel est ce fruit ?",["Une pomme","Une poire","Une fraise"],0],["Je ___ onze ans.",["suis","ai","est"],1],["🐘 Quel animal est-ce ?",["Un éléphant","Un cheval","Un mouton"],0],["Nous ___ à l’école.",["allez","allons","va"],1],["Hier, elle ___ un livre.",["a lu","lit","lira"],0],["Choisis la phrase correcte.",["Les enfants joue.","Les enfants jouent.","Les enfants joues."],1],["Le contraire de « généreux » est :",["avare","aimable","joyeux"],0],["Demain, nous ___ au musée.",["sommes allés","irons","allions"],1],["Si je pouvais, je ___ le monde.",["voyagerais","voyagerai","voyage"],0],["« Malgré » exprime :",["une opposition","une cause","un but"],0],["Quel est le synonyme de « pertinent » ?",["approprié","lointain","fragile"],0],["Il faut que tu ___ prêt.",["es","sois","seras"],1],["Bien qu’il ___ froid, nous sortons.",["fait","fasse","fera"],1],["« Néanmoins » signifie :",["cependant","donc","ensuite"],0],["Quelle phrase est correcte ?",["Elle s’est permise de partir.","Elle s’est permis de partir.","Elle s’est permet de partir."],1],["« À supposer que » introduit :",["une hypothèse","une certitude","une conséquence"],0],["« Il eût fallu » exprime :",["un regret dans un registre soutenu","un ordre présent","une habitude"],0],["« Faire fi de » signifie :",["ignorer volontairement","se souvenir de","imiter"],0],["Quelle figure atténue une idée par la négation du contraire ?",["La litote","La métaphore","L’allitération"],0],["« Peu s’en faut que » signifie :",["il a presque fallu que","il est impossible que","il faut rarement que"],0],["« Nonobstant » signifie :",["malgré","avant","grâce à"],0],["« Il n’en demeure pas moins que » sert à :",["maintenir une réserve ou une objection","introduire un exemple","annoncer une date"],0],["Une « aporie » est :",["une difficulté logique insoluble","une célébration","une comparaison"],0],["Quel énoncé emploie une concession ?",["Quand bien même il réussirait, le doute subsisterait.","Parce qu’il réussit, il sourit.","Il réussit puis part."],0]],"en":[["🐱 What animal is this?",["A cat","A duck","A dog"],0],["She ___ ten years old.",["am","is","are"],1],["🍌 Choose the fruit.",["Banana","Car","Chair"],0],["They ___ happy.",["is","am","are"],2],["Yesterday we ___ a film.",["watched","watch","will watch"],0],["Which sentence is correct?",["He don’t like apples.","He doesn’t like apples.","He doesn’t likes apples."],1],["The opposite of “quiet” is:",["noisy","gentle","slow"],0],["I have lived here ___ 2020.",["for","since","during"],1],["If I had time, I ___ more.",["read","would read","will reading"],1],["“Although” introduces:",["contrast","purpose","quantity"],0],["“Reliable” means:",["trustworthy","fragile","careless"],0],["She suggested ___ earlier.",["leave","leaving","to leaving"],1],["By Friday, they ___ the project.",["will have finished","will finishing","have finish"],0],["“Nevertheless” means:",["however","therefore","meanwhile"],0],["Choose the correct phrase.",["Despite of the rain","Despite the rain","Although the rain"],1],["Had I known, I ___ sooner.",["would act","would have acted","will act"],1],["“To scrutinize” means:",["to examine closely","to celebrate","to simplify"],0],["Rarely ___ such a sight.",["I have seen","have I seen","I saw have"],1],["“Ambivalent” describes:",["mixed feelings","complete certainty","strong dislike only"],0],["“A moot point” is:",["a debatable or practically irrelevant issue","a confirmed fact","a trivial object"],0],["“To prevaricate” means:",["to speak evasively","to calculate","to forgive"],0],["Not until later ___ the truth.",["did she discover","she discovered","she did discovered"],0],["“Equivocal” means:",["open to more than one interpretation","entirely certain","physically equal"],0],["“Insofar as” is closest to:",["to the extent that","in spite of","as soon as"],0]]};

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const placementCounts = [9, 9, 8, 8, 8, 8];
const sessionSize = 10;

// Each situation carries an infinitive, a past participle, and a setting.
const situations = {
  fr: [
    ['dessiner un dragon', 'dessiné un dragon', 'dans la cour'],
    ['lire le début du roman', 'lu le début du roman', 'à la bibliothèque'],
    ['préparer des crêpes', 'préparé des crêpes', 'dans la cuisine'],
    ['observer les étoiles', 'observé les étoiles', 'sur la terrasse'],
    ['construire une cabane', 'construit une cabane', 'dans le jardin'],
    ['planter des radis', 'planté des radis', 'au potager'],
    ['inventer une histoire', 'inventé une histoire', 'dans le salon'],
    ['enregistrer une chanson', 'enregistré une chanson', 'au studio'],
    ['résoudre une énigme', 'résolu une énigme', 'au club de jeux'],
    ['ranger les pinceaux', 'rangé les pinceaux', 'à l’atelier'],
    ['photographier les oiseaux', 'photographié les oiseaux', 'au parc'],
    ['réparer un vélo', 'réparé un vélo', 'dans le garage'],
    ['coller les affiches', 'collé les affiches', 'dans le couloir'],
    ['répéter une scène', 'répété une scène', 'au théâtre'],
    ['tester un robot', 'testé un robot', 'au laboratoire'],
    ['trier les graines', 'trié les graines', 'sous la serre'],
    ['peindre une fresque', 'peint une fresque', 'au centre de loisirs'],
    ['chercher un indice', 'cherché un indice', 'près du moulin'],
    ['apprendre les règles du jeu', 'appris les règles du jeu', 'sous le préau'],
    ['préparer le matériel', 'préparé le matériel', 'dans le gymnase'],
    ['écrire une carte', 'écrit une carte', 'dans la classe'],
    ['choisir un costume', 'choisi un costume', 'dans les coulisses'],
    ['compter les coquillages', 'compté les coquillages', 'sur la plage'],
    ['comparer les empreintes', 'comparé les empreintes', 'près de la rivière'],
    ['fabriquer un cerf-volant', 'fabriqué un cerf-volant', 'au camp'],
    ['classer les cartes', 'classé les cartes', 'à la maison'],
    ['présenter une maquette', 'présenté une maquette', 'au musée'],
    ['étiqueter les boîtes', 'étiqueté les boîtes', 'dans la réserve'],
    ['assembler un puzzle', 'assemblé un puzzle', 'dans la salle de jeux'],
    ['noter les résultats', 'noté les résultats', 'dans la salle de sciences'],
    ['décorer les guirlandes', 'décoré les guirlandes', 'à la salle des fêtes'],
    ['enrouler la corde', 'enroulé la corde', 'au terrain de sport'],
    ['réviser une leçon', 'révisé une leçon', 'chez Lina'],
    ['préparer un exposé', 'préparé un exposé', 'chez Sami'],
    ['dessiner une carte', 'dessiné une carte', 'au refuge']
  ],
  en: [
    ['draw a dragon', 'drawn a dragon', 'in the playground'],
    ['read the first chapter', 'read the first chapter', 'at the library'],
    ['make pancakes', 'made pancakes', 'in the kitchen'],
    ['watch the stars', 'watched the stars', 'on the balcony'],
    ['build a den', 'built a den', 'in the garden'],
    ['plant radishes', 'planted radishes', 'in the vegetable patch'],
    ['invent a story', 'invented a story', 'in the living room'],
    ['record a song', 'recorded a song', 'in the studio'],
    ['solve a riddle', 'solved a riddle', 'at the games club'],
    ['tidy the brushes', 'tidied the brushes', 'in the workshop'],
    ['photograph birds', 'photographed birds', 'in the park'],
    ['fix a bike', 'fixed a bike', 'in the garage'],
    ['put up the posters', 'put up the posters', 'in the hall'],
    ['rehearse a scene', 'rehearsed a scene', 'at the theatre'],
    ['test a robot', 'tested a robot', 'in the lab'],
    ['sort the seeds', 'sorted the seeds', 'in the greenhouse'],
    ['paint a mural', 'painted a mural', 'at the youth centre'],
    ['look for a clue', 'looked for a clue', 'near the mill'],
    ['learn the rules', 'learned the rules', 'under the shelter'],
    ['prepare the equipment', 'prepared the equipment', 'in the gym'],
    ['write a card', 'written a card', 'in the classroom'],
    ['choose a costume', 'chosen a costume', 'backstage'],
    ['count the shells', 'counted the shells', 'on the beach'],
    ['compare the footprints', 'compared the footprints', 'by the river'],
    ['make a kite', 'made a kite', 'at camp'],
    ['organise the cards', 'organised the cards', 'at home'],
    ['present a model', 'presented a model', 'at the museum'],
    ['label the boxes', 'labelled the boxes', 'in the storeroom'],
    ['finish a jigsaw', 'finished a jigsaw', 'in the playroom'],
    ['write down the results', 'written down the results', 'in the science room'],
    ['hang the decorations', 'hung the decorations', 'at the community hall'],
    ['coil the rope', 'coiled the rope', 'on the sports field'],
    ['revise a lesson', 'revised a lesson', 'at Lina’s house'],
    ['prepare a talk', 'prepared a talk', 'at Sami’s house'],
    ['draw a map', 'drawn a map', 'at the shelter']
  ]
};

// Ten targeted constructions per level. Each starts with the correct option,
// followed by two distractors. The app shuffles the displayed answers.
const patterns = {
  fr: [
    [
      ['Pour ~, je ___ prêt.', 'suis|es|est', 'Avec « je », on dit « je suis ».'],
      ['Pour ~, tu ___ le matériel.', 'as|a|ai', 'Avec « tu », on dit « tu as ».'],
      ['Lina et Sami ___ envie de ~.', 'ont|a|avez', 'Deux personnes correspondent à « ils ont ».'],
      ['___ début, on se retrouve @ pour ~.', 'Au|À la|Aux', '« À + le » devient « au ».'],
      ['On va ___ @.', '~|^|à ~', 'Après « on va », utilise l’infinitif.'],
      ['Nous ___ @ pour ~.', 'sommes|êtes|sont', 'Avec « nous », on dit « nous sommes ».'],
      ['Vous ___ ~ ensemble.', 'pouvez|peux|peuvent', 'Avec « vous », on dit « vous pouvez ».'],
      ['Pour ~, ___ avec moi ! (À une personne.)', 'viens|venons|venez', 'À une personne que tu tutoies, dis « viens ».'],
      ['C’est ici ___ nous allons ~.', 'que|qui|quand', 'On met le lieu en valeur avec « c’est ici que ».'],
      ['Je ne veux ___ ~ maintenant.', 'pas|très|aussi', 'La négation se construit avec « ne … pas ».']
    ],
    [
      ['Hier, on a ___ @.', '^|~|fait de', 'Le passé composé se forme ici avec « a » et le participe passé.'],
      ['Demain, vous ___ ~ @.', 'allez|êtes|avez', 'Pour parler d’un projet, utilise « aller » + infinitif.'],
      ['On a commencé à ~ il y a dix minutes et on continue. On y travaille ___ dix minutes.', 'depuis|pendant|dans', '« Depuis » indique une durée qui continue au présent.'],
      ['Il faut ___ @ avant midi.', '~|^|aller de', 'Après « il faut », un verbe peut se mettre à l’infinitif.'],
      ['Samedi dernier, Lina ___ arrivée tôt pour ~.', 'est|a|va', 'Au passé composé, « arriver » se conjugue avec « être ».'],
      ['On se retrouve @ ___ ~, avec cet objectif précis.', 'pour|depuis|malgré', '« Pour » + infinitif exprime le but.'],
      ['Lina est restée @ ___ voulait ~.', 'parce qu’elle|pour qu’elle|bien qu’elle', '« Parce que » introduit la cause.'],
      ['Tu as fini ? Oui, j’ai déjà ___ @.', '^|~|être', 'Après « j’ai » au passé composé, mets le participe passé.'],
      ['La semaine prochaine, nous ___ ~ @.', 'pourrons|avons pu|pouvions', '« Pourrons » marque le futur.'],
      ['Sami a oublié ___ venir @ pour ~.', 'de|à|pour', 'On dit « oublier de faire quelque chose ».']
    ],
    [
      ['Chaque mercredi, nous ___ @ pour ~. C’était notre habitude.', 'allions|allons|irons', 'L’imparfait décrit une habitude passée.'],
      ['Si j’avais plus de temps, je ___ ~ @.', 'pourrais|pourrai|peux', '« Si » + imparfait appelle ici le conditionnel.'],
      ['Les amis avec ___ Lina va ~ se retrouvent @.', 'qui|dont|que', 'Après « avec », utilise « qui » pour parler de personnes.'],
      ['Je lui ai demandé ___ elle voulait ~ avec nous.', 'si|dont|que de', 'Une question indirecte à réponse oui/non commence par « si ».'],
      ['Nous avons réussi à ~ ___ l’aide de notre équipe.', 'grâce à|bien que|pour que', '« Grâce à » introduit ici une cause positive.'],
      ['Avant de quitter les lieux, Sami avait déjà ___ @.', '^|~|fait pour', '« Avait » + participe passé forme le plus-que-parfait.'],
      ['C’est le projet ___ on parle avant de ~ @.', 'dont|qui|où', 'On parle « de » quelque chose, d’où le relatif « dont ».'],
      ['Lina et Sami se sont parlé avant de ~. À qui Lina a-t-elle parlé ?', 'À Sami|À personne|Au public', '« Se parler » indique ici une action réciproque.'],
      ['Le lieu ___ on se retrouve pour ~ est indiqué sur le plan.', 'où|dont|quel', 'Le relatif « où » renvoie à un lieu.'],
      ['À peine arrivé @, Sami s’est mis ___ ~.', 'à|sur|chez', 'On dit « se mettre à » + infinitif.']
    ],
    [
      ['Bien qu’il ___ tard, Lina veut encore ~ @.', 'soit|est|sera', '« Bien que » est suivi du subjonctif.'],
      ['Pourvu que nous ___ ~ @ avant la fermeture !', 'puissions|pourrons|pouvons', '« Pourvu que » appelle le subjonctif.'],
      ['Si l’équipe avait été prévenue, elle ___ pu ~ @.', 'aurait|aura|avait', 'Un fait passé imaginaire s’exprime ici au conditionnel passé.'],
      ['Lina est partie @ sans que ses amis le ___. Elle voulait ~ seule.', 'sachent|savent|sauront', '« Sans que » est suivi du subjonctif.'],
      ['Sami a choisi de ~ @, quitte à décaler sa pause. Que signifie « quitte à » ?', 'En acceptant le risque de|Grâce au fait de|Pour empêcher de', '« Quitte à » présente un coût ou un risque accepté.'],
      ['On pourra ~ @, à condition que le lieu ___ ouvert.', 'reste|restera|resté', '« À condition que » demande le subjonctif.'],
      ['Il n’est pas certain que l’équipe ___ déjà ^ @.', 'ait|a|aura', 'Après « il n’est pas certain que », utilise le subjonctif.'],
      ['Nous voulions ~ @. Or l’accès était fermé. Que signale « or » ?', 'Un fait qui change le raisonnement|La durée exacte du projet|Une conséquence attendue', '« Or » introduit un fait qui modifie l’argumentation.'],
      ['On doit ~ @ avant midi, faute de quoi le lieu fermera. Quel est le lien logique ?', 'Une conséquence si l’on ne respecte pas le délai|Une action déjà accomplie|Un exemple sans rapport', '« Faute de quoi » signifie « sans cela ».'],
      ['Lina a tout préparé afin que Sami ___ ~ @.', 'puisse|peut|pourra', '« Afin que » exprime le but et introduit le subjonctif.']
    ],
    [
      ['On a déjà ^ @, encore faut-il expliquer comment. Quel rôle joue « encore faut-il » ?', 'Ajouter une exigence|Garantir la réussite|Annuler le fait précédent', 'Cette tournure ajoute une condition ou une obligation.'],
      ['N’eût été la pluie, on aurait pu ~ @. Que comprend-on ?', 'La pluie a empêché le projet|La pluie a facilité le projet|La pluie est sans rapport', '« N’eût été » signifie ici « sans ».'],
      ['Il semble que l’équipe ___ ^ @. Quelle tournure maintient l’incertitude ?', 'ait|a|aura', 'Le subjonctif passé marque ici le caractère incertain du fait.'],
      ['Lina a certes ^ @, mais elle a dû modifier son plan. Quel rôle joue « certes » ?', 'Concéder un fait avant une réserve|Présenter la cause unique|Garantir la suite', '« Certes … mais » reconnaît un point avant de le nuancer.'],
      ['Il ne suffit pas de ~ @ pour que le projet soit réussi. Qu’implique cette phrase ?', 'Cette action ne garantit pas à elle seule la réussite|Cette action fait toujours échouer le projet|Cette action est déjà réussie', 'Une condition insuffisante ne permet pas de garantir le résultat.'],
      ['Sami veut ~ @, pour autant que le règlement le permette. Quel sens a la dernière partie ?', 'Sous réserve que le règlement l’autorise|Le règlement l’interdit déjà|Même si le règlement l’interdit', '« Pour autant que » exprime ici une condition.'],
      ['Nous avons ^ @, si bien que l’équipe a pu passer à la suite. Quel est le rôle de « si bien que » ?', 'Introduire un résultat|Donner le but initial|Décrire une condition fictive', '« Si bien que » introduit une conséquence.'],
      ['Lina a beau avoir ^ @, le jury veut des preuves. Qu’est-ce qui est sous-entendu ?', 'Son action ne suffit pas à convaincre le jury|Le jury a déjà approuvé sa méthode|Le jury lui a demandé de renoncer', '« Avoir beau » oppose un effort à un résultat qui ne suit pas.'],
      ['« On a ^ @, à ceci près qu’on a dû modifier la dernière étape. » Que fait la fin de la phrase ?', 'Elle restreint la portée de la première affirmation|Elle précise l’heure|Elle reprend la première affirmation sans nuance', '« À ceci près que » introduit une exception ou une réserve.'],
      ['« Quand bien même il faudrait ~ @, nous maintiendrions notre projet. » Quel sens a le début ?', 'Même dans cette hypothèse|Parce que le fait est avéré|Dès que le fait sera confirmé', '« Quand bien même » marque une concession hypothétique.']
    ],
    [
      ['Lina prétend avoir ^ @. Quel choix indique une distance à l’égard de son affirmation ?', 'Elle dit l’avoir fait, sans que ce soit confirmé|Elle prouve l’avoir fait|Elle nie l’avoir fait', '« Prétend » marque une prise de distance vis-à-vis de l’affirmation.'],
      ['« Ce n’est pas rien d’avoir ^ @ ! » Quelle intention est la plus plausible ?', 'Souligner la difficulté ou le mérite|Minimiser explicitement la réussite|Donner un ordre', 'Cette litote valorise l’accomplissement en niant qu’il soit négligeable.'],
      ['« Sous prétexte de ~ @, Sami a évité la réunion. » Quelle attitude suggère « sous prétexte » ?', 'Le narrateur doute de la sincérité du motif|Le narrateur confirme le motif|Le narrateur ignore si la réunion est prévue', '« Sous prétexte de » présente une justification jugée peu convaincante.'],
      ['« On ne saurait déduire de ce seul rapport que Lina a ^ @. » Quelle nuance porte « ne saurait » ?', 'Il serait injustifié de tirer cette conclusion|Il serait obligatoire de la tirer|Elle est confirmée par le rapport', '« Ne saurait » exprime ici une impossibilité de principe.'],
      ['« Et de conclure que l’on pourrait ~ @ ! » Quel effet produit « et de conclure » ?', 'Introduire vivement une réaction dans le récit|Énoncer une obligation légale|Revenir à un événement antérieur sans lien', 'L’infinitif narratif en « et de » rend une réaction plus vive.'],
      ['Lina assure avoir ^ @. Sami répond : « C’est du moins ce qu’elle dit. » Quelle nuance apporte-t-il ?', 'Il rappelle que l’information repose sur sa seule parole|Il apporte une preuve indépendante|Il confirme sa présence sur place', '« Du moins » restreint ici la portée de ce qu’on peut affirmer.'],
      ['« Que l’on ait ^ @, nul ne le conteste. » Que reprend « le » ?', 'L’ensemble du fait introduit par « que »|Le lieu uniquement|La personne qui parle', 'Le pronom neutre « le » peut reprendre toute une proposition.'],
      ['« Encore eût-il fallu pouvoir ~ @. » Quelle lecture est la plus plausible ?', 'Une condition nécessaire n’a pas été satisfaite|Une réussite est présentée comme certaine|Une consigne est donnée directement', 'Cette tournure soutenue présente une condition préalable restée insatisfaite.'],
      ['« Pour ~ @, encore convient-il de s’en donner les moyens. » Quelle fonction a la deuxième partie ?', 'Rappeler une condition pratique|Rejeter l’objectif|Situer le récit dans le passé', 'L’inversion « encore convient-il » attire l’attention sur un préalable.'],
      ['« Lina a ^ @ ou, pour être plus précis, elle y a commencé le travail. » Quel mécanisme est employé ?', 'Une reformulation qui réduit la portée de l’affirmation|Une répétition strictement équivalente|Un changement de sujet sans lien', '« Pour être plus précis » introduit ici une rectification.']
    ]
  ],
  en: [
    [
      ['I ___ ready to ~ @.', 'am|is|are', 'Use “am” with “I”.'],
      ['Lina ___ here to ~ @.', 'is|am|are', 'Use “is” with “she” or one person’s name.'],
      ['Lina and Sami ___ going to ~ @.', 'are|am|is', 'Use “are” with “they” or two people.'],
      ['Can Sami ___ @ today?', '~|will ~|to ~', 'After “can”, use the base form of the verb.'],
      ['I want ___ @.', 'to ~|will ~|~', 'Use “want to” before another verb.'],
      ['Lina has the tools. ___ has them to ~ @.', 'She|They|You', 'Use “she” for Lina in this sentence.'],
      ['Sami and I are going to ~ @. ___ are a team.', 'We|He|I', '“Sami and I” can be replaced by “we”.'],
      ['___ Lina want to ~ @?', 'Does|Do|Are', 'Use “does” for a question about what one person wants.'],
      ['Come with ___ to ~ @, please!', 'me|I|my', 'Use “me” after “with” when referring to yourself.'],
      ['We ___ not going to ~ @ today.', 'are|is|am', 'Say “we are not” for this negative statement.']
    ],
    [
      ['We have already ___ @.', '^|to ~|will ~', 'Use “have” plus the past participle.'],
      ['Tomorrow, I ___ going to ~ @.', 'am|was|were', 'Use “am going to” here for a future plan.'],
      ['Yesterday, Lina ___ able to ~ @.', 'was|is|were', 'Use “was” for one person in the past.'],
      ['When Sami was six, he ___ already ~ on his own.', 'could|can|will', '“Could” expresses an ability in the past.'],
      ['Bring the kit ___ you want to ~ @. You will need it.', 'if|but|until', '“If” introduces a condition.'],
      ['They could not ~ @ ___ the door was locked.', 'because|but|although', '“Because” tells us why they could not do it.'],
      ['Lina ___ not want to ~ @ this morning.', 'does|do|are', 'Use “does not” with “she” or a singular name.'],
      ['___ ~ @ today! That is my suggestion for both of us.', 'Let’s|We did|We have', 'Use “let’s” plus the base verb to make a joint suggestion.'],
      ['Sami needs ___ @ before noon.', 'to ~|will ~|~', 'Use “needs to” before another verb.'],
      ['We will ~ @ after we ___ lunch.', 'have|will have|having', 'After time words such as “after”, use present simple here for a future event.']
    ],
    [
      ['If I had more time, I ___ ~ @.', 'would|will|did', 'Use “would” for the result of this imaginary situation.'],
      ['When they arrived, Lina had already ___ @.', '^|to ~|could ~', '“Had” plus the past participle places one past event before another.'],
      ['Sami asked Lina ___ she wanted to ~ @ with him.', 'whether|what|where', 'Use “whether” for an indirect yes-or-no question.'],
      ['Lina is the friend ___ helped me ~ @.', 'who|whose|where', '“Who” refers to the person who did the action.'],
      ['We have been trying to ~ @ ___ Monday.', 'since|for|during', 'Use “since” before the point when an action began.'],
      ['Sami suggested ___ together to ~ @.', 'working|to working|work', 'Use the -ing form after “suggested” when there is no new subject.'],
      ['Sami, ___ idea it was to ~ @, brought the tools.', 'whose|who|where', '“Whose” shows that the idea belonged to Sami.'],
      ['Neither Lina nor Sami wanted to ~ @. Who wanted to do it?', 'Neither of them|Both of them|Only Lina', '“Neither … nor” excludes both people.'],
      ['We used ___ @ every week, before our timetable changed.', 'to ~|will ~|~', 'Use “used to” and the base form to describe a past habit.'],
      ['You ___ bring your own kit to ~ @. There is one you can borrow.', 'do not have to|must not|cannot', '“Do not have to” means that something is optional.']
    ],
    [
      ['Had we left earlier, we ___ been able to ~ @.', 'would have|will have|would be', 'This third conditional uses “would have” to describe an imagined past result.'],
      ['Despite ___ @, Lina came back to help.', 'having ^|she had ^|have ^', 'Use a noun or -ing form after “despite”.'],
      ['By this time tomorrow, we will ___ @.', 'have ^|to ~|having ^', '“Will have” plus the past participle marks completion by a future point.'],
      ['Sami had the instructions, so he ___ have known how to ~ @. He still pressed the wrong button.', 'should|cannot|must not', '“Should have known” expresses what could reasonably have been expected.'],
      ['You can ~ @ provided that you follow the rules. What does “provided that” introduce?', 'A condition|A reason this is impossible|A time in the past', '“Provided that” means “on condition that”.'],
      ['We ___ have ^ @, but we chose not to.', 'could|must|will', '“Could have” presents a past possibility that was not taken.'],
      ['We agreed to ~ @, even though the plan would cost more. What is the relationship between the ideas?', 'We accepted a disadvantage|The higher cost was our goal|The plan became cheaper', '“Even though” signals a contrast with an accepted fact.'],
      ['The teacher insisted that every group ___ @ before leaving.', '~|will ~|to ~', 'A formal mandative clause can use the base verb after “insisted that”.'],
      ['No sooner had Sami ___ @ than the bell rang.', '^|to ~|would ~', '“No sooner had” takes a past participle and is paired with “than”.'],
      ['Sami wishes he ___ @ yesterday.', 'had ^|will ~|has ^', '“Wish” plus past perfect expresses regret about the past.']
    ],
    [
      ['Lina did ~ @. That said, she had to revise her plan. What does “that said” do?', 'Introduce a qualification|Repeat the previous claim|State a certain consequence', '“That said” acknowledges the preceding point before a qualification.'],
      ['Were the room available, we could ~ @. What does the first clause express?', 'An imagined condition|A confirmed fact|A past instruction', '“Were …” is a formal equivalent of “if … were”.'],
      ['Sami claims to have ^ @. What does “claims” allow the writer to do?', 'Report a statement without vouching for it|Confirm the statement independently|Prove the statement false', '“Claims” attributes the statement and leaves its truth open.'],
      ['Lina did not promise to ~ @. What can we conclude with certainty?', 'She made no such promise|She promised never to do it|She definitely did not do it', 'Negating the promise does not tell us whether the action happened.'],
      ['Far from being unable to ~ @, Sami taught the others how to do it. What does “far from” do?', 'Strongly reject the stated description|Express physical distance|Confirm the stated inability', '“Far from” dismisses the description that follows it.'],
      ['It is one thing to ~ @ and another to teach someone how. Which distinction is made?', 'Doing the task differs from explaining how to do it|Explaining is impossible|The task has two locations', '“It is one thing … and another …” separates two abilities or situations.'],
      ['Sami said he had ^ @, whatever the others might think. What does the final clause indicate?', 'Their views do not change his statement|They agree with him|They have given him an instruction', '“Whatever …” makes the statement independent of others’ views.'],
      ['Only after Lina had ^ @ did she notice the mistake. When did she notice it?', 'After completing the action|Before starting|While choosing the location', '“Only after” emphasises the point at which something became possible or happened.'],
      ['Sami arrived @ with a view to completing the following task: ~. What does “with a view to” signal?', 'A planned objective|A confirmed outcome|A contrast with his plan', '“With a view to” introduces an aim.'],
      ['The team failed to ~ @, notwithstanding its careful preparation. What does “notwithstanding” mean?', 'In spite of|As a result of|In order to improve', '“Notwithstanding” is a formal concession marker meaning “despite”.']
    ],
    [
      ['“Lina has ^ @, or so she says.” What does the ending suggest?', 'The writer reserves judgement about the claim|The writer verifies the claim|The writer quotes an order', '“Or so she says” distances the speaker from the truth of the claim.'],
      ['“It is not inconceivable that they could ~ @.” Which paraphrase preserves the caution?', 'It is possible, though far from certain|It is bound to happen|It is unthinkable', 'The double negative leaves open a possibility without presenting it as likely.'],
      ['“As if Sami had time to ~ @!” What is the most likely implication?', 'The speaker doubts that Sami has time|Sami has plenty of time|The speaker asks for the exact time', 'An exclamatory “as if” often signals disbelief.'],
      ['“They managed to ~ @, if ‘managed’ is quite the word.” Why add the final clause?', 'To question how accurately the verb describes the outcome|To specify when the task happened|To guarantee the team succeeded fully', 'The speaker comments on the suitability of their own wording.'],
      ['“Be that as it may, the team will ~ @.” What is the effect of the opening?', 'Set aside the previous point without settling it|Agree completely with the previous point|Give the sole cause of the plan', '“Be that as it may” moves the discussion on while allowing the previous point to stand.'],
      ['“To say they had ^ @ would be to overstate the case.” What does the sentence imply?', 'The available facts warrant a weaker claim|The claim is a proven certainty|The task was never attempted', '“Overstate” flags a statement stronger than the evidence justifies.'],
      ['“For all Lina’s efforts to ~ @, the plan fell through.” What does the initial phrase do?', 'Acknowledge effort while contrasting it with failure|Say the effort itself caused the failure|Explain that no effort was made', '“For all” means “despite” in this concessive construction.'],
      ['“Sami did ~ @, albeit with some difficulty.” What is preserved by “albeit”?', 'The action happened, with a caveat about how|The action is denied|The action is made conditional on a future event', '“Albeit” adds a concession without cancelling the main assertion.'],
      ['“Lina reported that Sami had ^ @, which is not to say she saw him do it.” Which inference does she block?', 'That her report implies first-hand observation|That an action was reported|That Sami was mentioned', '“Which is not to say” explicitly blocks a possible inference.'],
      ['“They might well ~ @, but that is beside the point.” What does the speaker do?', 'Grants the possibility while denying its relevance|Denies the possibility|Makes it the deciding issue', '“Beside the point” concerns relevance, while “might well” grants plausibility.']
    ]
  ]
};

function makeQuestion(language, levelIndex, patternIndex, situationIndex) {
  const [verb, participle, setting] = situations[language][situationIndex];
  const [prompt, options, explanation] = patterns[language][levelIndex][patternIndex];
  const substitutions = {'~': verb, '^': participle, '@': setting};
  const expand = (value) => value.replace(/[~^@]/g, (symbol) => substitutions[symbol]);
  const [correct, ...distractors] = options.split('|').map(expand);
  return {
    id: [levels[levelIndex], patternIndex, situationIndex].join('-'),
    level: levels[levelIndex],
    prompt: expand(prompt),
    correct,
    distractors,
    explanation
  };
}

const training = {};
const placement = {};
for (const language of ['fr', 'en']) {
  training[language] = {};
  placement[language] = [];
  for (const [levelIndex, level] of levels.entries()) {
    training[language][level] = situations[language].slice(0, 30).flatMap((_, roundIndex) =>
      patterns[language][levelIndex].map((_, patternIndex) =>
        makeQuestion(language, levelIndex, patternIndex, (roundIndex + 7 * patternIndex) % 30)
      )
    );
    const start = levelIndex * 4;
    const original = originalPlacement[language].slice(start, start + 4).map(([prompt, options, correct], index) => ({
      id: level + '-original-' + index,
      level,
      prompt,
      correct: options[correct],
      distractors: options.filter((_, optionIndex) => optionIndex !== correct)
    }));
    const additional = Array.from({length: placementCounts[levelIndex] - original.length}, (_, index) =>
      makeQuestion(language, levelIndex, (levelIndex + index * 3) % 10, 30 + index)
    );
    placement[language].push(...original, ...additional);
  }
}

let profile = localStorage.getItem('lk_profile') || '';
let language = '';
let progress = null;
const words = (french, english) => language === 'fr' ? french : english;
const byId = (id) => document.getElementById(id);
const esc = (value) => String(value).replace(/[&<>"']/g, (character) =>
  ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character])
);

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function profileKey() {
  return 'lk_v2_' + language + '_' + profile.toLowerCase().normalize('NFC');
}

function save() {
  localStorage.setItem(profileKey(), JSON.stringify(progress));
}

function welcome() {
  app.innerHTML = `<h2>👋 Choisis ton prénom / Choose your name</h2>
    <form id="profile-form">
      <label for="name">Prénom / First name</label>
      <p><input id="name" maxlength="25" required autocomplete="off"></p>
      <button class="primary">🚀 C’est parti / Let’s go!</button>
    </form>`;
  byId('profile-form').onsubmit = (event) => {
    event.preventDefault();
    profile = byId('name').value.trim().slice(0, 25);
    if (!profile) return;
    localStorage.setItem('lk_profile', profile);
    home();
  };
}

function home() {
  releaseAudio();
  document.documentElement.lang = 'fr';
  app.innerHTML = `<h2>✨ Bonjour / Hello, ${esc(profile)} !</h2>
    <p>Choisis une langue / Choose a language</p>
    <div class="row"><button id="fr">🇫🇷 Français</button><button id="en">🇬🇧 English</button></div>
    <p><button id="change">👤 Changer de prénom / Change explorer</button></p>`;
  byId('fr').onclick = () => choose('fr');
  byId('en').onclick = () => choose('en');
  byId('change').onclick = () => {
    profile = '';
    localStorage.removeItem('lk_profile');
    welcome();
  };
}

function choose(selected) {
  language = selected;
  document.documentElement.lang = selected;
  progress = read(profileKey()) || {result: null, mastered: {}, run: null};
  renderMenu();
}

// Progress rewards are local to this profile and shared across both languages.
// Claim IDs prevent a replay or a corrected answer from being paid twice.
function treasureKey() {
  return 'lk_treasures_v1_' + profile.toLowerCase().normalize('NFC');
}
function treasureState() {
  const stored = read(treasureKey());
  return {claims: stored?.claims && typeof stored.claims === 'object' ? stored.claims : {},
    reflection: Array.isArray(stored?.reflection) ? stored.reflection.slice(0, 3) : []};
}
function treasurePoints(state = treasureState()) {
  return Object.values(state.claims).filter(value => value === 5).length * 5;
}
const treasureMilestones = [
  [25, '🗝️', 'La clé de la curiosité', 'The curiosity key'],
  [60, '🧭', 'La boussole des explorateurs', 'The explorer compass'],
  [110, '💎', 'Le cristal des découvertes', 'The discovery crystal'],
  [160, '🌟', 'L’étoile de la persévérance', 'The perseverance star'],
  [200, '🏆', 'Le coffre des progrès', 'The progress chest']
];
function awardTreasure(run, item, correct) {
  if (run.mode !== 'practice' || !correct) return '';
  const state = treasureState();
  const key = language + ':' + run.level + ':' + item.id;
  if (Object.hasOwn(state.claims, key)) return words('Cet exercice a déjà donné ses points.', 'This exercise has already earned its points.');
  const before = treasurePoints(state);
  state.claims[key] = 5;
  localStorage.setItem(treasureKey(), JSON.stringify(state));
  const found = treasureMilestones.filter(([threshold]) => before < threshold && before + 5 >= threshold);
  return words('+5 points de progression.', '+5 progress points.') + found.map(([, icon, fr, en]) =>
    ' ' + icon + ' ' + words('Trésor découvert : ', 'Treasure discovered: ') + words(fr, en)).join('');
}
function treasurePanel() {
  const state = treasureState();
  const points = treasurePoints(state);
  return `<section aria-label="${words('Trésors', 'Treasures')}"><h3>🗺️ ${words('Tes trésors', 'Your treasures')} · ${points} points</h3>
    <p>${words('Un nouvel exercice réussi donne 5 points, même après une correction. Une erreur ne retire aucun point. Le test de niveau ne donne aucun point.', 'Each newly mastered exercise earns 5 points, including after correction. Mistakes never remove points. The placement test earns no points.')}</p>
    <p>${treasureMilestones.map(([threshold, icon, fr, en]) => points >= threshold
      ? `${icon} ${words(fr, en)}` : `🔒 ${threshold} points`).join(' · ')}</p>
    ${points >= 200 ? `<details><summary>${words('🏆 200 points : mon bilan en famille', '🏆 200 points: my family reflection')}</summary>
      <p>${words('Parle de tes progrès avec un adulte. Vous pouvez choisir ensemble un moment à partager ou une récompense occasionnelle. Aucun argent n’est versé par l’application.', 'Talk about your progress with an adult. Together you may choose a shared activity or an occasional reward. The app does not pay money.')}</p>
      ${[words('Ce que j’ai appris', 'What I learned'), words('Une difficulté que j’ai surmontée', 'A difficulty I overcame'), words('Ce dont je suis fier ou fière', 'What I am proud of')].map((label, index) => `<p><label for="treasure-reflection-${index}">${label}</label><br><textarea id="treasure-reflection-${index}" maxlength="500" rows="2">${esc(state.reflection[index] || '')}</textarea></p>`).join('')}
      <button id="treasure-save">${words('Enregistrer mon bilan', 'Save my reflection')}</button><p id="treasure-saved" role="status"></p></details>` : ''}
    <p><small>${words('Points et bilan conservés dans ce navigateur, pour ce prénom. Ils ne sont pas synchronisés entre appareils.', 'Points and reflection are saved in this browser for this name. They do not sync between devices.')}</small></p></section>`;
}
function bindTreasurePanel() {
  const button = byId('treasure-save');
  if (button) button.onclick = () => {
    const state = treasureState();
    state.reflection = [0, 1, 2].map(index => byId('treasure-reflection-' + index).value.trim().slice(0, 500));
    localStorage.setItem(treasureKey(), JSON.stringify(state));
    byId('treasure-saved').textContent = words('Bilan enregistré.', 'Reflection saved.');
  };
}

function renderMenu() {
  releaseAudio();
  const {result, run} = progress;
  const assessmentCopy = words(
    '50 questions pour trouver ton niveau de départ. Réponds une seule fois à chaque question.',
    '50 questions to find your starting level. Answer each question once.'
  );
  const legacy = !result && read('lk_result_' + language);
  app.innerHTML = `<h2>${words('🇫🇷 Ton aventure en français', '🇬🇧 Your English adventure')}</h2>
    ${result ? `<p>${words('Niveau de départ indicatif', 'Suggested starting level')} <strong>${result.level}</strong>
      · ${result.score}/50 ${words('au premier passage', 'on the first try')}</p>
      <label for="level">${words('Niveau d’entraînement', 'Practice level')}</label>
      <select id="level" style="font:inherit;padding:8px">${levels.map((level) =>
        `<option${level === result.level ? ' selected' : ''}>${level}</option>`).join('')}</select>
      <p id="practice-count"></p>` : `<p>${assessmentCopy}</p>
      ${legacy ? `<p><small>${words('Le nouveau test est disponible.', 'The new assessment is available.')}</small></p>` : ''}`}
    ${treasurePanel()}
    <p class="row">
      ${run ? `<button class="primary" id="resume">${words('▶ Reprendre', '▶ Resume')}</button>` : ''}
      ${!run && result ? `<button class="primary" id="practice">${words('Commencer une série', 'Start a round')}</button>` : ''}
      ${!run ? `<button ${result ? '' : 'class="primary"'} id="assess">${result
        ? words('Refaire le test de niveau', 'Retake the assessment')
        : words('Commencer le test de niveau', 'Start the placement test')}</button>` : ''}
    </p><button id="back">${words('← Accueil', '← Home')}</button>`;
  bindTreasurePanel();
  byId('back').onclick = home;
  if (run) byId('resume').onclick = renderQuestion;
  if (byId('assess')) byId('assess').onclick = () => startRun('placement', '', placement[language]);
  if (result) {
    const select = byId('level');
    const update = () => {
      const count = (progress.mastered[select.value] || []).length;
      byId('practice-count').textContent = words(`${count} / 300 exercices réussis`, `${count} / 300 exercises completed`);
    };
    select.onchange = update;
    update();
    if (!run) byId('practice').onclick = () => {
      const level = select.value;
      const pool = training[language][level];
      const mastered = new Set(progress.mastered[level] || []);
      const remaining = pool.filter((item) => !mastered.has(item.id));
      startRun('practice', level, (remaining.length ? remaining : shuffle(pool)).slice(0, sessionSize));
    };
  }
}

function shuffle(items) {
  const mixed = [...items];
  for (let index = mixed.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [mixed[index], mixed[other]] = [mixed[other], mixed[index]];
  }
  return mixed;
}

// Each project is delivered in three steps inside a practice round.
const roundProjects = {
  fr: [
    ['Mieux accueillir un nouvel élève',
      'Imagine que tu arrives dans une école où tu ne connais personne. Qu’aimerais-tu savoir ? Prépare deux questions à poser à un camarade ou à un adulte de confiance.',
      'Compare deux idées, par exemple un plan de l’école et un camarade qui fait visiter. Dis laquelle tu essaierais, pourquoi, et dans quel rôle tu veux aider.',
      'Quel petit geste peux-tu essayer avec un adulte de confiance ? Si tu l’as essayé, qu’as-tu remarqué ? Sinon, à quel signe verras-tu s’il a aidé ?'],
    ['Aménager un coin calme',
      'Qui aurait envie d’un coin calme dans un espace partagé ? Quelles questions peux-tu poser pour comprendre ce qui lui serait utile ?',
      'Propose deux aménagements simples. Choisis-en un et présente-le à voix haute en donnant une raison et en répondant à une objection possible.',
      'Avec l’accord d’un adulte, quel petit changement pourrais-tu tester ? Comment sauras-tu s’il convient aux personnes qui utilisent cet espace ?'],
    ['Organiser une boîte de jeux commune',
      'Qu’est-ce qui rend une boîte de jeux difficile à utiliser ? Demande un avis ou prépare une question pour quelqu’un qui l’utilise.',
      'Compare deux moyens de mieux ranger les jeux. Décris ce que tu ferais en premier et comment tu ferais participer les autres.',
      'Si tu as testé ton idée, qu’as-tu observé et que changerais-tu ? Si tu n’as pas encore essayé, comment vérifieras-tu que les jeux sont plus faciles à trouver ?'],
    ['Faire une affiche utile',
      'Choisis une information utile à partager dans ta classe ou ton club. Qui en a besoin ? Auprès de qui pourrais-tu vérifier qu’elle est exacte ?',
      'Propose deux façons de présenter cette information. Dis laquelle est la plus claire, puis demande à quelqu’un de reformuler ton message.',
      'Qu’as-tu changé après le retour de la personne ? Si tu n’as pas encore pu le lui montrer, qu’aimerais-tu qu’elle puisse redire ?'],
    ['Rendre un jeu plus accueillant',
      'Un groupe joue toujours avec les mêmes personnes. Prépare une question pour comprendre ce qui aiderait quelqu’un à rejoindre le jeu, s’il le souhaite.',
      'Imagine deux adaptations du jeu. Explique comment ton choix respecte les personnes qui ont envie de jouer et celles qui préfèrent regarder.',
      'Si tu as testé une adaptation avec le groupe, qu’as-tu remarqué ? Sinon, comment demanderais-tu aux joueurs si elle leur convient ?'],
    ['Réduire le gaspillage de papier',
      'Repère une situation où du papier est jeté alors qu’il pourrait servir. Quelle question poserais-tu pour comprendre pourquoi ?',
      'Compare deux idées, par exemple une boîte à brouillons ou un panneau d’idées de réutilisation. Présente ton choix et précise qui pourrait t’aider.',
      'Quel essai peux-tu mener avec un adulte de confiance ? Comment vérifierais-tu en quelques jours que le papier est davantage réutilisé ?']
  ],
  en: [
    ['Welcome a new pupil',
      'Imagine arriving at a school where you know no one. What would you want to know? Prepare two questions for a classmate or an adult you trust.',
      'Compare two ideas, such as a school map and a tour led by a classmate. Say which you would try, why, and what role you could play.',
      'What small step could you try with an adult you trust? If you tried it, what did you notice? If you have yet to try it, how will you tell if it helped?'],
    ['Make a quiet corner',
      'Who might like a quiet corner in a shared space? What could you ask to find out what would help them?',
      'Suggest two simple changes. Pitch one out loud, give a reason for it, and answer a possible objection.',
      'What small change could you try with an adult’s permission? How will you find out whether it suits the people who use the space?'],
    ['Organise a shared games box',
      'What makes a shared games box hard to use? Ask someone who uses it for an opinion, or prepare a question for them.',
      'Compare two ways to organise the games. Explain what you would do first and how you would involve others.',
      'If you tested your idea, what did you notice and what would you change? Otherwise, how will you check if the games are easier to find?'],
    ['Make a helpful poster',
      'Choose a useful piece of information to share in your class or club. Who needs it? Who could confirm that it is correct?',
      'Think of two ways to present it. Say which is clearer, then ask someone to repeat your message in their own words.',
      'What did you change after hearing their feedback? If you have yet to show them your message, what would you like them to remember?'],
    ['Make a game more welcoming',
      'A group always plays with the same people. Prepare a question to find out what might help another person join, if they want to.',
      'Think of two ways to adapt the game. Explain how your choice respects both those who want to play and those who would rather watch.',
      'If you tried a change with the group, what did you notice? Otherwise, how would you ask the players whether it works for them?'],
    ['Waste less paper',
      'Find a situation where paper is thrown away even though it could be used again. What would you ask to understand why?',
      'Compare two ideas, such as a scrap paper box and a display of ways to reuse paper. Explain your choice and who might help you.',
      'What could you try with an adult you trust? How could you check after a few days whether more paper is being reused?']
  ]
};

function nextProjectStep(run) {
  if (!run.project) return null;
  const milestones = [Math.ceil(run.ids.length * 0.3), Math.ceil(run.ids.length * 0.6), run.ids.length];
  const step = run.project.step;
  if (step < milestones.length && run.cursor >= milestones[step]) return step;
  return null;
}

function renderProjectStep(run, step) {
  const [title, ...prompts] = roundProjects[language][run.project.index];
  const labels = words(
    ['Observe et questionne', 'Propose et explique', 'Agis et fais ton bilan'],
    ['Observe and ask', 'Suggest and explain', 'Act and reflect']
  );
  const starters = words(
    ['J’aimerais savoir… Je demanderais…', 'Je pourrais… ou… Je choisis… parce que…', 'J’ai essayé… J’ai remarqué… / Je vais vérifier si…'],
    ['I would like to find out… I would ask…', 'I could… or… My choice is… because…', 'I tried… I noticed… / I will check whether…']
  );
  app.innerHTML = `<p class="tag">${words('Mini-projet', 'Mini-project')} · ${step + 1}/3</p>
    <h2 id="project-heading" tabindex="-1">${esc(title)}</h2>
    <h3>${labels[step]}</h3>
    <p>${esc(prompts[step])}</p>
    <p>${words('Réponds à voix haute. Si tu veux essayer ton idée avant de poursuivre, tu peux mettre la série en pause.', 'Answer out loud. If you want to try your idea before moving on, you can pause the round.')}</p>
    <details><summary>${words('Des mots pour commencer', 'Words to get started')}</summary><p>${starters[step]}</p></details>
    <p class="row"><button class="primary" id="project-next">${words('Continuer la série →', 'Continue the round →')}</button>
    <button id="project-pause">${words('Mettre en pause', 'Pause')}</button></p>`;
  byId('project-heading').focus();
  byId('project-pause').onclick = renderMenu;
  byId('project-next').onclick = () => {
    run.project.step++;
    save();
    renderQuestion();
  };
}

function pendingActivity(run) {
  if (run.mode !== 'practice') return null;
  const completed = run.activitiesDone || [];
  const index = [2, 5, 8].findIndex((milestone, index) =>
    run.cursor >= milestone && !completed.includes(index));
  return index === -1 ? null : index;
}

function renderActivity(run, activity) {
  const round = progress.projectRounds?.[run.level] || 0;
  if (activity === 0) {
    missionStage = Math.floor(levels.indexOf(run.level) / 2);
    showMission(round % missions[language][missionStage].length);
  } else if (activity === 1) {
    showChallenge(round % quickChallenges[language].length);
  } else {
    showDebates();
    if (!byId('debate-topic').disabled) {
      byId('debate-topic').value = round % debateTopics[language].length;
      byId('debate-topic').onchange();
    }
  }
  const navigation = app.querySelector('#missions-back, #challenge-list, #debate-back');
  const next = navigation.cloneNode(false);
  next.id = 'activity-next';
  next.className = 'primary';
  next.textContent = words('Continuer la série →', 'Continue the round →');
  navigation.replaceWith(next);
  next.onclick = () => {
    byId('challenge-timer')?.dispatchEvent(new Event('activity-end'));
    run.activitiesDone ||= [];
    run.activitiesDone.push(activity);
    save();
    renderQuestion();
  };
  const pause = document.createElement('button');
  pause.textContent = words('Mettre en pause', 'Pause');
  pause.onclick = () => {
    byId('challenge-timer')?.dispatchEvent(new Event('activity-end'));
    renderMenu();
  };
  next.after(pause);
}

function startRun(mode, level, items) {
  progress.run = {mode, level, ids: items.map((item) => item.id), cursor: 0, first: [], retry: [], corrected: 0};
  if (mode === 'practice') {
    const round = progress.projectRounds?.[level] || 0;
    progress.run.project = {index: round % roundProjects[language].length, step: 0};
  }
  save();
  renderQuestion();
}

function upcoming(run) {
  return run.cursor < run.ids.length ? run.ids[run.cursor] : run.mode === 'practice' ? run.retry[0] : undefined;
}

let releaseAudio = () => {};

function speakText(text, status, rate = 0.9) {
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    status.textContent = words('La lecture audio est indisponible dans ce navigateur.', 'Audio playback is unavailable in this browser.');
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/[_]+/g, ' … ').replace(/[🌟🍎🐘🐱🍌]/gu, ''));
  utterance.lang = language === 'fr' ? 'fr-FR' : 'en-GB';
  const voices = speechSynthesis.getVoices().filter(voice => voice.lang.toLowerCase().startsWith(language));
  utterance.voice = voices.find(voice => voice.localService) || voices[0] || null;
  utterance.rate = rate;
  utterance.onstart = () => { if (status.isConnected) status.textContent = words('Lecture en cours…', 'Playing…'); };
  utterance.onend = () => { if (status.isConnected) status.textContent = ''; };
  utterance.onerror = () => { if (status.isConnected) status.textContent = words('Lecture interrompue. Tu peux réessayer.', 'Playback stopped. You can try again.'); };
  speechSynthesis.speak(utterance);
}

function pendingPronunciation(run) {
  if (run.mode !== 'practice') return null;
  const index = [4, 9].findIndex(milestone => run.cursor >= milestone && !(run.voiceDone || []).includes(milestone));
  return index === -1 ? null : [4, 9][index];
}

function renderPronunciation(run, milestone) {
  const item = training[language][run.level].find(question => question.id === run.ids[milestone - 1]);
  const model = item.prompt.includes('___') ? item.prompt.replace('___', item.correct) : item.correct;
  app.innerHTML = `<p class="tag">${words('🎙️ Prononciation', '🎙️ Pronunciation')}</p>
    <h2>${words('Écoute, répète et compare', 'Listen, repeat, and compare')}</h2>
    <p>${esc(model)}</p>
    <div class="row"><button id="voice-model">${words('Écouter le modèle', 'Listen to the model')}</button>
      <button id="voice-slow">${words('Écouter lentement', 'Listen slowly')}</button></div>
    <p id="voice-status" role="status"></p>
    <p>${words('Répète à voix haute. Tu peux enregistrer un essai de 20 secondes, puis te réécouter et comparer avec le modèle. Cet essai reste dans cette page et disparaît en la quittant.',
      'Repeat out loud. You can record a 20-second attempt, replay it, and compare it with the model. This recording stays on this page and disappears when you leave it.')}</p>
    <button id="voice-record">${words('M’enregistrer', 'Record myself')}</button>
    <audio id="voice-playback" controls hidden style="display:block;max-width:100%;margin:12px 0" aria-label="${words('Mon essai', 'My recording')}"></audio>
    <p><label><input id="voice-reflect" type="checkbox"> ${words('J’ai comparé les sons, le rythme et les pauses.', 'I compared the sounds, rhythm, and pauses.')}</label></p>
    <p class="row"><button class="primary" id="voice-next">${words('Continuer la série →', 'Continue the round →')}</button>
      <button id="voice-pause">${words('Mettre en pause', 'Pause')}</button></p>`;
  const status = byId('voice-status');
  const record = byId('voice-record');
  const playback = byId('voice-playback');
  let stream, recorder, timeout, objectUrl;
  const stopTracks = () => stream?.getTracks().forEach(track => track.stop());
  releaseAudio = () => {
    clearTimeout(timeout);
    if (recorder?.state === 'recording') recorder.stop();
    stopTracks();
    playback.pause();
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  };
  const listen = rate => {
    if (recorder?.state === 'recording') recorder.stop();
    stopTracks();
    playback.pause();
    speakText(model, status, rate);
  };
  byId('voice-model').onclick = () => listen(0.9);
  byId('voice-slow').onclick = () => listen(0.65);
  if (!navigator.mediaDevices?.getUserMedia || !('MediaRecorder' in window)) {
    record.disabled = true;
    status.textContent = words('Tu peux répéter à voix haute. L’enregistrement est indisponible dans ce navigateur.', 'You can repeat out loud. Recording is unavailable in this browser.');
  }
  record.onclick = async () => {
    if (recorder?.state === 'recording') {
      recorder.stop();
      stopTracks();
      return;
    }
    record.disabled = true;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    playback.pause();
    try {
      stream = await navigator.mediaDevices.getUserMedia({audio: true});
      if (!record.isConnected) { stopTracks(); return; }
      const chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = () => {
        clearTimeout(timeout);
        stopTracks();
        if (!record.isConnected) return;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        objectUrl = URL.createObjectURL(new Blob(chunks, {type: recorder.mimeType}));
        playback.src = objectUrl;
        playback.hidden = false;
        record.textContent = words('Refaire mon essai', 'Try recording again');
        status.textContent = words('Écoute ton essai, puis compare-le au modèle.', 'Replay your attempt, then compare it with the model.');
      };
      recorder.onerror = () => {
        stopTracks();
        status.textContent = words('L’enregistrement a été interrompu. Réessaie.', 'Recording was interrupted. Try again.');
      };
      recorder.start();
      record.disabled = false;
      record.textContent = words('Arrêter mon enregistrement', 'Stop recording');
      status.textContent = words('Enregistrement en cours · 20 secondes maximum.', 'Recording · 20 seconds maximum.');
      timeout = setTimeout(() => {
        if (recorder.state === 'recording') recorder.stop();
        stopTracks();
      }, 20000);
    } catch {
      stopTracks();
      if (record.isConnected) {
        record.disabled = false;
        status.textContent = words('Microphone indisponible ou autorisation refusée. Tu peux répéter à voix haute et continuer.', 'Microphone unavailable or permission denied. You can repeat out loud and continue.');
      }
    }
  };
  byId('voice-next').onclick = () => {
    run.voiceDone ||= [];
    if (!run.voiceDone.includes(milestone)) run.voiceDone.push(milestone);
    save();
    renderQuestion();
  };
  byId('voice-pause').onclick = renderMenu;
}
window.addEventListener('pagehide', () => releaseAudio());

function renderQuestion() {
  releaseAudio();
  releaseAudio = () => { if ('speechSynthesis' in window) speechSynthesis.cancel(); };
  const run = progress.run;
  if (run.mode === 'placement' && run.cursor >= run.ids.length) return completeRun();
  const pronunciation = pendingPronunciation(run);
  if (pronunciation !== null) return renderPronunciation(run, pronunciation);
  const activity = pendingActivity(run);
  if (activity !== null) return renderActivity(run, activity);
  const step = nextProjectStep(run);
  if (step !== null) return renderProjectStep(run, step);
  const retrying = run.cursor >= run.ids.length;
  const id = upcoming(run);
  if (!id) return completeRun();
  const pool = run.mode === 'placement' ? placement[language] : training[language][run.level];
  const item = pool.find((question) => question.id === id);
  const options = shuffle([item.correct, ...item.distractors]);
  const listening = run.mode === 'practice' && [1, 6].includes(run.ids.indexOf(item.id));
  const prompt = listening ? words('Écoute, puis choisis ce que tu entends.', 'Listen, then choose what you hear.') : item.prompt;
  const status = retrying ? words(`Révision · ${run.retry.length} à reprendre`, `Review · ${run.retry.length} to retry`)
    : words(`Question ${run.cursor + 1} sur ${run.ids.length}`, `Question ${run.cursor + 1} of ${run.ids.length}`);
  app.innerHTML = `<p class="tag">${status}</p>
    <div class="progress" aria-hidden="true"><div style="width:${run.cursor / run.ids.length * 100}%"></div></div>
    <h2 style="margin-top:16px">${esc(prompt)}</h2>
    <p class="row"><button id="question-audio">${words('Écouter', 'Listen')}</button><button id="question-slow">${words('Écouter lentement', 'Listen slowly')}</button></p>
    <p id="question-audio-status" role="status"></p>
    ${listening ? `<details><summary>${words('Afficher le texte si le son est indisponible', 'Show text if audio is unavailable')}</summary><p>${esc(item.correct)}</p></details>` : ''}
    <div id="options"></div>
    <p id="feedback" role="status"></p><p id="treasure-feedback" role="status"></p>
    <div class="row">
      <button class="primary" id="next" disabled>${words('Suivant →', 'Next →')}</button>
      <button id="pause">${words('Mettre en pause', 'Pause')}</button>
    </div>`;
  const sound = listening ? item.correct : item.prompt;
  byId('question-audio').onclick = () => speakText(sound, byId('question-audio-status'));
  byId('question-slow').onclick = () => speakText(sound, byId('question-audio-status'), 0.65);
  byId('pause').onclick = renderMenu;
  for (const option of options) {
    const button = document.createElement('button');
    button.className = 'choice';
    button.textContent = option;
    button.onclick = () => {
      const correct = option === item.correct;
      for (const choice of byId('options').children) {
        choice.disabled = true;
        if (choice.textContent === item.correct) choice.style.borderColor = '#16a06c';
        else if (choice === button) choice.style.borderColor = '#e05266';
      }
      const feedback = byId('feedback');
      feedback.textContent = correct ? words('🌟 Bravo !', '🌟 Well done!')
        : words('Bonne réponse : ', 'Correct answer: ') + item.correct;
      if (item.explanation && !listening) feedback.textContent += ' ' + item.explanation;
      if (!correct) {
        const correction = document.createElement('button');
        correction.id = 'correction-audio';
        correction.textContent = words('Écouter la correction', 'Listen to the correction');
        correction.onclick = () => speakText(feedback.textContent, byId('question-audio-status'));
        feedback.after(correction);
      }
      const reward = recordAnswer(run, item, correct, retrying);
      byId('treasure-feedback').textContent = reward;
      byId('next').disabled = false;
      byId('next').onclick = renderQuestion;
      byId('pause').onclick = () => upcoming(run) || nextProjectStep(run) !== null || pendingActivity(run) !== null || pendingPronunciation(run) !== null ? renderMenu() : completeRun();
    };
    byId('options').appendChild(button);
  }
}

function recordAnswer(run, item, correct, retrying) {
  const reward = awardTreasure(run, item, correct);
  if (retrying) {
    run.retry.shift();
    if (correct) run.corrected++;
  } else {
    if (run.mode === 'placement') run.first.push(correct);
    run.cursor++;
  }
  if (!correct && run.mode === 'practice') run.retry.push(item.id);
  if (correct && run.mode === 'practice') {
    const mastered = progress.mastered[run.level] || [];
    if (!mastered.includes(item.id)) mastered.push(item.id);
    progress.mastered[run.level] = mastered;
  }
  save();
  return reward;
}

function startingResult(first) {
  let level = levels[0];
  let offset = 0;
  for (const [index, count] of placementCounts.entries()) {
    const correct = first.slice(offset, offset + count).filter(Boolean).length;
    if (correct / count < 0.7) break;
    level = levels[index];
    offset += count;
  }
  return {level, score: first.filter(Boolean).length};
}

function completeRun() {
  const run = progress.run;
  const diagnostic = run.mode === 'placement';
  if (diagnostic) progress.result = startingResult(run.first);
  if (run.project) {
    progress.projectRounds ??= {};
    progress.projectRounds[run.level] = (progress.projectRounds[run.level] || 0) + 1;
  }
  progress.run = null;
  save();
  app.innerHTML = `<h2>🎉 ${words('Bravo', 'Well done')}, ${esc(profile)} !</h2>
    ${diagnostic ? `<p>${words('Ton niveau de départ conseillé', 'Your suggested starting level')} <strong>${progress.result.level}</strong>.</p>
      <p>${progress.result.score}/50 ${words('au premier passage', 'on the first try')}.</p>
      <p><small>${words('Le résultat est indicatif et repose sur tes 50 premières réponses.', 'This indicative result is based on your 50 initial answers.')}</small></p>`
      : `<p>${words('Série terminée', 'Round complete')} · ${run.ids.length} ${words('exercices réussis', 'exercises completed')}.</p>`}
    ${run.corrected ? `<p>${words('Questions réussies après reprise', 'Questions mastered on retry')} <strong>${run.corrected}</strong></p>` : ''}
    ${diagnostic ? '' : treasurePanel()}
    <button class="primary" id="finish">${words('Aller aux exercices', 'Go to practice')} →</button>`;
  bindTreasurePanel();
  byId('finish').onclick = renderMenu;
}

// Each activity pairs a concrete task with a sentence starter and an observable
// criterion. Both languages share activity IDs; practice is tracked separately.
const missions = {
  fr: [
    [
      ['Parler et écouter', 'Mon objet en trois phrases',
        'Choisis un objet près de toi. Dis à voix haute ce que c’est, à quoi il sert et pourquoi tu l’as choisi.',
        'Voici… Il sert à… Je l’ai choisi parce que…',
        'J’ai donné trois informations que quelqu’un pourrait redire.'],
      ['Prise de parole', 'Devant une personne',
        'Présente ton jeu préféré pendant 30 secondes à une personne de confiance. Tu peux d’abord répéter seul. Fais une pause entre deux idées.',
        'Aujourd’hui, je vous parle de… Pour jouer, il faut…',
        'J’ai commencé par annoncer mon sujet et j’ai parlé assez clairement pour être compris.'],
      ['Empathie', 'Une place dans le jeu',
        'Un enfant reste à côté du groupe. Il pourrait avoir envie de jouer ou préférer observer. Dis comment tu pourrais lui demander ce qu’il souhaite et respecter sa réponse.',
        'Est-ce que tu aimerais… ? Tu peux aussi…',
        'J’ai posé une question sans décider à sa place.'],
      ['Probité', 'Le point en trop',
        'Au jeu, on t’a compté un point de trop. Joue à voix haute le moment où tu le signales, même si cela change le résultat.',
        'Je crois qu’il y a une erreur. Vérifions…',
        'J’ai expliqué l’erreur et proposé de vérifier le score.']
    ],
    [
      ['Questionnement', 'La phrase qui intrigue',
        'Un camarade affirme que tout le monde préfère travailler en groupe. Pose deux questions ouvertes pour comprendre d’où vient cette idée, puis dis comment tu chercherais d’autres avis.',
        'Qu’est-ce qui te fait dire cela ? Comment pourrait-on… ?',
        'Mes questions permettent de découvrir quelque chose que je ne savais pas.'],
      ['Esprit critique', 'Une annonce à vérifier',
        'Un message dit que la bibliothèque ferme demain. Une affiche datée de la semaine dernière dit le contraire. Explique à voix haute ce qui est certain et comment vérifier avant d’en parler aux autres.',
        'Je sais que… Il me manque… Je vérifierais auprès de…',
        'J’ai distingué le message reçu d’une information confirmée.'],
      ['Initiative', 'Mon premier petit pas',
        'Choisis un problème du quotidien que tu peux aider à résoudre, comme une boîte de jeux mal rangée. Imagine deux solutions et propose un premier pas réalisable aujourd’hui.',
        'Je pourrais… ou… Je commence par… parce que…',
        'J’ai choisi une action concrète et dit quand je peux la faire.'],
      ['Action sociale', 'Une étagère utile à tous',
        'Avec l’accord d’un adulte, propose une idée pour rendre un espace partagé plus utile. Demande son avis à une personne qui l’utilise, puis essaie une petite amélioration si vous êtes d’accord. Prépare ton idée maintenant si l’action doit attendre.',
        'Qui utilise cet espace ? De quoi a-t-on besoin ? Nous pourrions essayer…',
        'J’ai prévu de consulter une personne concernée et de vérifier si le changement lui est utile.']
    ],
    [
      ['Prise de parole', 'Convaincre en une minute',
        'Présente une amélioration possible pour ton école, ta classe ou ton club. Donne un exemple, réponds à une objection probable et termine par une demande précise. Répète seul, puis présente-la à un petit groupe de confiance si tu le souhaites.',
        'Je propose… Un exemple est… On pourrait objecter que… Je vous demande de…',
        'Mon public peut redire mon idée, une raison et ce que je lui propose de faire.'],
      ['Esprit critique', 'Une preuve qui pourrait me faire changer d’avis',
        'Une vidéo affirme qu’écouter de la musique aide tous les enfants à se concentrer. Explique pourquoi une seule expérience ne suffit pas. Propose une comparaison simple et dis quel résultat te ferait changer d’avis.',
        'Une limite est… Je comparerais… Je changerais d’avis si…',
        'J’ai décrit un résultat qui pourrait contredire mon idée de départ.'],
      ['Valeurs et probité', 'Aider sans effacer le mérite',
        'Dans un travail de groupe, un ami veut supprimer le prénom d’une personne qui a pourtant contribué. Explique deux façons de répondre, en tenant compte de l’amitié et de l’équité. Puis joue la réponse que tu choisirais.',
        'Je comprends que… En même temps… Une solution juste serait…',
        'J’ai reconnu deux points de vue et proposé d’attribuer chaque contribution à la bonne personne.'],
      ['Orientation et engagement', 'Trois rôles dans un projet',
        'Imagine un projet solidaire, par exemple accueillir les nouveaux élèves. Choisis un rôle à essayer cette semaine avec un adulte de confiance : écouter les besoins, organiser une action ou présenter l’idée. Dis pourquoi il t’attire et comment tu sauras ce que tu as appris.',
        'J’aimerais essayer le rôle de… Mon premier pas serait… Ensuite, je regarderai si…',
        'J’ai choisi un rôle à expérimenter et un signe concret qui m’aidera à réfléchir à cette expérience.']
    ]
  ],
  en: [
    [
      ['Speaking and listening', 'My object in three sentences',
        'Pick an object nearby. Say what it is, what it is for, and why you chose it. Speak out loud.',
        'This is… We use it to… I chose it because…',
        'I gave three details that someone could repeat.'],
      ['Public speaking', 'Speaking to one person',
        'Talk about your favourite game for 30 seconds to someone you trust. Practise on your own first if you like. Pause between two ideas.',
        'Today I’m talking about… To play, you need to…',
        'I introduced my topic and spoke clearly enough to be understood.'],
      ['Empathy', 'A place in the game',
        'A child stays beside the group. They might want to join or might prefer to watch. Say how you could ask what they want and respect their answer.',
        'Would you like to…? You can also…',
        'I asked what they wanted and left the decision to them.'],
      ['Integrity', 'One point too many',
        'You have been given an extra point in a game. Act out how you would tell the others, even if it changes the result.',
        'I think there’s a mistake. Let’s check…',
        'I explained the mistake and offered to check the score.']
    ],
    [
      ['Asking questions', 'The claim that made me curious',
        'A classmate says everyone prefers working in groups. Ask two open questions to find out where that idea comes from. Say how you could hear other views.',
        'What makes you say that? How could we…?',
        'My questions could help me learn something new.'],
      ['Critical thinking', 'Check an announcement',
        'A message says the library will be closed tomorrow. A notice dated last week says otherwise. Explain out loud what you know and how you would check before telling anyone else.',
        'I know that… I still need to find out… I would check with…',
        'I explained which information had been confirmed and which still needed checking.'],
      ['Initiative', 'My first small step',
        'Choose an everyday problem you could help solve, such as messy game supplies. Think of two possible solutions and propose one step you could take today.',
        'I could… or… I’ll start by… because…',
        'I chose an action and said when I could take it.'],
      ['Community action', 'A shelf everyone can use',
        'With an adult’s permission, suggest a way to make a shared space more useful. Ask someone who uses it for their opinion. Try one small change if you agree. Prepare your idea now if the action has to wait.',
        'Who uses this space? What do they need? We could try…',
        'I planned to ask someone affected and check whether the change helped.']
    ],
    [
      ['Public speaking', 'Make your case in one minute',
        'Present an improvement for your school, class, or club. Give one example, respond to a likely objection, and end with a clear request. Rehearse alone, then speak to a small group you trust if you wish.',
        'I propose… For example… Some people may say… I’m asking you to…',
        'My audience could repeat my idea, one reason, and what I am asking them to do.'],
      ['Critical thinking', 'What evidence could change my mind?',
        'A video claims that listening to music helps every child concentrate. Explain why one experience is insufficient. Suggest a simple comparison and say what result would change your mind.',
        'One limitation is… I would compare… I would change my mind if…',
        'I described a result that could challenge my original idea.'],
      ['Values and integrity', 'Give credit fairly',
        'In a group project, a friend wants to leave out the name of someone who contributed. Explain two ways you could respond while considering friendship and fairness. Act out the response you would choose.',
        'I understand that… At the same time… A fair solution would be…',
        'I considered two points of view and gave credit to each person for their contribution.'],
      ['Exploring roles and community action', 'Three roles in a project',
        'Imagine a project that helps others, for example welcoming new pupils. Choose a role to try this week with a trusted adult: listening to people’s needs, organising an action, or presenting the idea. Explain why it interests you and how you would tell what you learned.',
        'I’d like to try… My first step would be… Afterwards, I’ll look at whether…',
        'I chose a role to try and one thing I could look for when reflecting on it.']
    ]
  ]
};

const missionStages = {
  fr: ['Découvrir', 'S’exercer', 'Agir et argumenter'],
  en: ['Explore', 'Practise', 'Act and make a case']
};
const missionStatuses = {
  fr: {'try': 'À réessayer', 'help': 'Réalisé avec aide', 'alone': 'Réalisé seul'},
  en: {'try': 'Try again', 'help': 'Done with help', 'alone': 'Done on my own'}
};
let missionStage = 0;

function missionKey() {
  return profileKey() + '_missions';
}

function showMissions() {
  const entries = missions[language][missionStage];
  const completed = read(missionKey()) || {};
  app.innerHTML = `<h2>${words('🎤 Mes missions', '🎤 My missions')}</h2>
    <p>${words('Parle à voix haute, essaie une petite action ou discute avec une personne de confiance.', 'Speak out loud, try a small action, or talk with someone you trust.')}</p>
    <p class="row">
      <button class="primary" id="open-debates">${words('💬 Mini-débats avec l’IA', '💬 Mini-debates with AI')}</button>
      <button id="open-challenges">${words('⚡ Défis express', '⚡ Quick challenges')}</button>
    </p>
    <label for="mission-stage">${words('Parcours', 'Stage')}</label>
    <select id="mission-stage" style="font:inherit;padding:8px">${missionStages[language].map((label, index) =>
      `<option value="${index}"${index === missionStage ? ' selected' : ''}>${label}</option>`).join('')}</select>
    ${entries.map(([topic, title], index) => {
      const status = missionStatuses[language][completed[`${missionStage}-${index}`]];
      return `<button class="choice" data-mission="${index}"><strong>${esc(title)}</strong>
        <br><small>${esc(topic)}${status ? ' · ' + esc(status) : ''}</small></button>`;
    }).join('')}
    <button id="mission-exit">${words('← Retour au français', '← Back to English')}</button>`;
  byId('mission-stage').onchange = (event) => {
    missionStage = Number(event.target.value);
    showMissions();
    byId('mission-stage').focus();
  };
  app.querySelectorAll('[data-mission]').forEach((button) => {
    button.onclick = () => showMission(Number(button.dataset.mission));
  });
  byId('mission-exit').onclick = renderMenu;
  byId('open-debates').onclick = showDebates;
  byId('open-challenges').onclick = showChallenges;
}

function showMission(index) {
  const [topic, title, task, starter, criterion] = missions[language][missionStage][index];
  const id = `${missionStage}-${index}`;
  const completed = read(missionKey()) || {};
  const selected = completed[id];
  app.innerHTML = `<p class="tag">${esc(topic)}</p><h2 id="mission-title" tabindex="-1">${esc(title)}</h2>
    <p>${esc(task)}</p>
    <details><summary>${words('Des mots pour commencer', 'Words to get started')}</summary><p>${esc(starter)}</p></details>
    <fieldset style="margin:16px 0">
      <legend>${words('Comment ça s’est passé ?', 'How did it go?')}</legend>
      <p>${esc(criterion)}</p>
      <div class="row">${Object.entries(missionStatuses[language]).map(([value, label]) =>
        `<button type="button" data-status="${value}" aria-pressed="${value === selected}"${value === selected ? ' class="primary"' : ''}>${label}</button>`).join('')}</div>
      <p id="mission-feedback" role="status">${selected ? words('Bilan enregistré sur cet appareil.', 'Reflection saved on this device.') : ''}</p>
    </fieldset>
    <button id="missions-back">${words('← Toutes les missions', '← All missions')}</button>`;
  byId('mission-title').focus();
  byId('missions-back').onclick = showMissions;
  app.querySelectorAll('[data-status]').forEach((button, _, buttons) => {
    button.onclick = () => {
      const current = read(missionKey()) || {};
      current[id] = button.dataset.status;
      localStorage.setItem(missionKey(), JSON.stringify(current));
      buttons.forEach((choice) => {
        const active = choice === button;
        choice.setAttribute('aria-pressed', String(active));
        choice.classList.toggle('primary', active);
      });
      byId('mission-feedback').textContent = words('Bilan enregistré sur cet appareil.', 'Reflection saved on this device.');
    };
  });
}

const debateTopics = {
  fr: [
    'Faut-il laisser les élèves choisir une partie de leurs devoirs ?',
    'Une cour de récréation devrait-elle avoir une zone calme ?',
    'Une équipe doit-elle toujours choisir les joueurs les plus forts ?',
    'Une bibliothèque doit-elle limiter le nombre de livres empruntés ?',
    'Devrait-on donner les objets trouvés à une association après un certain délai ?',
    'Un groupe doit-il décider à la majorité ou chercher un accord qui convienne à chacun ?'
  ],
  en: [
    'Should pupils be allowed to choose some of their homework?',
    'Should every playground have a quiet area?',
    'Should a team always choose its strongest players?',
    'Should libraries limit how many books each person can borrow?',
    'Should unclaimed lost property be donated after a certain time?',
    'Should a group vote by majority or look for a solution everyone can accept?'
  ]
};

const quickChallenges = {
  fr: [
    ['🎤 Présente ton idée', 30, 'Donne ton avis sur une activité à organiser dans ta classe. Annonce ton idée, donne une raison et termine par une demande.',
      'J’ai donné une idée.', 'J’ai expliqué pourquoi et dit ce que je demande.',
      'Je propose un coin dessin. On pourrait s’y détendre entre deux cours. Peut-on l’essayer vendredi ?'],
    ['🔎 Vérifie avant de partager', 60, 'Un message annonce que la sortie est annulée. Il ne donne ni date ni auteur. Dis deux choses à vérifier et auprès de qui.',
      'J’ai repéré deux informations manquantes.', 'J’ai nommé une source à consulter.',
      'Je vérifie la date et l’origine du message auprès de l’adulte qui organise la sortie.'],
    ['💬 Défends l’autre point de vue', 60, 'Tu préfères travailler seul. Donne une raison sincère pour laquelle un camarade pourrait préférer travailler en équipe.',
      'J’ai trouvé une vraie raison.', 'J’ai reformulé son avis sans me moquer.',
      'En groupe, on peut expliquer une idée à quelqu’un qui n’a pas compris.'],
    ['🤝 Demande plutôt que deviner', 30, 'Un camarade est silencieux pendant un jeu. Propose une question pour comprendre ce qu’il veut et imagine deux réponses possibles.',
      'Ma question laisse un choix.', 'Mes deux réponses possibles sont différentes.',
      'Tu veux continuer, faire une pause ou autre chose ? Il pourrait vouloir observer ou proposer une autre règle.'],
    ['⚖️ Rends le mérite', 45, 'On te félicite pour un dessin préparé à deux. Dis comment tu remercies la personne qui te félicite en nommant ce que ton camarade a fait.',
      'J’ai accepté le compliment.', 'J’ai cité une contribution précise de mon camarade.',
      'Merci ! J’ai dessiné les personnages et mon camarade a créé le décor.'],
    ['🌱 Lance un petit projet', 60, 'Un espace partagé est difficile à ranger. À qui peux-tu demander ce qui gêne ? Propose un essai simple et un moyen de voir s’il aide.',
      'J’ai proposé un premier pas réalisable.', 'J’ai prévu comment vérifier s’il aide.',
      'Je demande aux autres quels objets sont difficiles à retrouver. On essaie une boîte étiquetée et on voit vendredi si elle aide.'],
    ['❓ Pose deux questions ouvertes', 45, 'Un ami dit qu’une règle de jeu est injuste. Pose deux questions auxquelles on ne peut pas répondre seulement par oui ou non.',
      'J’ai posé deux questions ouvertes.', 'Mes questions aident à comprendre le problème.',
      'Qu’est-ce qui te gêne dans cette règle ? Comment la modifierais-tu ?'],
    ['🔄 Change d’avis avec une raison', 60, 'Quelqu’un affirme que la cour est trop bruyante pour lire. Dis ce qui pourrait confirmer cette idée, puis ce qui pourrait te faire changer d’avis.',
      'J’ai proposé un moyen de vérifier.', 'J’ai dit quel résultat me ferait revoir mon avis.',
      'J’essaierais de lire à deux endroits. Si un coin reste calme à plusieurs récréations, je nuancerais mon avis.']
  ],
  en: [
    ['🎤 Pitch your idea', 30, 'Give your opinion about an activity for your class. Introduce your idea, give one reason, and finish with a request.',
      'I gave one idea.', 'I explained why and made a clear request.',
      'I suggest a drawing corner. It could help us relax. Could we try it on Friday?'],
    ['🔎 Check before sharing', 60, 'A message says your trip is cancelled. It has no date or sender. Name two details to check and say who you would ask.',
      'I spotted two missing details.', 'I named a source I could ask.',
      'I would check when the message was written and who sent it with the adult organising the trip.'],
    ['💬 Make the other case', 60, 'You prefer working alone. Give one fair reason why a classmate might prefer working in a team.',
      'I gave a fair reason.', 'I described the view respectfully.',
      'In a group, you can explain an idea to someone who did not understand it.'],
    ['🤝 Ask instead of guessing', 30, 'A classmate is quiet during a game. Ask a question to find out what they want and imagine two possible answers.',
      'My question left room for a choice.', 'I imagined two different answers.',
      'Would you like to keep playing, take a break, or do something else? They might want to watch or suggest a new rule.'],
    ['⚖️ Give credit', 45, 'Someone praises a drawing you made with a classmate. Thank them and explain what your classmate contributed.',
      'I accepted the compliment.', 'I named a specific thing my classmate did.',
      'Thank you! I drew the characters and my classmate designed the background.'],
    ['🌱 Start a small project', 60, 'A shared space is hard to keep tidy. Who could tell you what gets in the way? Suggest one small change and a way to see if it helps.',
      'I suggested a practical first step.', 'I planned how to check if it helps.',
      'I would ask which things are hard to find. We could try a labelled box and check whether it helps on Friday.'],
    ['❓ Ask two open questions', 45, 'A friend says a game rule is unfair. Ask two questions that need more than a yes or no answer.',
      'I asked two open questions.', 'My questions help me understand the problem.',
      'What bothers you about the rule? How would you change it?'],
    ['🔄 Change your mind for a reason', 60, 'Someone says the playground is too loud for reading. Explain how you could check that and what might change your mind.',
      'I suggested a way to check.', 'I said what result might change my mind.',
      'I would try reading in two places. If one spot stayed quiet at several breaks, I would reconsider.']
  ]
};

function debatePrompt(topic) {
  return words(
    `Tu es le partenaire de mini-débat d’un enfant accompagné par un adulte. Sujet du jour : « ${topic} ».
Utilise le français, des phrases courtes et un ton encourageant. Mène le débat en trois tours, une question à la fois. Attends chaque réponse.
1. Demande : « Pour, contre ou ça dépend ? » Puis demande à l’enfant de donner une raison dans la même réponse.
2. Reformule fidèlement son avis en une phrase. Propose un contre-argument loyal, puis demande un exemple concret, une preuve ou une façon de vérifier.
3. Demande à l’enfant de résumer l’autre point de vue et de dire s’il garde ou nuance son avis, avec une raison.
Après sa dernière réponse, donne un point fort précis et une piste de progrès liée à son argumentation. N’attribue aucune note et ne choisis pas de gagnant. Ne demande aucune information personnelle. L’adulte peut transcrire les réponses dites à voix haute. Commence uniquement par le premier tour.`,
    `You are a short-debate partner for a child supported by an adult. Today's topic: “${topic}”
Use English, short sentences, and an encouraging tone. Run the debate in three turns, one question at a time. Wait for each answer.
1. Ask whether they agree, disagree, or think it depends, and ask for one reason in the same answer.
2. Restate their view fairly in one sentence. Give a fair counterargument, then ask for a concrete example, evidence, or a way to check.
3. Ask them to summarise the other view and say whether they keep or qualify their opinion, with a reason.
After their final answer, give one specific strength and one next step for their reasoning. Give no score and choose no winner. Ask for no personal information. The adult can type the answers spoken out loud. Start with the first turn only.`
  );
}

// Set to the verified Worker URL after deploying the free Cloudflare service.
const DEBATE_API = 'https://lingua-kids.expertisium.workers.dev';

async function debateRequest(path, body) {
  const token = localStorage.getItem('lk_ai_device');
  const response = await fetch(DEBATE_API + path, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', ...(token ? {Authorization: 'Bearer ' + token} : {})},
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(45000)
  });
  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.error || 'unavailable');
    error.code = result.error;
    throw error;
  }
  return result;
}

function showLiveDebates() {
  const run = progress.run;
  run.debate ||= {topic: 0, messages: [], turns: 0, draft: ''};
  const debate = run.debate;
  const paired = localStorage.getItem('lk_ai_paired') === 'yes';
  app.innerHTML = `<h2>💬 ${words('Mon mini-débat', 'My mini-debate')}</h2>
    <label for="debate-topic">${words('Sujet du débat', 'Debate topic')}</label>
    <select id="debate-topic" style="max-width:100%;font:inherit;padding:8px" ${debate.messages.length ? 'disabled' : ''}>
      ${debateTopics[language].map((topic, index) => `<option value="${index}" ${index === debate.topic ? 'selected' : ''}>${esc(topic)}</option>`).join('')}
    </select>
    <p><small>${words('Tes réponses sont envoyées à Cloudflare pour préparer les réponses de l’IA. Utilise des exemples inventés et garde tes informations personnelles pour toi.',
      'Your answers are sent to Cloudflare to generate AI replies. Use invented examples and keep personal details private.')}</small></p>
    <div id="debate-chat" aria-live="polite"></div>
    ${paired ? `<form id="ai-answer-form">
      <label for="ai-answer">${words('Ta réponse', 'Your answer')}</label>
      <textarea id="ai-answer" maxlength="800" rows="3" required style="box-sizing:border-box;width:100%;font:inherit"></textarea>
      <button class="primary" id="ai-send">${words('Répondre', 'Reply')}</button></form>`
      : `<form id="ai-pair-form"><p>${words('Demande à un parent d’activer cet appareil avec son code.', 'Ask a parent to activate this device with its code.')}</p>
        <label for="ai-code">${words('Code de cet appareil', 'Device code')}</label>
        <input id="ai-code" type="password" autocomplete="off" required>
        <button class="primary" id="ai-pair">${words('Activer', 'Activate')}</button></form>`}
    <p id="ai-status" role="status"></p>
    <button id="debate-back">${words('Continuer la série →', 'Continue the round →')}</button>`;
  const topic = byId('debate-topic');
  const chat = byId('debate-chat');
  const status = byId('ai-status');
  const paint = () => {
    chat.innerHTML = `<p><strong>${words('À toi', 'Your turn')}</strong> — ${words(
      'Pour, contre ou ça dépend ? Donne une raison.', 'Agree, disagree, or does it depend? Give one reason.')}</p>` +
      debate.messages.map(message => `<p style="white-space:pre-wrap"><strong>${message.role === 'user' ? words('Toi', 'You') : 'IA'}</strong> — ${esc(message.content)}</p>`).join('');
  };
  topic.onchange = () => {
    if (debate.messages.length) return;
    debate.topic = Number(topic.value);
    save();
    paint();
  };
  paint();
  byId('debate-back').onclick = renderQuestion;
  if (!paired) {
    byId('ai-pair-form').onsubmit = async event => {
      event.preventDefault();
      const button = byId('ai-pair');
      button.disabled = true;
      let token = localStorage.getItem('lk_ai_device');
      if (!token) {
        token = Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => byte.toString(16).padStart(2, '0')).join('');
        localStorage.setItem('lk_ai_device', token);
      }
      try {
        await debateRequest('/pair', {code: byId('ai-code').value.trim(), token});
        localStorage.setItem('lk_ai_paired', 'yes');
        if (progress.run === run && button.isConnected) renderQuestion();
      } catch (error) {
        if (button.isConnected) {
          status.textContent = error.code === 'paired' ? words('Ce code est déjà associé à un autre navigateur.', 'This code is already linked to another browser.')
            : words('Activation impossible. Vérifie le code ou réessaie plus tard.', 'Activation failed. Check the code or try again later.');
          button.disabled = false;
        }
      }
    };
    return;
  }
  const form = byId('ai-answer-form');
  const input = byId('ai-answer');
  input.value = debate.draft;
  input.oninput = () => {
    debate.draft = input.value;
    save();
  };
  if (debate.turns >= 3) {
    form.hidden = true;
    status.textContent = words('Débat terminé. Tu peux poursuivre ta série.', 'Debate complete. You can continue your round.');
    return;
  }
  form.onsubmit = async event => {
    event.preventDefault();
    const answer = input.value.trim();
    if (!answer) return;
    const button = byId('ai-send');
    button.disabled = true;
    input.disabled = true;
    topic.disabled = true;
    status.textContent = words('L’IA prépare sa réponse…', 'AI is preparing a reply…');
    const messages = [...debate.messages, {role: 'user', content: answer}];
    try {
      const result = await debateRequest('/debate', {
        language,
        topic: debateTopics[language][debate.topic],
        turn: debate.turns + 1,
        messages
      });
      debate.messages = [...messages, {role: 'assistant', content: result.reply}];
      debate.turns++;
      debate.draft = '';
      save();
      if (progress.run !== run || !button.isConnected) return;
      paint();
      input.value = '';
      status.textContent = debate.turns >= 3
        ? words('Débat terminé. Tu peux poursuivre ta série.', 'Debate complete. You can continue your round.')
        : words('À toi de répondre.', 'Your turn to reply.');
      form.hidden = debate.turns >= 3;
    } catch (error) {
      if (!button.isConnected) return;
      status.textContent = error.code === 'quota'
        ? words('Quota du jour atteint. Reviens demain pour débattre. Tu peux poursuivre les exercices.', 'Daily limit reached. Come back tomorrow to debate. You can continue practising.')
        : words('L’IA est momentanément indisponible. Tu peux réessayer ou poursuivre la série.', 'AI is temporarily unavailable. Retry or continue your round.');
    } finally {
      if (button.isConnected) {
        button.disabled = false;
        input.disabled = false;
        topic.disabled = debate.messages.length > 0;
      }
    }
  };
}

function showDebates() {
  if (DEBATE_API && progress.run?.mode === 'practice') return showLiveDebates();
  app.innerHTML = `<h2>💬 ${words('Mini-débats avec l’IA', 'Mini-debates with AI')}</h2>
    <p>${words('Choisis un sujet. Défends ton avis, écoute une objection et décide si tu veux nuancer ta réponse.', 'Choose a topic. Give your view, listen to an objection, and decide whether to qualify your answer.')}</p>
    <label for="debate-topic">${words('Sujet du débat', 'Debate topic')}</label>
    <select id="debate-topic" style="max-width:100%;font:inherit;padding:8px">${debateTopics[language].map((topic, index) =>
      `<option value="${index}">${esc(topic)}</option>`).join('')}</select>
    <p>${words('Avec un adulte, copie la consigne et colle-la dans ChatGPT. Tu peux répondre à voix haute et lui demander d’écrire ta réponse. Garde tes informations personnelles pour toi.', 'With an adult, copy the instructions and paste them into ChatGPT. You can answer aloud and have the adult type your answer. Keep personal details private.')}</p>
    <details id="debate-instructions"><summary>${words('Voir la consigne à copier', 'See the instructions to copy')}</summary>
      <textarea id="debate-prompt" readonly rows="6" style="box-sizing:border-box;width:100%;font:inherit" aria-label="${words('Consigne du débat', 'Debate instructions')}"></textarea>
    </details>
    <p class="row"><button class="primary" id="debate-copy">${words('Copier la consigne', 'Copy instructions')}</button>
      <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" style="align-self:center">${words('Ouvrir ChatGPT ↗', 'Open ChatGPT ↗')}</a></p>
    <p role="status" id="debate-status"></p><button id="debate-back">${words('← Toutes les missions', '← All missions')}</button>`;
  const topic = byId('debate-topic');
  const prompt = byId('debate-prompt');
  const status = byId('debate-status');
  topic.onchange = () => {
    prompt.value = debatePrompt(debateTopics[language][topic.value]);
    status.textContent = '';
  };
  topic.onchange();
  byId('debate-copy').onclick = async () => {
    try {
      await navigator.clipboard.writeText(prompt.value);
      status.textContent = words('Consigne copiée. Colle-la dans ChatGPT.', 'Instructions copied. Paste them into ChatGPT.');
    } catch {
      byId('debate-instructions').open = true;
      prompt.focus();
      prompt.select();
      status.textContent = words('Copie le texte sélectionné.', 'Copy the selected text.');
    }
  };
  byId('debate-back').onclick = showMissions;
}

function showChallenges() {
  const progress = read(missionKey() + '_challenges') || {};
  app.innerHTML = `<h2>⚡ ${words('Défis express', 'Quick challenges')}</h2>
    <p>${words('Choisis un défi et réponds à voix haute. Le minuteur est facultatif.', 'Pick a challenge and answer aloud. The timer is optional.')}</p>
    ${quickChallenges[language].map(([title, seconds], index) => `<button class="choice" data-challenge="${index}">
      <strong>${esc(title)}</strong><br><small>${seconds} s${progress[index] ? words(' · Réalisé', ' · Completed') : ''}</small></button>`).join('')}
    <button id="challenge-back">${words('← Toutes les missions', '← All missions')}</button>`;
  app.querySelectorAll('[data-challenge]').forEach((button) => {
    button.onclick = () => showChallenge(Number(button.dataset.challenge));
  });
  byId('challenge-back').onclick = showMissions;
}

function showChallenge(index) {
  const [title, seconds, task, first, second, example] = quickChallenges[language][index];
  const key = missionKey() + '_challenges';
  const completed = Boolean(read(key)?.[index]);
  app.innerHTML = `<h2 id="challenge-title" tabindex="-1">${esc(title)}</h2><p>${esc(task)}</p>
    <div class="row"><button id="challenge-timer">${words('Démarrer le minuteur', 'Start timer')}</button><span id="challenge-time" style="align-self:center">${seconds} s</span></div>
    <p role="status" id="challenge-status"></p>
    <details><summary>${words('Voir un exemple après mon essai', 'See an example after trying')}</summary><p>${esc(example)}</p></details>
    <fieldset style="margin:16px 0"><legend>${words('Mon bilan', 'My reflection')}</legend>
      <p><label><input type="checkbox" id="challenge-first"${completed ? ' checked' : ''}> ${esc(first)}</label></p>
      <p><label><input type="checkbox" id="challenge-second"${completed ? ' checked' : ''}> ${esc(second)}</label></p>
      <button class="primary" id="challenge-save">${words('Enregistrer mon bilan', 'Save my reflection')}</button>
      <p role="status" id="challenge-saved"></p>
    </fieldset>
    <button id="challenge-list">${words('← Tous les défis', '← All challenges')}</button>`;
  byId('challenge-title').focus();
  const timer = byId('challenge-timer');
  const display = byId('challenge-time');
  const status = byId('challenge-status');
  let interval;
  timer.addEventListener('activity-end', () => clearInterval(interval));
  timer.onclick = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
      timer.textContent = words('Redémarrer le minuteur', 'Restart timer');
      return;
    }
    const finish = Date.now() + seconds * 1000;
    status.textContent = '';
    display.textContent = seconds + ' s';
    timer.textContent = words('Arrêter le minuteur', 'Stop timer');
    interval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((finish - Date.now()) / 1000));
      if (remaining && display.isConnected) {
        display.textContent = remaining + ' s';
        return;
      }
      clearInterval(interval);
      interval = null;
      if (!display.isConnected) return;
      display.textContent = '0 s';
      timer.textContent = words('Redémarrer le minuteur', 'Restart timer');
      status.textContent = words('Temps écoulé. Tu peux finir ta phrase.', 'Time is up. You can finish your sentence.');
    }, 250);
  };
  byId('challenge-save').onclick = () => {
    const progress = read(key) || {};
    const done = byId('challenge-first').checked && byId('challenge-second').checked;
    progress[index] = done;
    localStorage.setItem(key, JSON.stringify(progress));
    byId('challenge-saved').textContent = done
      ? words('Défi réalisé !', 'Challenge complete!')
      : words('À réessayer quand tu veux.', 'Try again whenever you like.');
  };
  byId('challenge-list').onclick = () => {
    clearInterval(interval);
    showChallenges();
  };
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
profile ? home() : welcome();







