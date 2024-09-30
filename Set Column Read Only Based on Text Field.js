function LockTimelineTabByProjectStatus(executionContext) {
    // Get the form context to interact with form fields
    const formContext = executionContext.getFormContext();
    
    // Retrieve the current value of the project status field (logical name: pwrsmt_projectstatus)
    const projectStatus = formContext.getAttribute("pwrsmt_projectstatus").getValue();
    
    // Log the current value of project status for debugging purposes
    console.log("Project Status:", projectStatus);
    
    // Define the fields to lock/unlock using their logical names
    // These are the columns that will become read-only or editable based on project status
    const fieldsToLock = [
        "pwrsmt_implementationdate", // Logical name for the Implementation Date field
        "pwrsmt_savingsperiodmonth"  // Logical name for the Savings Period field
    ];
    
    // Function to set the read-only state of the specified fields
    // isReadOnly will determine if fields are locked (true) or editable (false)
    function setFieldsReadOnlyState(isReadOnly) {
        fieldsToLock.forEach(fieldName => {
            // Get the control for each field by its logical name
            const control = formContext.getControl(fieldName);
            
            if (control) {
                // Set the field's read-only state based on isReadOnly
                control.setDisabled(isReadOnly);
                console.log(`Field ${fieldName} is ${isReadOnly ? "read-only" : "editable"}.`);
            } else {
                // Log a message if the field is not found on the form (useful for troubleshooting)
                console.log(`Field ${fieldName} not found.`);
            }
        });
    }
    
    // Check if the project status is not "Pending" or if it's blank (empty string)
    if (projectStatus !== "Pending" || projectStatus === "") {
        // If the project status is not "Pending", set the fields to read-only
        setFieldsReadOnlyState(true);
    } else {
        // If the project status is "Pending", make the fields editable
        setFieldsReadOnlyState(false);
    }
}

// Register this function on the change event of the pwrsmt_projectstatus column
// This ensures the function is triggered when the project status field is updated
