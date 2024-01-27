async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LeoMaia27/portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    console.log(fetching.status === 200 ? true : false);

    return await fetching.json();
}