const cards = [
	//***MAJOR ARCANA***\\
	{
		number: "zero",
    index: "0",
		card: "the Fool",
		meaning: ["new beginnings", "optimism", "trust in life"],
		inverse: ["hesitation", "indecisiveness", "poor decisions", "apathy"],
		numeral: "0",
		suit: "major"
	},{
		number: "one",
    index: "1",
		card: "the Magician",
		meaning: ["action", "the power to manifest"],
		inverse: ["ill will", "unimaginative", "insecurity"],
		numeral: "I",
		suit: "major"
	}, {
		number: "two"
    ,index: "2",
		card: "the High Priestess",
		meaning: ["inaction", "going within", "the subconscious"],
		inverse: ["selfishness", "shallowness", "lack of understanding", "ignorance"],
		numeral: "II",
		suit: "major"
	}, {
		number: "three",
    index: "3",
		card: "the Empress",
		meaning: ["abundance", "nurturing", "fertility", "life in bloom"],
		inverse: ["change of location", "poor concentration", "infidelity", "cheating"],
		numeral: "III",
		suit: "major"
	}, {
		number: "four",
    index: "4",
		card: "the Emperor",
		meaning: ["structure", "stability", "rules and power"],
		inverse: ["immaturity", "weakness", "indecisiveness", "secondary emotions"],
		numeral: "IV",
		suit: "major"
	}, {
		number: "five",
    index: "5",
		card: "the Hierophant",
		meaning: ["institutions", "tradition", "society and its rules"],
		inverse: ["impotence", "mistakes", "unconventional", "inventive"],
		numeral: "V",
		suit: "major"
	}, {
		number: "six",
    index: "6",
		card: "the Lovers",
		meaning: ["sexuality", "passion", "choice", "uniting"],
		inverse: ["separation", "untrustworthy", "fickle", "unreliable"],
		numeral: "VI",
		suit: "major"
	}, {
		number: "seven",
    index: "7",
		card: "the Chariot",
		meaning: ["movement", "progress", "integration"],
		inverse: ["unsuccessful", "failure", "loss", "conflict"],
		numeral: "VII",
		suit: "major"
	}, {
		number: "eight",
    index: "8",
		card: "Strength",
		meaning: ["courage", "subtle power", "integration of the animal self"],
		inverse: ["weakness", "illness", "abuse of power", "bad faith", "tyranny"],
		numeral: "VIII",
		suit: "major"
	}, {
		number: "nine",
    index: "9",
		card: "the Hermit",
		meaning: ["meditation", "solitude", "consciousness"],
		inverse: ["rash decisions", "foolishness", "immaturity", "imprudence"],
		numeral: "IX",
		suit: "major"
	}, {
		number: "ten",
    index: "10",
		card: "Wheel of Fortune",
		meaning: ["cycles", "change", "ups and downs"],
		inverse: ["bad luck", "interruption", "ill influence", "failure"],
		numeral: "X",
		suit: "major"
	}, {
		number: "eleven",
    index: "11",
		card: "Justice",
		meaning: ["fairness", "equality", "balance"],
		inverse: ["intolerance", "abuse", "bias", "accusations"],
		numeral: "XI",
		suit: "major"
	}, {
		number: "twelve",
    index: "12",
		card: "the Hanged Man",
		meaning: ["surrender new perspective", "enlightenment"],
		inverse: ["wasted sacrifice", "poor effort", "unwillingness", "wrong prophecy"],
		numeral: "XII",
		suit: "major"
	}, {
		number: "thirteen",
    index: "13",
		card: "Death",
		meaning: ["the end of something", "change", "the impermeability of all things"],
		inverse: ["stagnation", "immobility", "slow change", "a narrow escape"],
		numeral: "XIII",
		suit: "major"
	}, {
		number: "fourteen",
    index: "14",
		card: "Temperance",
		meaning: ["balance", "moderation", "being sensible"],
		inverse: ["conflict", "hositlity", "impatience", "frustration", "dispute"],
		numeral: "XIV",
		suit: "major"
	}, {
		number: "fifteen",
    index: "15",
		card: "the Devil",
		meaning: ["destructive patterns", "addiction", "giving away power"],
		inverse: ["release", "overcome problems", "divorce", "separation", "loss"],
		numeral: "XV",
		suit: "major"
	}, {
		number: "sixteen",
    index: "16",
		card: "the Tower",
		meaning: ["collapse of stable structures", "release", "sudden insight"],
		inverse: ["getting back", "entrapment", "imprisonment", "captivity"],
		numeral: "XVI",
		suit: "major"
	}, {
		number: "seventeen",
    index: "17",
		card: "the Star",
		meaning: ["hope", "calm", "a good omen"],
		inverse: ["unfulfilled wish", "bad dreams", "disappointment", "imbalance"],
		numeral: "XVII",
		suit: "major"
	}, {
		number: "eightteen",
    index: "18",
		card: "the Moon",
		meaning: ["mystery", "the subconscious", "dreams"],
		inverse: ["discovery of deception", "warning", "caution", "mistakes"],
		numeral: "XVIII",
		suit: "major"
	}, {
		number: "nineteen",
    index: "19",
		card: "the Sun",
		meaning: ["success", "happiness", "all will be well"],
		inverse: ["loneliness", "sadness", "broken marriage", "unfriendliness", "incontent"],
		numeral: "XIX",
		suit: "major"
	}, {
		number: "twenty",
    index: "20",
		card: "Judgement",
		meaning: ["rebirth", "a new phase", "inner calling"],
		inverse: ["delay", "disappointment", "indecisiveness", "procrastination"],
		numeral: "XX",
		suit: "major"
	}, {
		number: "twenty-one",
    index: "21",
		card: "the World",
		meaning: ["completion", "wholeness", "attainment", "celebration of life"],
		inverse: ["imperfection", "incompleteness", "lack of vision"],
		numeral: "XXI",
		suit: "major"
	},
	//***MINOR ARCANA***\\
	//*****SUIT OF SWORDS*****\\
	{
		number: "one",
    index: "1",
		card: "Ace of Swords",
		meaning: ["a fresh start", "a sudden opportunity or idea", "clarity"],
		inverse: ["unruly use of power", "tyranny", "obstacles"],
		numeral: "i",
		suit: "Swords"
	}, {
		number: "two",
    index: "2",
		card: "Two of Swords",
		meaning: ["indecision"],
		inverse: ["danger when dealing with people", "release"],
		numeral: "ii",
		suit: "Swords"
	}, {
		number: "three",
    index: "3",
		card: "Three of Swords",
		meaning: ["heartbreak", "betrayal"],
		inverse: ["confustion", "disorganization", "loss"],
		numeral: "iii",
		suit: "Swords"
	}, {
		number: "four",
    index: "4",
		card: "Four of Swords",
		meaning: ["meditation", "rest", "retreat"],
		inverse: ["strikes", "unrest", "renewal of activity"],
		numeral: "iv",
		suit: "Swords"
	}, {
		number: "five",
    index: "5",
		card: "Five of Swords",
		meaning: ["mind games", "hostility"],
		inverse: ["unfairness", "useless victory"],
		numeral: "v",
		suit: "Swords"
	}, {
		number: "six",
    index: "6",
		card: "Six of Swords",
		meaning: ["leaving", "accepting help", "going somewhere better"],
		inverse: ["postponed journey", "difficulties and obstacles worsen"],
		numeral: "vi",
		suit: "Swords"
	}, {
		number: "seven",
    index: "7",
		card: "Seven of Swords",
		meaning: ["secret plans", "abandoning ship"],
		inverse: ["good counsel", "advice", "retrieval of theft items"],
		numeral: "vii",
		suit: "Swords"
	}, {
		number: "eight",
    index: "8",
		card: "Eight of Swords",
		meaning: ["feeling powerless and stuck"],
		inverse: ["new beginnings", "freedom", "relaxation"],
		numeral: "viii",
		suit: "Swords"
	}, {
		number: "nine",
    index: "9",
		card: "Nine of Swords",
		meaning: ["overactive mind", "anxiety"],
		inverse: ["healing", "patience", "good news"],
		numeral: "ix",
		suit: "Swords"
	}, {
		number: "ten",
    index: "10",
		card: "Ten of Swords",
		meaning: ["feeling defeated", "self sabotage"],
		inverse: ["overthrown evil forces", "success", "health betterment"],
		numeral: "x",
		suit: "Swords"
	}, {
		number: "eleven",
    index: "11",
		card: "Page of Swords",
		meaning: ["mental instability or intellectual immaturity", "acting without thinking"],
		inverse: ["cunning", "bad health", "unexpected events"],
		numeral: "page",
		suit: "Swords"
	}, {
		number: "twelve",
    index: "12",
		card: "Knight of Swords",
		meaning: ["fierce", "determined", "aggressive pursuit of goals"],
		inverse: ["secrets", "tyranny", "a troublemaker"],
		numeral: "knight",
		suit: "Swords"
	}, {
		number: "thirteen",
    index: "13",
		card: "Queen of Swords",
		meaning: ["intelligent", "writer", "communicative yet cold", "direct"],
		inverse: ["cruel", "sly", "narrow-minded", "a counselor"],
		numeral: "queen",
		suit: "Swords"
	}, {
		number: "fourteen",
    index: "14",
		card: "King of Swords",
		meaning: ["serious", "controlling", "rational and intellect-focused"],
		inverse: ["evil intentions", "obstinance", "unfairness"],
		numeral: "",
		suit: "Swords"
	},
	//*****SUIT OF CUPS*****\\
	{
		number: "",
    index: "1",
		card: "Ace of Cups",
		meaning: ["emotional fulfillment", "joy"],
		inverse: ["hesitant", "selfish", "egoistic"],
		numeral: "i",
		suit: "Cups"
	}, {
		number: "two",
    index: "2",
		card: "Two of Cups",
		meaning: ["partnership", "mutual attraction", "compatibility"],
		inverse: ["imbalanced relationship", "misunderstanding", "loss of love"],
		numeral: "ii",
		suit: "Cups"
	}, {
		number: "three",
    index: "3",
		card: "Three of Cups",
		meaning: ["celebration", "fun with friends", "laughter"],
		inverse: ["overindulgence", "gossiping", "pain"],
		numeral: "iii",
		suit: "Cups"
	}, {
		number: "four",
    index: "4",
		card: "Four of Cups",
		meaning: ["boredom", "dissatisfaction with what is being offered"],
		inverse: ["new goals", "action", "ambition", "the possibility of a new relationship"],
		numeral: "iv",
		suit: "Cups"
	}, {
		number: "five",
    index: "5",
		card: "Five of Cups",
		meaning: ["dwelling on the negative", "self pity"],
		inverse: ["returned hope or loved one", "beginning of a new relationship"],
		numeral: "v",
		suit: "Cups"
	}, {
		number: "six",
    index: "6",
		card: "Six of Cups",
		meaning: ["sentimentaility", "kindness", "help"],
		inverse: ["disappointing friendships", "living in the past"],
		numeral: "vi",
		suit: "Cups"
	}, {
		number: "seven",
    index: "7",
		card: "Seven of Cups",
		meaning: ["numerous choices", "indecision", "getting lost in fantasy"],
		inverse: ["determination", "will power", "definite direction"],
		numeral: "vii",
		suit: "Cups"
	}, {
		number: "eight",
    index: "8",
		card: "Eighe of Cups",
		meaning: ["abandoCing something in search of something better"],
		inverse: ["need for pleasure", "pursuit of contentment"],
		numeral: "vii",
		suit: "Cups"
	}, {
		number: "nine",
    index: "9",
		card: "Nine of Cups",
		meaning: ["indulgence", "self-satisfaction"],
		inverse: ["money needed", "illness", "unfulfilled wishes"],
		numeral: "ii",
		suit: "Cups"
	}, {
		number: "ten",
    index: "10",
		card: "Ten of Cups",
		meaning: ["emotional bliss", "happiness", "attainment"],
		inverse: ["family dispute", "loss of friendship", "children turn hostile against parents"],
		numeral: "x",
		suit: "Cups"
	}, {
		number: "eleven",
    index: "11",
		card: "Page of Cups",
		meaning: ["creative", "inspired", "learning artistic skill"],
		inverse: ["selfishness", "lack of imagination"],
		numeral: "page",
		suit: "Cups"
	}, {
		number: "twelve",
    index: "12",
		card: "Knight of Cups",
		meaning: ["romantic", "adventurous", "following one's heart"],
		inverse: ["fraud", "cheating", "trickery", "idleness"],
		numeral: "knight",
		suit: "Cups"
	}, {
		number: "thirteen",
    index: "13",
		card: "Queen of Cups",
		meaning: ["emotionally nurturing", "intuitive", "sensitive"],
		inverse: ["perverse", "happiness turning bitter"],
		numeral: "queen",
		suit: "Cups"
	}, {
		number: "fourteen",
    index: "14",
		card: "King of Cups",
		meaning: ["repression of deep feelings"],
		inverse: ["violent", "crafty", "scandals"],
		numeral: "king",
		suit: "Cups"
	},
	//*****SUIT OF WANDS*****\\
	{
		number: "",
    index: "1",
		card: "Ace of Wands",
		meaning: ["new beginnings", "creative spark", "fertile ideas"],
		inverse: ["setbacks", "cancellation", "spoiling ventures with selfishness"],
		numeral: "i",
		suit: "Wands"
	}, {
		number: "two",
    index: "2",
		card: "Two of Wands",
		meaning: ["contemplation", "assessing one's life direction"],
		inverse: ["caution", "dominance by others"],
		numeral: "ii",
		suit: "Wands"
	}, {
		number: "three",
    index: "3",
		card: "Three of Wands",
		meaning: ["reaping the rewards of your efforts"],
		inverse: ["mistakes", "scattered energy", "carelessness", "pride", "arrogance"],
		numeral: "iii",
		suit: "Wands"
	}, {
		number: "four",
    index: "4",
		card: "Four of Wands",
		meaning: ["celebration", "safety", "the home"],
		inverse: ["appreciation", "peace", "harmony"],
		numeral: "iv",
		suit: "Wands"
	}, {
		number: "five",
    index: "5",
		card: "Five of Wands",
		meaning: ["cempetition", "minor struggles or disagreements"],
		inverse: ["generosity", "opportunities"],
		numeral: "v",
		suit: "Wands"
	}, {
		number: "six",
    index: "6",
		card: "Six of Wands",
		meaning: ["success", "accolades", "and achievement"],
		inverse: ["delayed rewards and recognition", "postponed trip", "pride"],
		numeral: "vi",
		suit: "Wands"
	}, {
		number: "seven",
    index: "7",
		card: "Seven of Wands",
		meaning: ["feeling defensive and on guard"],
		inverse: ["threat", "indecision", "impatience"],
		numeral: "vii",
		suit: "Wands"
	}, {
		number: "eight",
    index: "8",
		card: "Eight of Wands",
		meaning: ["speed", "things manifesting quickly"],
		inverse: ["violence", "aggression", "domestic disputes", "arguements", "fights"],
		numeral: "viii",
		suit: "Wands"
	}, {
		number: "nine",
    index: "9",
		card: "Nine of Wands",
		meaning: ["pessimism", "gearing up for the worst"],
		inverse: ["unwillingness to fight", "poor character", "poor health"],
		numeral: "ix",
		suit: "Wands"
	}, {
		number: "ten",
    index: "10",
		card: "Ten of Wands",
		meaning: ["feeling oppressed", "exhaustion", "too many responsibilities"],
		inverse: ["energy", "strength", "vindictiveness", "clever", "shrewd"],
		numeral: "x",
		suit: "Wands"
	}, {
		number: "eleven",
    index: "11",
		card: "Page of Wands",
		meaning: ["newly inspired", "excited about life and work"],
		inverse: ["instability", "heartbreak", "bad news"],
		numeral: "page",
		suit: "Wands"
	}, {
		number: "twelve",
    index: "12",
		card: "Knight of Wands",
		meaning: ["an adventurous risk taker who follows their passions"],
		inverse: ["jealousy", "narrow-mindedness", "suspicion", "doubt"],
		numeral: "knight",
		suit: "Wands"
	}, {
		number: "thirteen",
    index: "13",
		card: "Queen of Wands",
		meaning: ["confident", "focust", "has zest for life"],
		inverse: ["strict", "deceitful", "infidelity", "revenge"],
		numeral: "queen",
		suit: "Wands"
	}, {
		number: "fourteen",
    index: "14",
		card: "King of Wands",
		meaning: ["career focused", "mature", "passionate"],
		inverse: ["unyielding", "intolerant", "prejudiced"],
		numeral: "king",
		suit: "Wands"
	},
	//*****SUIT OF PENTACLES*****\\
	{
		number: "",
    index: "1",
		card: "Ace of Pentacles",
		meaning: ["financial reward", "clarity of life purpose", "goals"],
		inverse: ["greedy", "materialistic", "misery"],
		numeral: "i",
		suit: "Pentacles"
	}, {
		number: "two",
    index: "2",
		card: "Two of Pentacles",
		meaning: ["balance", "multitasking"],
		inverse: ["bad news", "difficult situations"],
		numeral: "ii",
		suit: "Pentacles"
	}, {
		number: "three",
    index: "3",
		card: "Three of Pentacles",
		meaning: ["meaningful work", "enjoying one's work", "suitable career"],
		inverse: ["neglect of quality"],
		numeral: "iii",
		suit: "Pentacles"
	}, {
		number: "four",
    index: "4",
		card: "Four of Pentacles",
		meaning: ["hoarding", "feeling poor", "holding oneself back out of fear"],
		inverse: ["loss of possessions", "delays", "obstacles", "spendthrift"],
		numeral: "iv",
		suit: "Pentacles"
	}, {
		number: "five",
    index: "5",
		card: "Five of Pentacles",
		meaning: ["minor money troubles", "health problems", "feeling like an outsider"],
		inverse: ["courage", "new employment and interest"],
		numeral: "v",
		suit: "Pentacles"
	}, {
		number: "six",
    index: "6",
		card: "Six of Pentacles",
		meaning: ["charity", "accepting and giving help"],
		inverse: ["unfair", "bribery", "threats", "jealousy"],
		numeral: "vi",
		suit: "Pentacles"
	}, {
		number: "seven",
    index: "7",
		card: "Seven of Pentacles",
		meaning: ["patience", "waiting for your plans to bear fruit"],
		inverse: ["poor progress", "anxiety", "impatience", "unprofitable investments"],
		numeral: "vii",
		suit: "Pentacles"
	}, {
		number: "eight",
    index: "8",
		card: "Eight of Pentacles",
		meaning: ["hard work", "focused efforts", "laying groundwork"],
		inverse: ["skills not put to use", "not hardworking", "no ambition"],
		numeral: "viii",
		suit: "Pentacles"
	}, {
		number: "nine",
    index: "9",
		card: "Nine of Pentacles",
		meaning: ["luxury", "rest", "financial and material comforts"],
		inverse: ["loss", "danger"],
		numeral: "ix",
		suit: "Pentacles"
	}, {
		number: "ten",
    index: "10",
		card: "Ten of Pentacles",
		meaning: ["financial success", "strong business relationships"],
		inverse: ["misfortune with the family", "a dull mind"],
		numeral: "x",
		suit: "Pentacles"
	}, {
		number: "eleven",
    index: "11",
		card: "Page of Pentacles",
		meaning: ["a student", "commitment to learning"],
		inverse: ["waste", "rebellion", "luxury", "bad news"],
		numeral: "page",
		suit: "Pentacles"
	}, {
		number: "twelve",
    index: "12",
		card: "Knight of Pentacles",
		meaning: ["cautious", "sensible", "slow to progress"],
		inverse: ["irresponsible", "impatient", "careless", "timid"],
		numeral: "knight",
		suit: "Pentacles"
	}, {
		number: "thirteen",
    index: "13",
		card: "Queen of Pentacles",
		meaning: ["healthy in body and finances", "grounded and calm"],
		inverse: ["overdependence", "neglect", "suspicion", "untrustworthy"],
		numeral: "queen",
		suit: "Pentacles"
	}, {
		number: "fourteen",
    index: "14",
		card: "King of Pentacles",
		meaning: ["enjoying the good life", "financial security"],
		inverse: ["anger", "bribery", "materialism"],
		numeral: "king",
		suit: "Pentacles"
	},
]

window.onload = function () {
  const data = new Vue({
  	el: "#app",
  	data: {
      deckVisible: true,
      cardVisible: false,
  		cardTitle: "",
  		cardMeanings: "",
  		cardNumeral: "",
  		inverse: "",
			major: false,
			suitObject: {
				wands: false,
				cups: false,
				pentacles: false,
				swords: false,
				major: false,
				inverse: false
			}
  	},
  	methods: {
  		drawCard: function() {
				this.deckVisible = !this.deckVisible
				this.cardVisible = !this.cardVisible
  			let isInverse = Math.random() >= 0.5
  			let card = cards[Math.floor(Math.random()*cards.length)];
        //document.getElementsByClassName(".cardWrapper").classList.add(card.suit)
  			this.cardTitle = card.card
  			this.cardNumeral = card.numeral
  			if (!isInverse) {
  				this.cardMeanings = card.meaning
  				this.inverse = ""
  			} else {
  				this.cardMeanings = card.inverse
  				this.inverse = "reversed"
					this.suitObject.inverse = true
  			}
    		if (card.suit == "Swords") {
          this.suitObject.swords = true
        } else if (card.suit == "Pentacles") {
          this.suitObject.pentacles = true
        } else if (card.suit == "Wands") {
          this.suitObject.wands = true
        } else if (card.suit == "Cups") {
          this.suitObject.cups = true
        } else if (card.suit == "major") {
					this.major = !this.major
          this.suitObject.major = true
        }
      },
      drawAgain: function() {
				this.major = !this.major
				this.deckVisible = !this.deckVisible
				this.cardVisible = !this.cardVisible
    		this.cardTitle = ""
    		this.cardMeanings = ""
    		this.cardNumeral = ""
    		this.inverse = ""
				this.suitObject.pentacles = false
				this.suitObject.wands = false
				this.suitObject.swords = false
				this.suitObject.cups = false
				this.suitObject.major = false
				this.suitObject.inverse = false
      }
  	}
  })
}
