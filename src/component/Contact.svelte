<script>
	import SectionTitle from './SectionTitle.svelte';
</script>
<section class="scene">
	<SectionTitle title="Contact"/>
	<form>
		<label>
			Subject
			<input type="text" />
		</label>

		<label>
			Email
			<input type="email" />
		</label>

		<label>
			Message
			<textarea />
		</label>

		<button>Submit</button>
	</form>
</section>
