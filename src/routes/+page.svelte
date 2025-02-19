<script>
	import data from '$lib/index.js';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Stat from '$lib/components/Stat.svelte';

	let correctAnswers = $state(Number(localStorage.getItem('correctAnswers') || 0));
	let currentQuestionIndex = $state(Number(localStorage.getItem('currentQuestion') || 0));
	let freshQuestions = $state(JSON.parse(localStorage.getItem('freshQuestions') || '[]'));
	let totalAnswers = $state(Number(localStorage.getItem('totalAnswers') || 0));
	let puzzle;

	const changeQuestion = () => {
		puzzle.reset();
		if (!freshQuestions.length) {
			freshQuestions = [...Array(data.questions.length).keys()].sort((a, b) => {
				if (Math.random() < 0.5) {
					return -1;
				} else if (Math.random() > 0.5) {
					return 1;
				} else {
					return 0;
				}
			});
			console.log(`🟩 fresh questions: ${JSON.stringify(freshQuestions)}`);
		}
		console.log(`fresh questions: ${JSON.stringify(freshQuestions)}`);
		currentQuestionIndex = freshQuestions.pop();
		console.log(`currentQuestionIndex = ${currentQuestionIndex}`);
	};

	const wipeRating = () => {
		correctAnswers = 0;
		totalAnswers = 0;
	};

	$effect(() => {
		localStorage.setItem('correctAnswers', `${correctAnswers}`);
		localStorage.setItem('currentQuestion', `${currentQuestionIndex}`);
		localStorage.setItem('freshQuestions', JSON.stringify(freshQuestions));
		localStorage.setItem('totalAnswers', `${totalAnswers}`);
	});
</script>

<div class="container">
	<div class="row">
		<div class="col">
			<h1 class="display-1">Мореходка</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="alert alert-secondary alert-dismissible fade show" role="alert">
				<strong>Как пользоваться:</strong> Тапайте ответы. Вопросы перемешиваются и не
				заканчиваются. Если ответите неправильно — получите подсказку.
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Stat
				correct={correctAnswers}
				total={totalAnswers}
				fresh={freshQuestions.length}
				{wipeRating}
			/>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Puzzle
				questionIndex={currentQuestionIndex}
				bind:correct={correctAnswers}
				bind:total={totalAnswers}
				bind:this={puzzle}
			/>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<button class="btn btn-primary w-100" onclick={changeQuestion}>Следующий вопрос</button>
		</div>
	</div>
</div>
