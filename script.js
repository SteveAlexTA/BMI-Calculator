document.getElementById("calculate").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv =  document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "<p class='error'>Please enter valid positive numbers for your weight and height.</p>";
        resultDiv.style.color = "white";
        resultDiv.style.backgroundColor = "red";
        return;
    }

    const height_in_meters = height / 100; // Convert height from cm to m
    const bmi = weight / (height_in_meters**2);
    const bmi_rounded = bmi.toFixed(1);

    let category = "";
    let bgcolor = "";   

    if (bmi <= 18.4) {
        category = "You are underweight";
        bgcolor = "lightblue";
    } else if (bmi <= 24.9) {
        category = "You are in a healthy weight range";
        bgcolor = "lightgreen";
    } else if (bmi <= 29.9) {
        category = "You are overweight";
        bgcolor = "lightyellow";
    } else if (bmi <= 34.9) {
        category = "You are in the obesity class I range";
        bgcolor = "lightorange";
    } else if (bmi <= 39.9) {
        category = "You are in the obesity class II range";
        bgcolor = "red";
    } else {
        category = "You are in the obesity class III range";
        bgcolor = "darkred";
    }

    resultDiv.innerHTML = `<p>Your BMI is <strong>${bmi_rounded}</strong>.</p><p>${category}</p>`;
    resultDiv.style.color = "white";
    resultDiv.style.backgroundColor = bgcolor;
});