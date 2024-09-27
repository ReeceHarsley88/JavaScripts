function LockFieldsByTextValue(executionContext) {
    const formContext = executionContext.getFormContext();
    const statusField = "status_field_name"; // Replace with the logical name of the status field
    const statusValue = formContext.getAttribute(statusField).getValue();

    // Log the current value of the status field
    console.log("Status Value:", statusValue);
    
    // Define the fields to lock/unlock
    const fieldsToLock = [
        "field_name_1", // Replace with the logical name of the field
        "field_name_2"  // Replace with the logical name of the field
    ];
    
    // Function to set the fields' read-only state
    function setFieldsReadOnlyState(isReadOnly) {
        fieldsToLock.forEach(fieldName => {
            const control = formContext.getControl(fieldName);
            if (control) {
                control.setDisabled(isReadOnly);
                console.log(`Field ${fieldName} is ${isReadOnly ? "read-only" : "editable"}.`);
            } else {
                console.log(`Field ${fieldName} not found.`);
            }
        });
    }
    
    // Check if the status is not "Active" or is blank (change condition as needed)
    if (statusValue !== "Active" || statusValue === "") {
        // Set the fields to read-only
        setFieldsReadOnlyState(true);
    } else {
        // Make the fields editable if the status is "Active"
        setFieldsReadOnlyState(false);
    }
}

// Register this function on the change event of the status field
