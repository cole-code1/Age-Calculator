document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dobInput = document.getElementById('dob').value;
    const currentDateInput = document.getElementById('currentDate').value;
const name = document.getElementById('name').value;
    if (!dobInput || !currentDateInput) {
        alert('kindly fill both Date of Birth and Current Date.');
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);
    
    // Calculate age
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();


    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('Years').textContent = years;
    document.getElementById('Months').textContent = months;
    document.getElementById('Days').textContent = days;
});

const formEl = document.getElementById('ageForm');

formEl.addEventListener('submit',(event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
})
    

