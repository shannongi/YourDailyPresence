/* ============================================================
   YOUR CONTENT LIVES HERE.
   ------------------------------------------------------------
   This is the ONLY file you need to touch to add or change
   what shows up on your site. No coding needed — just copy an
   existing block (the part between { and }), paste it above
   or below, and change the text inside the quotes.

   Rules that keep things from breaking:
   - Keep the quotation marks " " around every piece of text.
   - Keep a comma at the end of each line, and after each }
     block, EXCEPT the very last one in a list.
   - "image" is a web address (URL) to a picture. If you don't
     have one yet, leave it as an empty string: ""
   - "link" is a web address to send people to when they click
     the title (a Goodreads page, a store page, a map, etc).
     Leave it as "" if you don't want the title to be clickable.
   ============================================================ */

const SITE = {
  name: "Your Daily Presence",
  tagline: "A quiet record of the books, quotes, sounds, and voices that are shaping my days.",
  // Shown as a featured line on the home page.
  featuredQuote: {
    text: "Truth is one; the wise call it by many names.",
    source: "Adapted from the Rig Veda"
  }
};

const BOOKS = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "",
    link: "",
    note: "A short novel about listening to what actually calls you, instead of what's expected of you."
  },
  {
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    image: "",
    link: "https://a.co/d/0jhpH0DJ",
    note: "Part memoir, part spiritual field guide. I keep coming back to the chapters on stillness."
  },
];

// Featured author, shown at the top of the Books page above the list.
const AUTHOR_SPOTLIGHT = {
  name: "Walter Russell",
  years: "1871 – 1963",
  bio: "Walter Russell was an American painter, sculptor, and self-taught natural philosopher, once called \"the modern Leonardo\" for the sheer range of his talents — fine art, architecture, music, even competitive figure skating. Later in life he turned to cosmology, spending decades developing his own unified theory of the universe grounded in light, rhythm, and balance. He and his wife, Lao Russell, founded the University of Science and Philosophy in Virginia to carry the work forward.",
  books: [
    {
      title: "The Universal One",
      year: "1926",
      link: "https://www.goodreads.com/book/show/2046127.The_Universal_One",
      note: "His first full statement of this cosmology — a universe unified by a single Mind and a single creative force underlying all matter and energy.",
      quote: "No man can say: 'I alone am I.'"
    },
    {
      title: "The Secret of Light",
      year: "1947",
      link: "https://www.goodreads.com/book/show/600205.The_Secret_of_Light",
      note: "Often considered his most complete work — it reframes light as the visible expression of a stillness at the center of all creation.",
      quote: "Man must know that his power lies in the stillness of his centering Self."
    }
  ]
};

const QUOTES = [
  {
    title: "Emotions rise like waves — worth watching them fade into a calm, wider ocean, rather than being swept along by them.",
    author: "Paraphrased — Ram Dass, Be Here Now",
    image: "",
    symbol: "साक्षी",
    link: "",
    note: "The image that's stuck with me most from this book."
  },
  {
    title: "The only real gift two people can give each other is each doing their own inner work.",
    author: "Paraphrased — Ram Dass, Be Here Now",
    image: "",
    symbol: "साधना",
    link: "",
    note: "Reframes what I owe the people I love."
  },
  {
    title: "A steady inner center matters more than the company you keep — once your footing is firm, you stop being swayed.",
    author: "Paraphrased — Ram Dass, Be Here Now",
    image: "",
    symbol: "स्थिरता",
    link: "",
    note: "Helpful on days I feel too influenced by everyone around me."
  },
  {
    title: "The whole practice comes down to catching yourself mid-thought and returning to exactly where and when you already are.",
    author: "Paraphrased — Ram Dass, Be Here Now",
    image: "",
    symbol: "वर्तमान",
    link: "",
    note: "Simple to say, endless to actually practice."
  },
  {
    title: "Even the gods came after creation — so who is left to truly say where it all began?",
    author: "Rig Veda (adapted)",
    image: "",
    symbol: "सृष्टि",
    link: "",
    note: "From the Hymn of Creation — it's less an answer than an honest shrug at the biggest question there is."
  },
  {
    title: "May we meditate upon that radiant light, and may it awaken and guide our minds.",
    author: "Rig Veda (adapted)",
    image: "",
    symbol: "ज्योति",
    link: "",
    note: "The spirit behind the Gayatri — a request for clarity, not certainty."
  },
  {
    title: "Let us move together, speak together, and let our minds be joined as one.",
    author: "Rig Veda (adapted)",
    image: "",
    symbol: "एकता",
    link: "",
    note: "One of the oldest calls for unity I know of."
  },
  {
    title: "True wealth is generosity — it's withholding, the hymns say, that leaves a person with nothing to fall back on.",
    author: "Rig Veda (adapted)",
    image: "",
    symbol: "दान",
    link: "",
    note: "A very old rebuttal to the idea that hoarding is what makes you secure."
  },
  {
    title: "You are your own best friend, and just as easily your own worst enemy — it depends entirely on how you use your own mind.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "मन",
    link: "",
    note: "A good one to sit with on self-critical days."
  },
  {
    title: "Pleasure and pain come and go like the seasons — the practice is simply to endure them without being ruled by either.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "समभाव",
    link: "",
    note: "Easier to admire than to actually live by."
  },
  {
    title: "Better to do your own work imperfectly than someone else's work perfectly.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "स्वधर्म",
    link: "",
    note: "The idea of svadharma — your own path, done honestly, beats a borrowed one done well."
  },
  {
    title: "Be here now.",
    author: "Ram Dass",
    image: "",
    symbol: "ॐ",
    link: "",
    note: "The one I come back to whenever I catch myself living three steps ahead of the day."
  },
  {
    title: "You have power over your mind — not outside events.",
    author: "Marcus Aurelius",
    image: "",
    symbol: "शांति",
    link: "",
    note: "A good reset on hard days. Simple, but easy to forget."
  },
  {
    title: "You have a right to your work, but never to its fruits.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "कर्म",
    link: "",
    note: "The heart of karma yoga — do the work fully, and let go of the outcome."
  },
  {
    title: "The soul is never born, and it never dies.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "आत्मा",
    link: "",
    note: "A reminder that what we are is steadier and older than any single lifetime."
  },
  {
    title: "As a person believes, so they become.",
    author: "Bhagavad Gita (adapted)",
    image: "",
    symbol: "श्रद्धा",
    link: "",
    note: "Simple to read, much harder to actually sit with."
  },
  {
    title: "Talking with God is a definite fact.",
    author: "Paramahansa Yogananda, How You Can Talk With God",
    image: "",
    symbol: "प्रार्थना",
    link: "",
    note: "He meant this literally — a real two-way conversation, not a metaphor."
  },
  {
    title: "Prayer is not one-sided pleading — it is a relationship, and it goes both ways.",
    author: "Paraphrased — Paramahansa Yogananda, How You Can Talk With God",
    image: "",
    symbol: "भक्ति",
    link: "",
    note: "The idea that changed how I think about prayer."
  },
  {
    title: "Persistence and unwavering faith are what turn silence into an answer.",
    author: "Paraphrased — Paramahansa Yogananda, How You Can Talk With God",
    image: "",
    symbol: "धैर्य",
    link: "",
    note: "Simple, but not easy."
  },
];

// Shown on the Audiobooks page.
const AUDIOBOOKS = [
  {
    title: "The New Path: My Life with Paramhansa Yogananda",
    byline: "Swami Kriyananda (J. Donald Walters)",
    bio: "Born in Romania in 1926 to American parents, Swami Kriyananda had an international upbringing before becoming, at twenty-two, a direct disciple of Paramhansa Yogananda — the teacher known to millions through Autobiography of a Yogi. He spent his final three and a half years living and serving closely alongside his guru, until Yogananda's passing in 1952. Over the following six decades he carried those teachings across four continents through lectures, hundreds of musical compositions, and dozens of books, and in 1968 founded Ananda Village in the Sierra Nevada foothills — the first in what became a worldwide network of spiritual communities. He passed away in Assisi, Italy, in 2013.",
    quote: "There are times when a human being encounters some extraordinary person or event.",
    reflections: [
      "The book retraces the moment a young seeker first opened Autobiography of a Yogi and felt his life reorient around it.",
      "Narrated by Kriyananda himself, it works almost as a companion volume to the Autobiography, filling in what daily life with Yogananda actually looked and felt like."
    ],
    link: "https://www.audible.com/pd/B0036NDNJS?source_code=ASSOR150021921000O",
    linkLabel: "Listen to The New Path: My Life with Paramhansa Yogananda by Swami Kriyananda on Audible."
  },
  {
    title: "Gospel of Sri Ramakrishna",
    byline: "Sri Ramakrishna (translated by Swami Nikhilananda)",
    bio: "Born Dinesh Chandra Das Gupta in 1895, Swami Nikhilananda was a direct disciple of Sri Sarada Devi, the spiritual consort of Ramakrishna known to devotees as the Holy Mother. Ordained a monk of the Ramakrishna Order in 1924, he was sent to America in 1931 and founded the Ramakrishna-Vivekananda Center of New York in 1933, leading it until his death in 1973. His enduring legacy is his complete English translation of Sri Ramakrishna's recorded teachings, published as The Gospel of Sri Ramakrishna — with a foreword by Aldous Huxley that drew praise from Thomas Mann and Henry Miller alike.",
    quote: "As many faiths, so many paths.",
    reflections: [
      "He taught that both bondage and freedom are ultimately states of mind, not conditions imposed from the outside.",
      "He compared divine grace to sunlight — falling equally on the virtuous and the flawed alike, without judgment."
    ],
    link: "https://www.audible.com/pd/B0BZ1522VM?source_code=ASSORAP0511160007",
    linkLabel: "Listen to Gospel of Sri Ramakrishna, translated by Swami Nikhilananda, on Audible."
  },
  {
    title: "Shree Shree Ma Anandamayi",
    byline: "Gurupriya Devi",
    bio: "Gurupriya Devi, affectionately known as \"Didi\" (elder sister), was one of the earliest and closest disciples of the revered Bengali saint Anandamayi Ma, meeting her in 1925 and remaining by her side for decades. She kept a detailed personal diary of Ma's daily life and teachings, originally written in Bengali and later translated into English across several volumes — this one covering November 1938 to April 1939.",
    quote: "It must be had of Him alone.",
    reflections: [
      "The diary keeps returning to one idea — that patience and quiet remembrance matter more than urgency, since time keeps slipping away regardless.",
      "Its central practice is simple to state and hard to sustain: keep the mind anchored on the divine name, gently and without anxiety, through the ordinary hours of a day."
    ],
    link: "https://www.audible.com/pd/B0CYBWFWQ6?source_code=ASSOR150021921000O",
    linkLabel: "Listen to Shree Shree Ma Anandamayi by Gurupriya Devi on Audible."
  },
  {
    title: "Autobiography of a Yogi",
    byline: "Paramahansa Yogananda",
    bio: "Paramahansa Yogananda (1893–1952) was an Indian yogi and teacher who came to the United States in 1920 and spent more than thirty years introducing the West to meditation and Kriya Yoga. He founded Self-Realization Fellowship to carry his teachings forward. This memoir, his best-known book, has been credited with sparking much of the West's early interest in yoga and Eastern spirituality — admirers have included Steve Jobs and George Harrison.",
    quote: "The season of failure is the best time for sowing the seeds of success.",
    reflections: [
      "The book moves between ordinary memoir and accounts of the extraordinary — meetings with saints, scientists, and seekers across India and the West.",
      "Its throughline is the search for a teacher, and what it actually takes to sit still long enough to learn something."
    ],
    link: "https://www.audible.com/pd/B002V1BJ1A?source_code=ASSORAP0511160007",
    linkLabel: "Listen to Autobiography of a Yogi by Paramahansa Yogananda on Audible."
  },
  {
    title: "Raja Yoga",
    byline: "Swami Vivekananda",
    bio: "Swami Vivekananda (1863–1902) was the chief disciple of the Bengali saint Ramakrishna, and the figure most responsible for introducing yoga and Vedanta philosophy to the West after his famous 1893 address at the World's Parliament of Religions in Chicago. Raja Yoga, published in 1896, was his attempt to translate Patanjali's Yoga Sutras into language a Western audience could put to use.",
    quote: "The best guide in life is strength.",
    reflections: [
      "It's less a guide to poses and more a manual for training attention — concentration as the doorway to everything else.",
      "Vivekananda pairs practical instruction with philosophy, so the 'why' behind each practice is never far from the 'how.'"
    ],
    link: "https://www.audible.com/pd/B07B7C7JQQ?source_code=ASSORAP0511160007",
    linkLabel: "Listen to Raja Yoga by Swami Vivekananda on Audible."
  },
  {
    title: "Thought Vibration, or the Law of Attraction in the Thought World",
    byline: "William Walker Atkinson",
    bio: "William Walker Atkinson (1862–1932) was an American attorney turned writer who became one of the most prolific voices of the early New Thought movement, publishing under his own name and several pseudonyms. His 1906 book Thought Vibration is where the phrase \"Law of Attraction\" first appeared in print — decades before it became a familiar idea.",
    quote: "We generally see that for which we look.",
    reflections: [
      "The core claim is simple: thought behaves like a vibration that attracts corresponding conditions, people, and circumstances.",
      "It's a direct ancestor of a century of self-help writing that followed, including books that never mention his name."
    ],
    link: "https://www.audible.com/pd/B08B2LSDT3?source_code=ASSOR150021921000O",
    linkLabel: "Listen to Thought Vibration, or, the Law of Attraction in the Thought World by William Walker Atkinson on Audible."
  },
];

// Shown on the Music page.
const MUSIC = [
  {
    title: "This Is Krishna Das",
    byline: "Krishna Das",
    bio: "Krishna Das, born Jeffrey Kagel, is an American kirtan singer sometimes called \"the chant master of American yoga.\" He traveled to India in 1970 and became a devotee of the guru Neem Karoli Baba; after returning to the U.S., he began leading call-and-response chanting in New York in the 1990s and has since become the best-selling Western chant artist, with a Grammy-nominated album and a documentary, One Track Heart, telling his story.",
    link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4vmEao?si=ilVBZGwcR32LPAuyrZUpBQ&utm_source=native-share-menu&pi=wb71j5PjTeC6F",
    linkLabel: "Listen to This Is Krishna Das on Spotify."
  },
];

// Shown on the To Think About page.
const TO_THINK_ABOUT = {
  book: {
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    year: "1936",
    link: "https://www.audible.com/pd/B002V5BV96?source_code=ASSORAP0511160007",
    linkLabel: "Listen to How to Win Friends & Influence People by Dale Carnegie on Audible.",
    bio: "Dale Carnegie (1888–1955) was born into a poor farming family in Maryville, Missouri. After an unremarkable stint as a traveling salesman, he found his footing teaching public speaking to adults at a YMCA in New York starting in 1912. That teaching practice grew into the Dale Carnegie Institute, and notes taken from his lectures on human relations eventually became this book.",
    summary: "Published in 1936 at the height of the Great Depression, the book distills Carnegie's years of teaching adult education courses into one practical argument: that success in life and work has much more to do with how well you deal with people than with how much you know. It's organized as short, numbered principles rather than dense theory, which is part of why it has stayed one of the best-selling nonfiction books ever written.",
    sections: [
      {
        title: "Fundamental Techniques in Handling People",
        items: [
          "Don't criticize.",
          "Give honest and sincere appreciation.",
          "Arouse in the other person an eager want."
        ]
      },
      {
        title: "Six Ways to Make People Like You",
        items: [
          "Become genuinely interested in other people.",
          "Smile.",
          "Remember a person's name.",
          "Be a good listener. Encourage others to talk about themselves.",
          "Talk in terms of the other person's interests.",
          "Make the other person feel important — and do it sincerely."
        ]
      },
      {
        title: "Win People to Your Way of Thinking",
        items: [
          "The only way to get the best of an argument is to avoid it.",
          "Show respect for the other person's opinions. Never say, \"You're wrong.\"",
          "If you are wrong, admit it quickly and emphatically.",
          "Begin in a friendly way.",
          "Get the other person saying \"yes, yes\" immediately.",
          "Let the other person do a great deal of the talking.",
          "Let the other person feel that the idea is his or hers.",
          "Try honestly to see things from the other person's point of view.",
          "Be sympathetic with the other person's ideas and desires.",
          "Appeal to the nobler motives.",
          "Dramatize your ideas.",
          "Throw down a challenge."
        ]
      },
      {
        title: "Be a Leader",
        items: [
          "Begin with praise and honest appreciation.",
          "Call attention to people's mistakes indirectly.",
          "Talk about your own mistakes before criticizing the other person.",
          "Ask questions instead of giving direct orders.",
          "Let the other person save face.",
          "Praise the slightest improvement and praise every improvement.",
          "Give the other person a fine reputation to live up to.",
          "Use encouragement. Make the fault seem easy to correct.",
          "Make the other person happy about doing the thing you suggest."
        ]
      }
    ]
  }
};

// Rotates on the home page — one item shown per day, cycling through this list.
// Add more anytime; the rotation adjusts automatically to however many are here.
const SPOTLIGHT_POOL = [
  {
    category: "Book",
    title: "Autobiography of a Yogi",
    subtitle: "Paramahansa Yogananda",
    link: "books.html"
  },
  {
    category: "Audiobook",
    title: "Raja Yoga",
    subtitle: "Swami Vivekananda",
    link: "audiobooks.html"
  },
  {
    category: "Author Spotlight",
    title: "Walter Russell",
    subtitle: "Painter, scientist, and cosmologist",
    link: "books.html"
  },
  {
    category: "Deep Dive",
    title: "How to Win Friends & Influence People",
    subtitle: "Dale Carnegie",
    link: "to-think-about.html"
  },
  {
    category: "Music",
    title: "This Is Krishna Das",
    subtitle: "Chant for stillness",
    link: "music.html"
  },
];
