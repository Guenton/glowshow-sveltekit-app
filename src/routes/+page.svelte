<script lang="ts">
	import LoginContainer from '$lib/components/containers/LoginContainer.svelte';
	import LoginFormContainer from '$lib/components/containers/LoginFormContainer.svelte';

	import { policyPage } from '$utils/pages';
</script>

<LoginContainer>
	<LoginFormContainer label="Welcome, loading assets...">
		<p class="text-sm">
			<a class="anchor text-tertiary-500" href={policyPage}>Privacy Policy</a>
		</p>
	</LoginFormContainer>
</LoginContainer>
