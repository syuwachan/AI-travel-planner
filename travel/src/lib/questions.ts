//質問データ（10問、スコア付き）

        export type Option = {
	label: string;
	tag: string;
        };
        
        export type Question = {
	question: string;
	options: Option[];
	image: string;
        };

        export const questions: Question[] = [
	{
	  question: '旅行で一番大切にしたいのは？',
	  options: [
	    { label: '癒しと休息', tag: 'relax' },
	    { label: '非日常の冒険', tag: 'active' },
	    { label: '都会の洗練された時間', tag: 'urban' },
	  ],
	  image: '/images/q1.jpg',
	},
	{
	  question: '旅先でよくすることは？',
	  options: [
	    { label: '温泉・カフェでまったり', tag: 'relax' },
	    { label: '自然を歩いたり登ったり', tag: 'nature' },
	    { label: '美術館やショッピング巡り', tag: 'urban' },
	  ],
	  image: '/images/q2.jpg',
	},
	{
	  question: '写真のこだわりは？',
	  options: [
	    { label: '映えスポットは外せない！', tag: 'photogenic' },
	    { label: '自分の目で見るのが大事', tag: 'active' },
	    { label: 'ちょっと撮れたら満足', tag: 'relax' },
	  ],
	  image: '/images/q3.jpg',
	},
	{
		question: 'どの料理を一番楽しみたい？',
		options: [
		  { label: '寿司や海鮮丼など新鮮な魚介', tag: 'nature' },       // 北海道・金沢
		  { label: '神戸牛・ラーメン・焼肉など肉系グルメ', tag: 'urban' }, // 大阪・福岡・東京
		  { label: '郷土料理・精進料理など伝統的な和食', tag: 'culture' },  // 京都・奈良
		],
		image: '/images/q4.jpg',
	},
	{
	  question: '訪れてみたいのは？',
	  options: [
	    { label: '歴史ある街並み', tag: 'culture' },
	    { label: '自然豊かな絶景', tag: 'nature' },
	    { label: '最新スポットのある都市', tag: 'urban' },
	  ],
	  image: '/images/q5.jpg',
	},
	{
	  question: '宿泊先を選ぶ基準は？',
	  options: [
	    { label: '静かな温泉宿', tag: 'relax' },
	    { label: '個性的なゲストハウス', tag: 'active' },
	    { label: '高層ホテルやシティホテル', tag: 'urban' },
	  ],
	  image: '/images/q6.jpg',
	},
	{
	  question: '旅先での楽しみは？',
	  options: [
	    { label: 'ご当地グルメ巡り', tag: 'culture' },
	    { label: 'トレッキングや体験系', tag: 'active' },
	    { label: '写真を撮りながらぶらり', tag: 'photogenic' },
	  ],
	  image: '/images/q7.jpg',
	},
	{
	  question: '理想の朝は？',
	  options: [
	    { label: '鳥の声で自然に目覚める', tag: 'nature' },
	    { label: 'お気に入りのカフェで朝食', tag: 'urban' },
	    { label: '布団でのんびりゴロゴロ', tag: 'relax' },
	  ],
	  image: '/images/q8.jpg',
	},
	{
	  question: '旅のおみやげは？',
	  options: [
	    { label: '伝統工芸や焼き物など', tag: 'culture' },
	    { label: 'おしゃれなお菓子や雑貨', tag: 'photogenic' },
	    { label: '思い出だけで十分！', tag: 'active' },
	  ],
	  image: '/images/q9.jpg',
	},
	{
	  question: '旅行先の選び方は？',
	  options: [
	    { label: '観光地・王道が好き', tag: 'urban' },
	    { label: 'あまり知られていない穴場', tag: 'active' },
	    { label: '風情や癒しが感じられる場所', tag: 'relax' },
	  ],
	  image: '/images/q10.jpg',
	},
        ];    

        
