# JavaScripts

A collection of JavaScript web resources for Dynamics 365 Model-Driven App form customisation — controlling field visibility, business requirements, locking sections, and managing lookups.

## Usage

Upload each .js file as a web resource in your solution, then register the relevant function on the appropriate form event (OnLoad, OnChange, etc.).

## Prerequisites

- Access to a Dynamics 365 or Power Apps model-driven app
- Permission to create and manage web resources in your solution

## Scripts

| Script | Trigger | Description |
|--------|---------|-------------|
| Clear Lookups When Value Changed.js | OnChange | Clears related lookup fields when a specified field value changes |
| Hide Form Tabs On Load.js | OnLoad | Hides one or more form tabs when the form loads based on conditions |
| Hide a Section of a Form.js | OnLoad / OnChange | Shows or hides a form section based on field conditions |
| Lock Section Based On A Text Field.js | OnLoad / OnChange | Sets all fields in a section to read-only based on a text field value |
| Multi Section Show Hide Based on Text Value.js | OnLoad / OnChange | Shows or hides multiple sections depending on a text field value |
| Refresh & Save Form.js | OnChange / OnSave | Saves and then refreshes the form to reflect updated data |
| Save & Refresh if From has Changes.js | OnChange | Saves and refreshes the form only if unsaved changes are detected |
| Save Form Based on Text Value.js | OnChange | Automatically saves the form when a text field matches a specified value |
| Set Column Read Only Based on Text Field.js | OnLoad / OnChange | Makes a specific column read-only depending on the value of a text field |
| Set Field Business Requirement Based on Another Column.js | OnLoad / OnChange | Dynamically changes a field's business requirement level based on another field |
| Set a Multichoice Column Value Based on Another Choice Column.js | OnChange | Populates a multi-select choice column based on the value of another choice column |