import { useState } from 'react';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';


export const feedbackTypes = { 	
	BUG: {
		title: 'Problema',
		image: {
			source: bugImageUrl,
			alt: 'Image de um inseto'
		}
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideiaImageUrl,
			alt: 'imagem de uma lampada'
		}
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImageUrl,
			alt: 'Imagem  de um balão'
		}
	},
}
 
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
	const [feedbackSent, setFeedbackSent] = useState(false)

	function handleRestartFeedback(){
		setFeedbackSent(false)
		setFeedbackType(null)
	}

	return(
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{ feedbackSent ? (
				<FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
			) : (
			<>
			{!feedbackType ? (
				<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
				) : (
				<FeedbackContentStep
				feedbackType={feedbackType}
				onFeedbackRestartRequested={handleRestartFeedback}
				onFeedbackSent={() => setFeedbackSent(true)}
				/>
				)}	
			</>
			)}
			<footer className="text-xs text-neutral-400">
				Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>
			</footer>
		</div>
	);
}