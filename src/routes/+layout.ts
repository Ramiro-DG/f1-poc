import type { LayoutLoad } from './$types';

export const load = (async ({fetch}) => {
    const res = await fetch('http://ergast.com/api/f1/current/next.json');
    const data = await res.json();
    return data;
}) satisfies LayoutLoad;