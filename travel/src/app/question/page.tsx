'use client'
import { useState } from 'react';
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/lib/questions'; // 質問データ
import { useRouter } from 'next/navigation';
import { useAnswerStore } from '@/store/useAnswerStore';

export default function QuestionPage() {
	const [current, setCurrent] = useState(0);
	const router = useRouter();
	const { tags, setTags } = useAnswerStore();
        
	const handleAnswer = (tag: string) => {
	  // タグを追加
	  const newTags = [...tags, tag];
	  setTags(newTags);
        
	  // 次の質問へ進む or 結果ページへ
	  if (current + 1 < questions.length) {
	    setCurrent((prev) => prev + 1);
	  } else {
	    router.push('/result');
	  }
	};
        
	const q = questions[current];
        
	return (
	  <div className="flex justify-center items-center min-h-screen px-4">
	    <QuestionCard
	      question={q.question}
	      options={q.options}
	      current={current + 1}
	      total={questions.length}
	      onSelect={handleAnswer}
	    />
	  </div>
	);
        }