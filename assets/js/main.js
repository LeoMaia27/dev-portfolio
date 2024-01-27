async function main() {
    const profileData = await fetchProfileData();
    console.log(profileData);
}

main();