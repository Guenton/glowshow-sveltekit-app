import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { AlertType } from '$lib/types/alert';

export const alertTextState: Writable<string> = localStorageStore('alertText', '');
export const alertTypeState: Writable<AlertType> = localStorageStore('alertType', '');
export const isLoadingState: Writable<boolean> = writable(false);
