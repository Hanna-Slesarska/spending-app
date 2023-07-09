const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const people = document.querySelector("#people").value;
    const carRental = document.querySelector("#car").value;
    const gasCost = document.querySelector("#gas").value;
    const hotel = document.querySelector("#hotel").value;
    const foodExpences = document.querySelector("#food").value;

    if (carRental === "" || gasCost === "" || hotel === "" || foodExpences === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Enter your information!',
            
          })
    }
    //Calculations 
    let totalSum = + carRental + + gasCost + + hotel + + foodExpences;
    let totalPerPerson = totalSum/people;

    totalSum = totalSum.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);

    //show Total in HTML
    document.querySelector("#totalAmount").textContent = totalSum;
    document.querySelector("#dividedAmount").textContent = totalPerPerson;
}