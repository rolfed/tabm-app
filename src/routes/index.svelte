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
	:root {
		--font-size: 1rem; /* 16px */
		--ratio: 1.333;

		/* Calculate values */
		--h4: calc(var(--font-size) * var(--ratio));
		--h3: calc(var(--h4) * var(--ratio));
		--h2: calc(var(--h3) * var(--ratio));
		--h1: calc(var(--h2) * var(--ratio));
	}

	body {
		font-family: 'Bodoni Moda', serif;
	}
	h1,
	h2,
	h3,
	h4 {
		font-weight: 800;
	}
	p,
	a,
	button {
		font-weight: 400;
	}
	p {
		font-size: var(--font-size);
	}
	h4 {
		font-size: var(--h4);
	}

	h3 {
		font-size: var(--h3);
	}

	h2 {
		font-size: var(--h2);
	}

	h1 {
		font-size: var(--h1);
	}
</style>
