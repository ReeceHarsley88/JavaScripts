function refreshFormOnTabLoad(executionContext) {
    // Get the form context to interact with the form's data and controls
    var formContext = executionContext.getFormContext();
    
    // Refresh the form data and saves changes .    
    formContext.data.refresh(false)
        .then(
            // Success callback: Log a message when the form refreshes successfully
            () => console.log("Form refreshed successfully."),
            
            // Error callback: Log an error message if the refresh fails
            (error) => console.error("Error refreshing form:", error.message)
        );
}

// This function can be triggered when a tab is loaded to ensure the form is refreshed 
// without saving the current changes to the form.
