function onVendorChangeRefresh(executionContext) {
    // Retrieve the form context to access form data and controls
    var formContext = executionContext.getFormContext();
    
    // Get the current value of the 'Project Status' field (logical name: pwrsmt_projectstatus)
    var projectStatus = formContext.getAttribute("pwrsmt_projectstatus").getValue();
    
    // Check if the project status is 'Active'
    if (projectStatus === "Active") {
        // If the project status is 'Active', save the form to refresh data
        // This automatically saves the current state of the form and reloads the data
        formContext.data.entity.save();
    }
}

// You would typically register this function to trigger when the vendor field is changed
// so that the form is refreshed automatically if the project status is 'Active'
