<script>
	import SectionTitle from './SectionTitle.svelte';
	import SectionBody from './SectionBody.svelte';
</script>

<section class="h-auto my-20 md:h-screen md:my-0">
	<SectionBody>
	    <SectionTitle title="About" />
        <div class="max-w-full md:max-w-md">
            <p class="font-serif text-gray-500">
                Lorep ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum ut mi ut mollis. Sed
                facilisis dolor nec nulla convallis mattis. Suspendisse lacinia mauris sapien, ut lacinia
                lacus feugiat quis. Phasellus at dui eros. Sed ac magna massa. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Praesent euismod faucibus risus
                tempor eleifend. Proin molestie, sem sit amet iaculis fermentum, orci nisi commodo dolor, eget
                tincidunt tellus nulla id nisl. Proin id justo sed risus lobortis viverra ut porttitor libero.
                Pellentesque felis augue, sollicitudin quis mauris at, consectetur ullamcorper lorem.
            </p>
        </div>
    </SectionBody>
</section>
