function LockSectionBasedOnATextField(executionContext) {
    const formContext = executionContext.getFormContext();
    const projectStatus = formContext.getAttribute("pwrsmt_projectstatus").getValue(); // replace "pwrsmt_projectstatus" with the logical name of the column you want to monitor for changes.
    
    // Log the current value of said column
    console.log("Project Status:", projectStatus); // Replace both, the first with text you wish to see displayed, the second is the variable set above.
    
    // Define the sections to lock/unlock, this will be the names (not display names) of the sections from the form
    const sectionsToLock = [
        "TAB_Cost_Adjustments",
        "TAB_CAPEX",
        "TAB_Rebates",
        "TAB_Standard_Savings"
    ];
    
    // Function to set the sections' read-only state
    function setSectionsReadOnlyState(isReadOnly) {
        sectionsToLock.forEach(sectionName => {
            const section = formContext.ui.tabs.get("OVERVIEW_TAB").sections.get(sectionName); // This will be the name (not display names) of the main tab your currently on.
            if (section) {
                section.controls.forEach(control => {
                    control.setDisabled(isReadOnly);
                });
                console.log(`Section ${sectionName} is ${isReadOnly ? "read-only" : "editable"}.`);
            } else {
                console.log(`Section ${sectionName} not found.`);
            }
        });
    }
    
    // Check if the project status is not "Pending". Replace this with the text value you are looking for
    if (projectStatus !== "Pending") { // remember !== equals "is not equal to"
        // Set the sections to read-only
        setSectionsReadOnlyState(true);
    } else {
        // Make the sections editable if the status is "Pending"
        setSectionsReadOnlyState(false);
    }
}

// Register this function on the change event of the pwrsmt_projectstatus column (field)
