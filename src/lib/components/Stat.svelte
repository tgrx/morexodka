<script>
	import data from '$lib/index.js';

	const { correct, total, fresh, wipeRating } = $props();
	let progress = $derived(fresh ? Math.ceil((100 * fresh) / data.questions.length) : 100);
	let rating = $derived(total <= 0 ? 0 : (100 * correct) / total);
</script>

<div class="row my-2">
	<div class="col">
		<div
			aria-label="Animated striped example"
			aria-valuemax="100"
			aria-valuemin="0"
			aria-valuenow={progress}
			class="progress"
			role="progressbar"
		>
			<div
				class="progress-bar progress-bar-striped progress-bar-animated"
				style="width: {progress}%"
			></div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col">
		<p>Готовность: {rating.toFixed(0)}% ({correct} / {total})</p>
	</div>
	<div class="col-2">
		<button type="button" class="btn btn-outline-secondary btn-sm" onclick={wipeRating}>🗑️</button>
	</div>
</div>
