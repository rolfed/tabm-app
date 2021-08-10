<script>
	import Hero from '../component/Hero.svelte';
	import About from '../component/About.svelte';
	import Playlist from '../component/Playlist.svelte';
	import Contact from '../component/Contact.svelte';
	import Nav from '../component/Nav.svelte';
	import Footer from '../component/Footer.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500&family=Roboto:wght@900&display=swap"
	/>
</svelte:head>

<main>
	<Nav />
	<Hero />
	<About />
	<Playlist />
	<Contact />
	<Footer />
</main>

<style>
</style>
