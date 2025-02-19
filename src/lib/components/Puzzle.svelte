<script>
	import data from '$lib/index.js';

	let { questionIndex, correct = $bindable(), total = $bindable() } = $props();
	const variants = ['a', 'b', 'c', 'd'];
	const question = $derived(data.questions[questionIndex]);
	const uid = $props.id();
	const idCard = `${uid}-card`;
	let help = $state(false);
	let answered = $state(false);

	const trackAnswer = (v, node) => {
		if (answered) {
			return;
		}

		const score = v == question.right ? 1 : 0;
		total = total + 1;
		correct = correct + score;

		if (!score) {
			node.classList.add('list-group-item-danger');
			help = true;
		} else {
			node.classList.add('list-group-item-success');
		}

		answered = true;
	};

	export const reset = () => {
		document
			.getElementById(idCard)
			?.querySelectorAll('button.list-group-item')
			.forEach((e) => {
				e.classList.remove('list-group-item-danger');
				e.classList.remove('list-group-item-success');
				help = false;
			});
		answered = false;
	};
</script>

<div class="card mb-2">
	{#if question.img}
		<img src="http://192.168.100.2:8000/assets/{question.img}" class="card-img-top img-thumbnail m-2" style="max-width: 350px" alt="Illustration" />
	{/if}
	<div class="card-body" id={idCard}>
		<h5 class="card-title">{question.msg}</h5>
		<div class="list-group">
			{#each variants as v, i}
				<button
					class="list-group-item list-group-item-action"
					onclick={(e) => trackAnswer(v, e.target)}
					type="button">{question[v]}</button
				>
			{/each}
		</div>
		{#if help}
			<p class="card-text">{question.help}</p>
		{/if}
	</div>
</div>
