function hideTabsOnLoad(executionContext) {
// used to hide the savings and team member tab based on multiple criteria/

 var formContext = executionContext.getFormContext();

    // Hide/Show Savings Tab, in this example if the Project name is not null show the sabings tab, otherwise hide it.
    var fieldValueSavings = formContext.getAttribute("pwrsmt_projectname").getValue(); // Replace with the logical name of the coulmn you are monitoring for changes.
    var savingsTab = formContext.ui.tabs.get("SAVINGS_TAB"); // Replace with the Tab you wish to hide/show
    if (fieldValueSavings !== null) {
        savingsTab.setVisible(true);
    } else {
        savingsTab.setVisible(false);
    }

    // Hide/Show Team Tab, in this example if the Project type equals a particular value (remember single and multi chocie columns have value as well as display text), in this instance we are using the value number, show the team tab otherwise hide it.
    var fieldValueProjectType = formContext.getAttribute("pwrsmt_projecttype").getValue(); // replace with the column you want to montitor for changes
    var teamTab = formContext.ui.tabs.get("TEAM_TAB");
    if (fieldValueProjectType === 937930002) { // change the value to the value you want to look for.
        teamTab.setVisible(true);
    } else {
        teamTab.setVisible(false);
    }

// Hide/Show Documents Tab
    var fieldValueTotalImpact = formContext.getAttribute("pwrsmt_totalimpact").getValue(); // replace with the column you want to montitor for changes
    var teamTab = formContext.ui.tabs.get("TAB_DOCUMENTS"); // replace with the tab you wish to hide.
    if (fieldValueTotalImpact !== null) {
        teamTab.setVisible(true);
    } else {
        teamTab.setVisible(false);
    }
   
}
