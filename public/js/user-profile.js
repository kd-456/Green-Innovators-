// Specific JavaScript for the user profile page

document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        farmLocation: 'Village XYZ, District ABC',
        memberSince: '2021'
    };

    const profileContainer = document.querySelector('.profile-info');

    const name = document.createElement('h3');
    name.textContent = `Name: ${profileInfo.name}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${profileInfo.email}`;

    const location = document.createElement('p');
    location.textContent = `Farm Location: ${profileInfo.farmLocation}`;

    const memberSince = document.createElement('p');
    memberSince.textContent = `Member Since: ${profileInfo.memberSince}`;

    profileContainer.appendChild(name);
    profileContainer.appendChild(email);
    profileContainer.appendChild(location);
    profileContainer.appendChild(memberSince);
});

function editProfile() {
    alert('Edit Profile feature coming soon!');
}

function changePassword() {
    alert('Change Password feature coming soon!');
}
