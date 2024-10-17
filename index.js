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
const form = document.getElementById('user-form');
const resultsDiv = document.getElementById('output')

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;

    // Send POST request to save user
    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
            
                id: 1,
                name: "Collins",
                dob: "2005-08-10",
                currentDate: "2024-10-17",
                calculatedAge: {
                  years: 19,
                  months: 2,
                  days: 7
                }
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    })

