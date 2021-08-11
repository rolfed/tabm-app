<script>
	import Hero from '../component/Hero.svelte';
	import About from '../component/About.svelte';
	import Playlist from '../component/Playlist.svelte';
	import Contact from '../component/Contact.svelte';
	import Nav from '../component/Nav.svelte';
	import Footer from '../component/Footer.svelte';
</script>

<Nav />
<main class="flex flex-col min-h-screen mx-auto p-4 md:px-32 xl:px-64">
	<Hero />
	<About />
	<Playlist />
	<Contact />
</main>
<Footer />

<style>
</style>
