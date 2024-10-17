document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const dobInput = document.getElementById('dob').value;
    const currentDateInput = document.getElementById('currentDate').value;

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

