import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const res = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
    const res1 = await fetch('http://ergast.com/api/f1/current/constructorStandings.json');
    const driverData = await res.json();
    const constructorData = await res1.json();
    return {driverData, constructorData};
}) satisfies PageLoad;

