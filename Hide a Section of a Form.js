// This only shows a section on a form if the created on date is not blank.

function hideNotesOnNewProject(executionContext) {
    var formContext = executionContext.getFormContext();
    var createdOnValue = formContext.getAttribute("createdon").getValue(); // replace created on with a value your wanting to monitor for changes.
    var isVisible = createdOnValue !== null;
    setSectionVisibility(formContext, "SECTION_NOTES", isVisible); // replace with the logical name of the section from the form you are wanting to hide
}

function setSectionVisibility(formContext, sectionName, isVisible) {
    var tabObj = formContext.ui.tabs.get("OVERVIEW_TAB"); // replace with the name of the form tab that your section to hide live on.
    if (tabObj) {
        var sectionObj = tabObj.sections.get(sectionName);
        if (sectionObj) {
            sectionObj.setVisible(isVisible);
        }
    }
}

// Register the event handler
function onFormLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Check SECTION_NOTES visibility on form load
    hideNotesOnNewProject(executionContext);
}
