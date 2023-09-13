export const load = (async ({fetch}) => {
    const res = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
    const data = await res.json();
    return data;
});