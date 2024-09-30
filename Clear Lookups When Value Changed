// Levels 1,2,3 & 4 are cascading lookups starting with 1 at the top level, if a user has selected a level 1, 2 and 3 then clears the level 2, it will also clear the level 3. 
// This helps prevent an erorr where somone could select lookups that are not related.

function clearPwrsmtLevels(changedField, formContext) {
    const fieldsToCheck = ['pwrsmt_level1', 'pwrsmt_level2', 'pwrsmt_level3']; // Logical names of the columns (fields) you want to monitor for changes
    const allFields = ['pwrsmt_level1', 'pwrsmt_level2', 'pwrsmt_level3', 'pwrsmt_level4']; // List all the fields that are part of the set of filtered lookups
    
    const changedFieldIndex = fieldsToCheck.indexOf(changedField);
    
    if (changedFieldIndex !== -1) {
        // Clear all fields after the changed field
        for (let i = changedFieldIndex + 1; i < allFields.length; i++) {
            const field = formContext.getAttribute(allFields[i]);
            if (field) {
                field.setValue(null);
            }
        }
    }
}

// Implementation
function addPwrsmtLevelHandlers() {
    // Add OnChange event handler for pwrsmt_level1
    Xrm.Page.getAttribute("pwrsmt_level1").addOnChange(function() { 
        clearPwrsmtLevels("pwrsmt_level1", Xrm.Page); 
    });

    // Add OnChange event handler for pwrsmt_level2
    Xrm.Page.getAttribute("pwrsmt_level2").addOnChange(function() { 
        clearPwrsmtLevels("pwrsmt_level2", Xrm.Page); 
    });

    // Add OnChange event handler for pwrsmt_level3
    Xrm.Page.getAttribute("pwrsmt_level3").addOnChange(function() { 
        clearPwrsmtLevels("pwrsmt_level3", Xrm.Page); 
    });
}

// Call this function when the form loads
addPwrsmtLevelHandlers();
