<script>
	import data from '$lib/index.js';
	import Puzzle from '$lib/components/Puzzle.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import * as bootstrap from 'bootstrap';

	let correctAnswers = $state(Number(localStorage.getItem('correctAnswers') || 0));
	let currentQuestionIndex = $state(Number(localStorage.getItem('currentQuestion') || 0));
	let freshQuestions = $state(JSON.parse(localStorage.getItem('freshQuestions') || '[]'));
	let totalAnswers = $state(Number(localStorage.getItem('totalAnswers') || 0));
	let isAuthenticated = $state(Boolean(localStorage.getItem('isAuthenticated') || false));
	let puzzle;
	let password = $state('');
	let passwordHash = $state('');

	const changeQuestion = () => {
		if (!freshQuestions.length) {
			freshQuestions = [...Array(data.questions.length).keys()].sort((a, b) => {
				return Math.random() - 0.5;
			});
		}
		currentQuestionIndex = freshQuestions.pop();
		puzzle.reset();
	};

	const wipeRating = () => {
		correctAnswers = 0;
		totalAnswers = 0;
	};

	const doHashPassword = (textData) => {
		const encodedData = new TextEncoder().encode(textData);
		window.crypto.subtle.digest('SHA-256', encodedData).then((digestData) => {
			const digestArray = Array.from(new Uint8Array(digestData));
			const hashHex = digestArray.map((b) => b.toString(16).padStart(2, '0')).join('');
			passwordHash = hashHex;
		});
	};

	$effect(() => {
		localStorage.setItem('correctAnswers', `${correctAnswers}`);
		localStorage.setItem('currentQuestion', `${currentQuestionIndex}`);
		localStorage.setItem('freshQuestions', JSON.stringify(freshQuestions));
		localStorage.setItem('totalAnswers', `${totalAnswers}`);

		doHashPassword(password);
		const expectedHash = 'a2cfd0e128a6e00b22e389d2e83d2067c952ba193fdd714dfd0f9731dcbb95fe';
		if (passwordHash === expectedHash) {
			isAuthenticated = true;
		}

		if (isAuthenticated === true) {
			localStorage.setItem('isAuthenticated', `${isAuthenticated}`);
		} else {
			localStorage.removeItem('isAuthenticated');
		}
	});
</script>

<div class="container">
	<div class="row">
		<div class="col">
			<h1 class="display-1">Мореходка</h1>
		</div>
	</div>
	{#if isAuthenticated}
		<div class="row">
			<div class="col">
				<div class="alert alert-secondary alert-dismissible fade show" role="alert">
					<strong>Как пользоваться:</strong> Тапайте ответы. Вопросы перемешиваются и не
					заканчиваются. Если ответите неправильно — получите подсказку.
					<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
					></button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Stat
					correct={correctAnswers}
					fresh={freshQuestions.length}
					total={totalAnswers}
					{wipeRating}
				/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Puzzle
					bind:correct={correctAnswers}
					bind:this={puzzle}
					bind:total={totalAnswers}
					questionIndex={currentQuestionIndex}
				/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<button class="btn btn-primary w-100" onclick={changeQuestion}>Следующий вопрос</button>
			</div>
		</div>
	{:else}
		<div class="row">
			<div class="col">
				<label for="inputPassword" class="form-label">Ключ:</label>
				<input
					bind:value={password}
					type="password"
					id="inputPassword"
					class="form-control"
					aria-describedby="passwordHelpBlock"
				/>
				<div id="passwordHelpBlock" class="form-text">
					Ключ можно получить у <a href="https://t.me/jesuisalexandre">@jesuisalexandre</a>.
				</div>
			</div>
		</div>
	{/if}
</div>
