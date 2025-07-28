// Question data (10 questions with scores)

        export type Option = {
	label: string;
	tag: string;
        };
        
        export type Question = {
	question: string;
	options: Option[];
        };

        export const questions: Question[] = [
	{
	  question: 'What matters most to you when traveling?',
	  options: [
	    { label: 'Refresh mind and body', tag: 'relax' },
	    { label: 'Adventure to new places', tag: 'active' },
	    { label: 'Sophisticated urban experiences', tag: 'urban' },
	  ]
	},
	{
	  question: 'What do you usually do at your destination?',
	  options: [
	    { label: 'Relax at hot springs or cafes', tag: 'relax' },
	    { label: 'Walk or hike in nature', tag: 'nature' },
	    { label: 'Visit museums and go shopping', tag: 'urban' },
	  ]
	},
	{
	  question: 'How important are photos to you?',
	  options: [
	    { label: 'Must visit Instagram-worthy spots!', tag: 'photogenic' },
	    { label: 'Prefer to see with my own eyes', tag: 'active' },
	    { label: 'A few snapshots are enough', tag: 'relax' },
	  ]
	},
	{
		question: 'Which cuisine excites you most?',
		options: [
		  { label: 'Fresh seafood like sushi and sashimi', tag: 'nature' },       // Hokkaido, Kanazawa
		  { label: 'Meat dishes like wagyu beef and ramen', tag: 'urban' }, // Osaka, Fukuoka, Tokyo
		  { label: 'Traditional Japanese cuisine', tag: 'culture' },  // Kyoto, Nara
		]
	},
	{
	  question: 'What kind of place would you like to visit?',
	  options: [
	    { label: 'Historic neighborhoods', tag: 'culture' },
	    { label: 'Scenic natural landscapes', tag: 'nature' },
	    { label: 'Cities with trendy spots', tag: 'urban' },
	  ]
	},
	{
	  question: 'What\'s your accommodation preference?',
	  options: [
	    { label: 'Quiet hot spring inn', tag: 'relax' },
	    { label: 'Budget-friendly guesthouse', tag: 'active' },
	    { label: 'High-rise or city hotel', tag: 'urban' },
	  ]
	},
	{
	  question: 'What do you enjoy at your destination?',
	  options: [
	    { label: 'Local food tours', tag: 'culture' },
	    { label: 'Tours and activities', tag: 'active' },
	    { label: 'Strolling while taking photos', tag: 'photogenic' },
	  ]
	},
	{
	  question: 'What\'s your ideal morning?',
	  options: [
	    { label: 'Wake up to birds singing', tag: 'nature' },
	    { label: 'Breakfast at a favorite cafe', tag: 'urban' },
	    { label: 'Lazy morning in bed', tag: 'relax' },
	  ]
	},
	{
	  question: 'What souvenirs do you prefer?',
	  options: [
	    { label: 'Traditional crafts and pottery', tag: 'culture' },
	    { label: 'Stylish sweets and goods', tag: 'photogenic' },
	    { label: 'Memories are enough!', tag: 'active' },
	  ]
	},
	{
	  question: 'How do you choose destinations?',
	  options: [
	    { label: 'Popular tourist spots', tag: 'urban' },
	    { label: 'Hidden gems off the beaten path', tag: 'active' },
	    { label: 'Places with atmosphere and healing vibes', tag: 'relax' },
	  ]
	},
        ];    

        
