function TabChangeSaveRecord(executionContext) {
    // Get the form context to access form data and controls
    var formContext = executionContext.getFormContext();

    // Check if the form data has unsaved changes (i.e., if it's "dirty")
    var isDirty = formContext.data.entity.getIsDirty();

    // Refresh the form and decide whether to save based on the dirty state
    // If the form is dirty (i.e., has unsaved changes), it will save those changes; otherwise, it won't save
    formContext.data.refresh(isDirty);
        //.then(
        //    () => console.log("Form refreshed successfully."), // Uncomment to log successful refresh
        //    (error) => console.error("Error refreshing form: ", error.message) // Uncomment to log errors
        //);
}

// This function can be triggered when a tab is changed to ensure the form saves its data 
// if there are unsaved changes (i.e., the form is dirty)
