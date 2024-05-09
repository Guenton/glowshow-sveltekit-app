<script lang="ts">
	import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';
	import ContactContainer from '$lib/components/containers/ContactContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import FirstNameInput from '$lib/components/inputs/FirstNameInput.svelte';
	import LastNameInput from '$lib/components/inputs/LastNameInput.svelte';
	import CommentInput from '$lib/components/inputs/CommentInput.svelte';
	import PhoneNumberInput from '$lib/components/inputs/PhoneNumberInput.svelte';

	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	let phoneNumber: string = '';
	let comment: string = '';

	let firstNameRef: HTMLInputElement;
	let lastNameRef: HTMLInputElement;
	let emailRef: HTMLInputElement;
	let phoneNumberRef: HTMLInputElement;
	let commentRef: HTMLTextAreaElement;

	const submit = () => console.log(firstName, lastName, email, phoneNumber, comment);
</script>

<ContactContainer>
	<div class="m-10 mt-32 md:m-32">
		<div class="grid grid-cols-2 gap-5">
			<div class="col-span-2 md:col-span-1">
				<div class="text-white">
					<h1 class="h1">Get in Touch</h1>
					<p class="text-sm">Would you like a more personal approach?</p>
					<p class="text-sm">We would love that! Ket us help bring your vision into reality.</p>
					<p class="text-sm">Let's get in touch and discuss dreams!</p>
					<br />
					<br />
					<h4 class="h4">*Protip: If you're signed in, you can skip the form!</h4>
				</div>
			</div>

			<div class="col-span-2 md:col-span-1">
				<div class="grid grid-cols-2 gap-8">
					<div class="col-span-2 md:col-span-1">
						<FirstNameInput
							bind:value={firstName}
							bind:ref={firstNameRef}
							on:enter={() => lastNameRef.focus()}
						/>
					</div>
					<div class="col-span-2 md:col-span-1">
						<LastNameInput
							bind:value={lastName}
							bind:ref={lastNameRef}
							on:enter={() => emailRef.focus()}
						/>
					</div>

					<div class="col-span-2">
						<EmailInput
							bind:value={email}
							bind:ref={emailRef}
							on:enter={() => phoneNumberRef.focus()}
						/>
					</div>

					<div class="col-span-2">
						<PhoneNumberInput
							bind:value={phoneNumber}
							bind:ref={phoneNumberRef}
							on:enter={() => commentRef.focus()}
						/>
					</div>

					<div class="col-span-2">
						<CommentInput bind:value={comment} bind:ref={commentRef} on:enter={submit} />
					</div>

					<div class="col-span-2 md:col-span-1">
						<SubmitButton on:click={submit} />
					</div>
				</div>
			</div>
		</div>
	</div></ContactContainer
>
