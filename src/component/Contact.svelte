<script>
	import SectionTitle from './SectionTitle.svelte';
	import SectionBody from './SectionBody.svelte';
	import Label from './Label.svelte'
</script>

<section class="h-auto my-20 md:h-screen md:my-0">
    <SectionBody>
	    <SectionTitle title="Contact" />
        <form class="grid grid-cols-1">
            <div class="my-5">
                <Label forInput="subject" label="Subject"/>
                <input
                    type="text"
                    class="font-serif
                           shadow
                           appearance-none
                           border
                           rounded
                           w-full
                           py-2
                           px-4
                           text-gray-500
                           leading-tight
                           focus:outline-none
                           focus:shadow-outline"
                    id="subject"
                    placeholder="Tell me something"
                />
            </div>

            <div class="my-5">
                <Label forInput="Email" label="Email"/>
                <input
                    type="email"
                    class="font-serif
                           shadow
                           appearance-none
                           border
                           rounded
                           w-full
                           py-2
                           px-4
                           text-gray-500
                           leading-tight
                           focus:outline-none
                           focus:shadow-outline"
                    id="email"
                    placeholder="email"
                />
            </div>

            <div class="my-5">
                <Label forInput="message" label="Message"/>
                <textarea
                    class="font-serif
                           shadow
                           appearance-none
                           border
                           rounded
                           w-full
                           py-2
                           px-4
                           text-gray-500
                           leading-tight
                           focus:outline-none
                           focus:shadow-outline"
                    placeholder="Talk to me"
                    id="message"
                 ></textarea>
            </div>

            <button class="bg-yellow-200 rounded text-gray-50">Submit</button>
        </form>
    </SectionBody>
</section>

<style>
</style>
