import React, { useCallback, useEffect, useRef, useState } from "react";

function EntryScreen() {
	const words = useRef([
		"Hello",
		"Bonjour",
		"Hola",
		"Namaster, Salaam",
		"Cześć",
		"你好",
		"Sawubona",
		"नमस्ते",
	]);

	const [ready, setReady] = useState(false);
	const [done, setDone] = useState(false);
	const hasSetInterval = useRef(false);
	const [currWord, setCurrWord] = useState(words.current[0]);

	const handleInterval = useCallback(() => {
		const nextWord = words.current[words.current.indexOf(currWord) + 1];
		setCurrWord(nextWord);
		return nextWord;
	}, [currWord]);

	useEffect(() => {
		if (!ready) {
			setTimeout(() => {
				setReady(true);
			}, 800);
		}

		if (ready) {
			const interval = setInterval(handleInterval, 200);
			if (currWord === words.current[words.current.length - 1]) {
				clearInterval(interval);
				setDone(true);
			}

			return () => clearInterval(interval);
		}
	}, [handleInterval, currWord, ready]);

	return (
		<div
			className='entry-screen w-screen h-screen bg-black fixed left-0'
			style={{
				zIndex: 999999,
				willChange: "top",
				transition: "top 0.8s cubic-bezier(.86,0,.07,.995)",
				top: done ? "-100vh" : 0,
			}}
		>
			<div className='content w-full h-full flex items-center justify-center'>
				<h2
					className='word text-4xl text-white flex items-center'
					style={{
						transition:
							"opacity 0.3s cubic-bezier(0.35, 0.755, 0.42, 0.95), transform 0.3s cubic-bezier(0.35, 0.755, 0.42, 0.95)",
						opacity: done ? 0 : 1,
					}}
				>
					{ready && (
						<>
							<span className='bullet w-2 h-2 rounded-full bg-white mr-2'></span>
							{currWord}
						</>
					)}
				</h2>
			</div>
		</div>
	);
}

export default EntryScreen;
