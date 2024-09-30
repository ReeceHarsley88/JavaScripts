function ProjectTypeChangeTabHide(executionContext) {
    // Get the form context to interact with the form's controls and data
    var formContext = executionContext.getFormContext();
    
    // Retrieve the current value of the 'Project Type' field (logical name: pwrsmt_projecttype)
    var projectTypeValue = formContext.getAttribute("pwrsmt_projecttype").getValue();

    // Hide all sections by default to ensure the correct one is displayed later
    setSectionVisibility(formContext, "TAB_CAPEX", false);              // CAPEX Tab
    setSectionVisibility(formContext, "TAB_Cost_Adjustments", false);   // Cost Adjustments Tab
    setSectionVisibility(formContext, "TAB_Rebates", false);            // Rebates Tab
    setSectionVisibility(formContext, "TAB_Standard_Savings", false);   // Standard Savings Tab

    // Show the appropriate section based on the project type value
    // Each case corresponds to a different project type (represented by numeric values as its a choice column)
    switch (projectTypeValue) {
        case 937930000: // CAPEX Project Type
            setSectionVisibility(formContext, "TAB_CAPEX", true);
            break;
        case 937930001: // Cost Adjustments Project Type
            setSectionVisibility(formContext, "TAB_Cost_Adjustments", true);
            break;
        case 937930003: // Rebates Project Type
            setSectionVisibility(formContext, "TAB_Rebates", true);
            break;
        case 937930002: // Standard Savings Project Type
            setSectionVisibility(formContext, "TAB_Standard_Savings", true);
            break;
    }
}

function setSectionVisibility(formContext, sectionName, isVisible) {
    // Retrieve the "OVERVIEW_TAB" tab where sections are located
    var tabObj = formContext.ui.tabs.get("OVERVIEW_TAB");
    
    if (tabObj) {
        // Retrieve the section within the tab and set its visibility
        var sectionObj = tabObj.sections.get(sectionName);
        if (sectionObj) {
            sectionObj.setVisible(isVisible); // Make section visible or hidden based on isVisible
        }
    }
}

// Register the event handler to listen for changes to the 'Project Type' field
function onFormLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Add an onChange event listener to the 'Project Type' field
    formContext.getAttribute("pwrsmt_projecttype").addOnChange(handleProjectTypeChange);
    
    // Call the function once during form load to set the initial tab visibility
    handleProjectTypeChange(executionContext);
}
