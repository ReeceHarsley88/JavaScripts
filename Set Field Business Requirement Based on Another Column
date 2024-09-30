function setVendorFieldRequirement(executionContext) {
    // Get the form context to interact with form fields and controls
    var formContext = executionContext.getFormContext();
    
    // Get the current value of the 'Project Status' field (logical name: pwrsmt_projectstatus)
    var projectStatus = formContext.getAttribute("pwrsmt_projectstatus").getValue();

    // Set the requirement level of the 'Vendor' field based on the project status
    if (projectStatus === "Active") {
        // If the project status is 'Active', make the 'Vendor' field mandatory
        formContext.getAttribute("pwrsmt_vendor").setRequiredLevel("required");
    } else {
        // If the project status is not 'Active', set the 'Vendor' field to "recommended"
        formContext.getAttribute("pwrsmt_vendor").setRequiredLevel("recommended");
    }
}

// Register the function to run when the 'Project Status' field changes
function registerOnChangeEvent(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Add an OnChange event listener to the 'Project Status' field (pwrsmt_projectstatus)
    formContext.getAttribute("pwrsmt_projectstatus").addOnChange(setVendorFieldRequirement);
}

// Register the OnLoad event to set the initial requirement and event listeners
function onLoad(executionContext) {
    // Register the OnChange event for 'Project Status'
    registerOnChangeEvent(executionContext);
    
    // Set the 'Vendor' field requirement level when the form loads
    setVendorFieldRequirement(executionContext);
}
