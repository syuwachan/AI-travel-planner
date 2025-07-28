// Question display component
'use client'

       type QuestionCardProps = {
	question: string;
	options: Option[];
	onSelect: (tag: string) => void;
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
	current,
	total,
        }: QuestionCardProps) {
	return (
	  <div className="max-w-md w-full bg-white shadow-md rounded-xl p-4 sm:p-6 text-center space-y-4 sm:space-y-6">
	    <h2 className="text-sm text-gray-500">
	      Question {current} of {total}
	    </h2>
	    <p className="text-lg sm:text-xl font-semibold">{question}</p>
	    <div className="flex flex-col gap-3 sm:gap-4">
	      {options.map((opt, index) => (
	        <button
		key={index}
		onClick={() => onSelect(opt.tag)}
		className="px-3 sm:px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer text-sm sm:text-base"
	        >
		{opt.label}
	        </button>
	      ))}
	    </div>
	  </div>
	);
        }