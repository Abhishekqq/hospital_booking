document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchButton").addEventListener("click", searchHospitals);
    document.getElementById("locationButton").addEventListener("click", getLocation);
    document.getElementById("appointmentForm").addEventListener("submit", bookAppointment);
});

function searchHospitals() {
    let symptom = document.getElementById("symptomInput").value.toLowerCase();
    let hospitals = {
        "fever": ["City Hospital", "MediCare Clinic"],
        "cough": ["General Health Center", "Apollo Hospital"],
        "headache": ["Green Valley Hospital", "RUHS"],
    };
    
    let result = hospitals[symptom] || ["No hospitals found for this symptom"];
    
    let hospitalList = document.getElementById("hospitalList");
    hospitalList.innerHTML = "";
    result.forEach(hospital => {
        let li = document.createElement("li");
        li.textContent = hospital;
        hospitalList.appendChild(li);
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let mapUrl = `https://www.google.com/maps?q=hospitals+near+${lat},${lon}`;
    window.open(mapUrl, "_blank");
}

function bookAppointment(event) {
    event.preventDefault();
    let hospital = document.getElementById("hospitalSelect").value;
    let date = document.getElementById("appointmentDate").value;
    alert(`Appointment booked at ${hospital} on ${date}`);
}

