// // Specific JavaScript for the user profile page

// document.addEventListener('DOMContentLoaded', () => {
//     const profileInfo = {
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         farmLocation: 'Village XYZ, District ABC',
//         memberSince: '2021'
//     };

//     const profileContainer = document.querySelector('.profile-info');

//     const name = document.createElement('h3');
//     name.textContent = `Name: ${profileInfo.name}`;

//     const email = document.createElement('p');
//     email.textContent = `Email: ${profileInfo.email}`;

//     const location = document.createElement('p');
//     location.textContent = `Farm Location: ${profileInfo.farmLocation}`;

//     const memberSince = document.createElement('p');
//     memberSince.textContent = `Member Since: ${profileInfo.memberSince}`;

//     profileContainer.appendChild(name);
//     profileContainer.appendChild(email);
//     profileContainer.appendChild(location);
//     profileContainer.appendChild(memberSince);
// });

// function editProfile() {
//     alert('Edit Profile feature coming soon!');
// }

// function changePassword() {
//     alert('Change Password feature coming soon!');
// }



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

document.getElementById('profileForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        fullName: formData.get('fullName'),
        contactInfo: formData.get('contactInfo'),
        location: formData.get('location')
    };

    try {
        const response = await fetch('/api/submit-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);
        alert(result.message);
    } catch (error) {
        console.error('Error submitting profile:', error);
        alert('Error submitting profile. Please try again.');
    }
});
