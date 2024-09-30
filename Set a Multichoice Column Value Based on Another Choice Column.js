function SelectSavingsTypeByProjectType(executionContext) {
    // Get the form context to interact with the form's controls and data
    const formContext = executionContext.getFormContext();
    
    // Retrieve the current value of the 'Project Type' field (logical name: pwrsmt_projecttype)
    const projectType = formContext.getAttribute("pwrsmt_projecttype").getValue();
    
    // Declare a variable to store the corresponding savings type based on project type
    let savingstype;
    
    // Determine the savings type based on the project type using a switch statement
    // Each case corresponds to a specific project type (represented by numeric values)
    switch (projectType) {
        case 937930000: // CAPEX Project Type
            savingstype = [937930001]; // Set Savings Type for CAPEX
            break;
        case 937930001: // Cost Adjustments Project Type
            savingstype = [937930012]; // Set Savings Type for Cost Adjustments
            break;
        case 937930003: // Rebates Project Type
            savingstype = [937930006]; // Set Savings Type for Rebates
            break;
        default:
            savingstype = []; // If no matching project type, set to an empty array or a default value
    }
    
    // Set the value of the 'Savings Type' field (logical name: pwrsmt_savingstype) based on the project type
    // The value is set as an array to accommodate fields that support multiple values
    formContext.getAttribute("pwrsmt_savingstype").setValue(savingstype);
}

// Register this function to the change event of the 'Project Type' field (pwrsmt_projecttype)
// This ensures the savings type is updated automatically when the project type changes
