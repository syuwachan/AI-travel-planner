//質問表示コンポーネント
'use client'

       type QuestionCardProps = {
	question: string;
	options: Option[];
	onSelect: (tag: string) => void;
	image:string;
	current: number;
	total: number;
        };

        type Option = {
	label: string;
	tag: string;
        };
        

        export default function QuestionCard({
	question,
	options,
	onSelect,
	image,
	current,
	total,
        }: QuestionCardProps) {
	return (
	  <div className="max-w-md w-full bg-white shadow-md rounded-xl p-6 text-center space-y-6">
	    <h2 className="text-sm text-gray-500">
	      Question {current} of {total}
	    </h2>
	    <img
	      src={image}
	      alt="Question Image"
	      className="w-full h-48 object-cover rounded-md"
	    />
	    <p className="text-xl font-semibold">{question}</p>
	    <div className="flex flex-col gap-4">
	      {options.map((opt, index) => (
	        <button
		key={index}
		onClick={() => onSelect(opt.tag)}
		className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
	        >
		{opt.label}
	        </button>
	      ))}
	    </div>
	  </div>
	);
        }