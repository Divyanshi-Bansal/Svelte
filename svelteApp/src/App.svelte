
<script>
	import Counter from './component/Counter.svelte';
	import DataBinding from './component/DataBinding.svelte';
	import InlineDeleteEventHandler from './component/InlineDeleteEventHandler.svelte';
	import Loops from './component/Loops.svelte';
	import ReactiveValuesAndStatements from './component/ReactiveValuesAndStatements.svelte';
	import Conditionals from './component/Conditionals.svelte';
	import Props from './component/Props.svelte';
	import EventForwarding from './component/EventForwarding.svelte';
	// export let name;
</script>

<main>
	<!-- <Counter/>
	<hr>
	<DataBinding/>
	<hr>
	<ReactiveValuesAndStatements/> -->
	<!-- <Loops/> -->
	<!-- <InlineDeleteEventHandler/> -->
	<!-- <Conditionals/> -->
	<!-- <Props message1="props value for message1" message2="props value for message2" isPromo={true}/> -->
	<EventForwarding/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

