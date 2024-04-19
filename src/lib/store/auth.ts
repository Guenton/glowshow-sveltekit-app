import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const userIdState: Writable<number> = localStorageStore('userId', 0);
export const emailState: Writable<string> = localStorageStore('email', '');
