function updateProfileInformation(profileData) { //manipular html
    const profilePhoto = document.getElementById('profile.name');
    profilePhoto.src = profileData.photo;
    profilePhoto.alt = profileData.name;

    const profileName = document.getElementById('profile.name');
    profileName.innerText = profileData.name;

    const profileJob = document.getElementById('profile.job');
    profileJob.innerText = profileData.job;

    const profileLocation = document.getElementById('profile.location');
    profileLocation.innerText = profileData.location;

    const profilePhone = document.getElementById('profile.phone');
    profilePhone.innerText = profileData.phone;

    const profileEmail = document.getElementById('profile.email');
    profileEmail.innerText = profileData.email;
    profileEmail.href = href=`mailto:${profileData.email}`;
}

async function main() {
    const profileData = await fetchProfileData();
    console.log(profileData);
    return profileData;
}

main();