<script>
	import SectionTitle from './SectionTitle.svelte';
</script>

<style>
</style>

<section class="h-auto md:h-screen">
	<SectionTitle title="Contact" />
	<form class="grid grid-cols-1 gap-4 bg-gray-50 rounded p-4 md:p-32">
		<label class="block text-gray-500">
			Subject
		</label>
		<input type="text"
					 class="font-serif shadow appearance-none border rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
					 id="subject"
					 placeholder="Tell me something"
					/>

		<label class="block text-gray-500">
			Email
		</label>
		<input type="email"
					 class="font-serif shadow appearance-none border rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
					 id="email"
					 placeholder="email"
		/>

		<label class="block text-gray-500">
			Message
		</label>
		<textarea
			class="font-serif shadow appearance-none border rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="What do you have to say?"
		/>

		<button class="bg-yellow-200 rounded text-gray-50">Submit</button>
	</form>
</section>
