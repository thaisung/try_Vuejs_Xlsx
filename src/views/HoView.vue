<template>
    <h1>COCOMO II Calculator</h1>
    <form>
      <label for="size">Software Size:</label>
      <input type="number" id="size" name="size"><br><br>

      <label for="sizing_method">Sizing Method:</label>
      <select id="sizing_method" name="sizing_method">
        <option value="SLOC">Source Lines of Code (SLOC)</option>
        <option value="FP">Function Points (FP)</option>
      </select><br><br>

      <label for="sloc">Source Lines of Code:</label>
      <input type="number" id="sloc" name="sloc"><br><br>

      <label for="design_modified">% Design Modified:</label>
      <input type="number" id="design_modified" name="design_modified"><br><br>

      <label for="code_modified">% Code Modified:</label>
      <input type="number" id="code_modified" name="code_modified"><br><br>

      <label for="integration_required">% Integration Required:</label>
      <input type="number" id="integration_required" name="integration_required"><br><br>

      <label for="assessment_assimilation">Assessment and Assimilation:</label>
      <input type="number" id="assessment_assimilation" name="assessment_assimilation"><br><br>

      <label for="software_understanding">Software Understanding:</label>
      <input type="number" id="software_understanding" name="software_understanding"><br><br>

      <label for="unfamiliarity">Unfamiliarity:</label>
      <select id="unfamiliarity" name="unfamiliarity">
        <option value="0">0</option>
        <option value="1">1</option>
      </select><br><br>

      <label for="new_reused_modified">New/Reused/Modified:</label>
      <select id="new_reused_modified" name="new_reused_modified">
        <option value="new">New</option>
        <option value="reused">Reused</option>
        <option value="modified">Modified</option>
      </select><br><br>

      <label for="precedentedness">Precedentedness:</label>
      <select id="precedentedness" name="precedentedness">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="development_flexibility">Development Flexibility:</label>
      <select id="development_flexibility" name="development_flexibility">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="required_reliability">Required Software Reliability:</label>
      <select id="required_reliability" name="required_reliability">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="database_size">Data Base Size:</label>
      <select id="database_size" name="database_size">
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="product_complexity">Product Complexity:</label>
      <select id="product_complexity" name="product_complexity">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="developed_for_reusability">Developed for Reusability:</label>
      <select id="developed_for_reusability" name="developed_for_reusability">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br><br>

      <label for="documentation_match">Documentation Match to Lifecycle Needs:</label>
      <select id="documentation_match" name="documentation_match">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="team_cohesion">Team Cohesion:</label>
      <select id="team_cohesion" name="team_cohesion">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="analyst_capability">Analyst Capability:</label>
      <select id="analyst_capability" name="analyst_capability">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="programmer_capability">Programmer Capability:</label>
      <select id="programmer_capability" name="programmer_capability">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="personnel_continuity">Personnel Continuity:</label>
      <select id="personnel_continuity" name="personnel_continuity">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="application_experience">Application Experience:</label>
      <select id="application_experience" name="application_experience">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="platform_experience">Platform Experience:</label>
      <select id="platform_experience" name="platform_experience">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="language_toolset_experience">Language and Toolset Experience:</label>
      <select id="language_toolset_experience" name="language_toolset_experience">
        <option value="very_low">Very Low</option>
        <option value="low">Low</option>
        <option value="nominal">Nominal</option>
        <option value="high">High</option>
        <option value="very_high">Very High</option>
      </select><br><br>

      <label for="process_maturity">Process Maturity:</label>
      <select id="process_maturity" name="process_maturity">
        <option value="level_1">Level 1 - Initial</option>
        <option value="level_2">Level 2 - Repeatable</option>
        <option value="level_3">Level 3 - Defined</option>
        <option value="level_4">Level 4 - Managed</option>
        <option value="level_5">Level 5 - Optimizing</option>
      </select><br><br>

      <label for="platform">Platform:</label>
      <select id="platform" name="platform">
		<option value="embedded">Embedded</option>
		<option value="PC">PC</option>
		<option value="mainframe">Mainframe</option>
		<option value="client_server">Client/Server</option>
		<option value="web">Web</option>
		</select><br><br><label for="time_constraint">Time Constraint:</label>
		<select id="time_constraint" name="time_constraint">
		  <option value="very_low">Very Low</option>
		  <option value="low">Low</option>
		  <option value="nominal">Nominal</option>
		  <option value="high">High</option>
		  <option value="very_high">Very High</option>
		</select><br><br>
	  
		<label for="storage_constraint">Storage Constraint:</label>
		<select id="storage_constraint" name="storage_constraint">
		  <option value="very_low">Very Low</option>
		  <option value="low">Low</option>
		  <option value="nominal">Nominal</option>
		  <option value="high">High</option>
		  <option value="very_high">Very High</option>
		</select><br><br>
	  
		<label for="platform_volatility">Platform Volatility:</label>
		<select id="platform_volatility" name="platform_volatility">
		  <option value="very_low">Very Low</option>
		  <option value="low">Low</option>
		  <option value="nominal">Nominal</option>
		  <option value="high">High</option>
		  <option value="very_high">Very High</option>
		</select><br><br>
	  
		<label for="use_of_software_tools">Use of Software Tools:</label>
		<select id="use_of_software_tools" name="use_of_software_tools">
		  <option value="very_low">Very Low</option>
		  <option value="low">Low</option>
		  <option value="nominal">Nominal</option>
		  <option value="high">High</option>
		  <option value="very_high">Very High</option>
		</select><br><br>
	  
		<label for="multisite_development">Multisite Development:</label>
		<select id="multisite_development" name="multisite_development">
		  <option value="no">No</option>
		  <option value="yes_some_issues">Yes, with some issues</option>
		  <option value="yes_major_issues">Yes, with major issues</option>
		  <option value="yes_seamless">Yes, seamless</option>
		</select><br><br>
	  
		<label for="required_development_schedule">Required Development Schedule:</label>
		<select id="required_development_schedule" name="required_development_schedule">
		  <option value="very_low">Very Low</option>
		  <option value="low">Low</option>
		  <option value="nominal">Nominal</option>
		  <option value="high">High</option>
		  <option value="very_high">Very High</option>
		</select><br><br>
	  
		<button type="button" onclick="calculateCocomo()">Calculate</button>
	  </form>
	  
	  <div id="result"></div>
	  
	  <!-- <script src="cocomo.js"></script> -->
</template>

<script>
    function calculateCocomo() {
	var size = parseInt(document.getElementById("size").value);
	var sizingMethod = document.getElementById("sizing_method").value;
	var sloc = parseInt(document.getElementById("sloc").value);
	var designModified= parseInt(document.getElementById("design_modified").value);
	var codeModified = parseInt(document.getElementById("code_modified").value);
	var integrationRequired = parseInt(document.getElementById("integration_required").value);
	var assessmentAssimilation = parseInt(document.getElementById("assessment_assimilation").value);
	var softwareUnderstanding = parseInt(document.getElementById("software_understanding").value);
	var unfamiliarity = parseInt(document.getElementById("unfamiliarity").value);
	var newReusedModified = document.getElementById("new_reused_modified").value;
	var unprecedentedness = document.getElementById("precedentedness").value;
	var developmentFlexibility = document.getElementById("development_flexibility").value;
	var requiredReliability = document.getElementById("required_reliability").value;
	var databaseSize = document.getElementById("database_size").value;
	var productComplexity = document.getElementById("product_complexity").value;
	var developedForReusability = document.getElementById("developed_for_reusability").value;
	var documentationMatch = document.getElementById("documentation_match").value;
	var teamCohesion = document.getElementById("team_cohesion").value;
	var analystCapability = document.getElementById("analyst_capability").value;
	var programmerCapability = document.getElementById("programmer_capability").value;
	var personnelContinuity = document.getElementById("personnel_continuity").value;
	var applicationExperience = document.getElementById("application_experience").value;
	var platformExperience = document.getElementById("platform_experience").value;
	var languageExperience = document.getElementById("language_experience").value;
	var useOfTools = document.getElementById("use_of_tools").value;
	var developmentEnvironment = document.getElementById("development_environment").value;
	var developmentSchedule = document.getElementById("development_schedule").value;
	var platform = document.getElementById("platform").value;
	var timeConstraint = document.getElementById("time_constraint").value;
	var storageConstraint = document.getElementById("storage_constraint").value;
	var platformVolatility = document.getElementById("platform_volatility").value;
	var useOfSoftwareTools = document.getElementById("use_of_software_tools").value;
	var multisiteDevelopment = document.getElementById("multisite_development").value;
	var requiredDevelopmentSchedule = document.getElementById("required_development_schedule").value;
	
	var effort = 0;
	var duration = 0;
	var staff = 0;
  
	// Effort calculation
	if (sizingMethod === "SLOC") {
	  var eaf = calculateEAF(designModified, codeModified, integrationRequired, assessmentAssimilation, softwareUnderstanding, unfamiliarity, newReusedModified, unprecedentedness, developmentFlexibility, requiredReliability, databaseSize, productComplexity, developedForReusability, documentationMatch, teamCohesion, analystCapability, programmerCapability, personnelContinuity, applicationExperience, platformExperience, languageExperience, useOfTools, developmentEnvironment, platform, timeConstraint, storageConstraint, platformVolatility, useOf_software_tools, multisiteDevelopment, requiredDevelopmentSchedule);
	  effort = 2.94 * Math.pow(sloc / 1000, 1.10) * eaf;
	} else if (sizingMethod === "FP") {
	  var fp = calculateFP(designModified, codeModified, integrationRequired, assessmentAssimilation, softwareUnderstanding, unfamiliarity, newReusedModified, unprecedentedness, developmentFlexibility, requiredReliability, databaseSize, productComplexity, developedForReusability, documentationMatch, teamCohesion, analystCapability, programmerCapability, personnelContinuity, applicationExperience, platformExperience, languageExperience, useOfTools, developmentEnvironment, platform, timeConstraint, storageConstraint, platformVolatility, useOf_software_tools, multisiteDevelopment, requiredDevelopmentSchedule);
	  effort = 3.0 * Math.pow(fp, 1.12) * eaf;
	}
  
	// Duration and staff calculation
	if (effort > 0) {
	  duration = 2.5 * Math.pow(effort, 0.32);
	  staff = effort / duration;
	}
  
	// Display result
	var resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "<p>Effort: " + effort.toFixed(2) + " person-months</p>" 
	  + "<p>Duration: " + duration.toFixed(2) + " months</p>" 
	  +"<p>Staff: " + staff.toFixed(2) + " persons</p>";
  }
  
  function calculateEAF(designModified, codeModified, integrationRequired, assessmentAssimilation, softwareUnderstanding, unfamiliarity, newReusedModified, unprecedentedness, developmentFlexibility, requiredReliability, databaseSize, productComplexity, developedForReusability, documentationMatch, teamCohesion, analystCapability, programmerCapability, personnelContinuity, applicationExperience, platformExperience, languageExperience, useOfTools, developmentEnvironment, platform, timeConstraint, storageConstraint, platformVolatility, useOf_software_tools, multisiteDevelopment, requiredDevelopmentSchedule) {
	
	var eaf = 1.0;
	// Design Modified
	if (designModified === 2) {
	  eaf *= 0.95;
	} else if (designModified === 3) {
	  eaf *= 0.87;
	} else if (designModified === 4) {
	  eaf *= 0.80;
	} else if (designModified === 5) {
	  eaf *= 0.67;
	}
  
	// Code Modified
	if (codeModified === 2) {eaf *= 0.94;
	} else if (codeModified === 3) {
	eaf *= 0.87;
	} else if (codeModified === 4) {
	eaf *= 0.80;
	} else if (codeModified === 5) {
	eaf *= 0.67;
	}
	
	// Integration Required
	if (integrationRequired === 2) {
	eaf *= 0.96;
	} else if (integrationRequired === 3) {
	eaf *= 0.83;
	} else if (integrationRequired === 4) {
	eaf *= 0.70;
	} else if (integrationRequired === 5) {
	eaf *= 0.50;
	}
	
	// Assessment and Assimilation
	if (assessmentAssimilation === 2) {
	eaf *= 0.85;
	} else if (assessmentAssimilation === 3) {
	eaf *= 0.88;
	} else if (assessmentAssimilation === 4) {
	eaf *= 0.92;
	} else if (assessmentAssimilation === 5) {
	eaf *= 1.00;
	}
	
	// Software Understanding
	if (softwareUnderstanding === 2) {
	eaf *= 0.87;
	} else if (softwareUnderstanding === 3) {
	eaf *= 0.94;
	} else if (softwareUnderstanding === 4) {
	eaf *= 1.00;
	} else if (softwareUnderstanding === 5) {
	eaf *= 1.46;
	}
	
	// Unfamiliarity with Software Tool
	if (unfamiliarity === 2) {
	eaf *= 1.00;
	} else if (unfamiliarity === 3) {
	eaf *= 1.15;
	} else if (unfamiliarity === 4) {
	eaf *= 1.30;
	} else if (unfamiliarity === 5) {
	eaf *= 1.66;
	}
	
	// New, Reused, or Modified Software
	if (newReusedModified === "new") {
	eaf *= 1.00;
	} else if (newReusedModified === "reused") {
	eaf *= 0.90;
	} else if (newReusedModified === "modified") {
	eaf *= 0.85;
	}
	
	// Unprecedentedness
	if (unprecedentedness === "very_low") {
	eaf *= 1.22;
	} else if (unprecedentedness === "low") {
	eaf *= 1.10;
	} else if (unprecedentedness === "nominal") {
	eaf *= 1.00;
	} else if (unprecedentedness === "high") {
	eaf *= 0.88;
	} else if (unprecedentedness === "very_high") {
	eaf *= 0.81;
	}
	
	// Development Flexibility
	if (developmentFlexibility === "very_high") {
	eaf *= 1.60;
	} else if (developmentFlexibility === "high") {
	eaf *= 1.30;
	} else if (developmentFlexibility === "nominal") {
	eaf *= 1.00;
	} else if (developmentFlexibility === "low") {
	eaf *= 0.87;
	} else if (developmentFlexibility === "very_low") {
	eaf *= 0.71;
	}
	
	// Required Reliability
	if (requiredReliability === "very_low") {
	eaf *= 0.82;
	} else if (requiredReliability === "low") {
	eaf *= 0.92;
	} else if (requiredReliability === "nominal") {
	eaf *= 1.00;
	} else if (requiredReliability === "high") {
	eaf *= 1.10;
	} else if (requiredReliability === "very_high") {
	eaf *= 1.26;
	}
	
	// Database Size
	if (databaseSize === "nominal") {
	eaf *= 1.00;
	} else if (databaseSize === "low") {
	eaf *= 0.90;
	} else if (databaseSize === "high") {
	eaf *= 1.14;
	} else if (databaseSize === "very_high") {
	eaf *= 1.28;
	}
	
	// Product Complexity
	if (productComplexity === "very_low") {
	eaf *= 0.73;
	} else if (productComplexity === "low") {
	eaf *= 0.87;
	} else if (productComplexity === "nominal") {
	eaf *= 1.00;
	} else if (productComplexity === "high") {
	eaf *= 1.17;
	} else if (productComplexity === "very_high") {
	eaf *= 1.34;
	}
	
	// Developed for Reusability
	if (developedForReusability === "no") {
	eaf *= 1.00;
	} else if (developedForReusability === "yes_some_aspects") {
	eaf *= 1.05;
	} else if (developedForReusability === "yes_majority_aspects") {
	eaf *= 1.17;
	} else if (developedForReusability=== "yes_all_aspects") {
	eaf *= 1.46;
	}
	
	// Documentation Match to Life-Cycle Needs
	if (documentationMatch === "very_low") {
	eaf *= 0.81;
	} else if (documentationMatch === "low") {
	eaf *= 0.91;
	} else if (documentationMatch === "nominal") {
	eaf *= 1.00;
	} else if (documentationMatch === "high") {
	eaf *= 1.11;
	} else if (documentationMatch === "very_high") {
	eaf *= 1.23;
	}
	
	// Execution Time Constraint
	if (executionTimeConstraint === "nominal") {
	eaf *= 1.00;
	} else if (executionTimeConstraint === "high") {
	eaf *= 1.11;
	} else if (executionTimeConstraint === "very_high") {
	eaf *= 1.29;
	}
	
	// Main Storage Constraint
	if (mainStorageConstraint === "nominal") {
	eaf *= 1.00;
	} else if (mainStorageConstraint === "high") {
	eaf *= 1.06;
	} else if (mainStorageConstraint === "very_high") {
	eaf *= 1.21;
	}
	
	// Platform Volatility
	if (platformVolatility === "very_low") {
	eaf *= 0.87;
	} else if (platformVolatility === "low") {
	eaf *= 0.94;
	} else if (platformVolatility === "nominal") {
	eaf *= 1.00;
	} else if (platformVolatility === "high") {
	eaf *= 1.06;
	} else if (platformVolatility === "very_high") {
	eaf *= 1.21;
	}
	
	// Analyst Capability
	if (analystCapability === "very_low") {
	eaf *= 1.46;
	} else if (analystCapability === "low") {
	eaf *= 1.19;
	} else if (analystCapability === "nominal") {
	eaf *= 1.00;
	} else if (analystCapability === "high") {
	eaf *= 0.86;
	} else if (analystCapability === "very_high") {
	eaf *= 0.71;
	}
	
	// Programmer Capability
	if (programmerCapability === "very_low") {
	eaf *= 1.34;
	} else if (programmerCapability === "low") {
	eaf *= 1.15;
	} else if (programmerCapability === "nominal") {
	eaf *= 1.00;
	} else if (programmerCapability === "high") {
	eaf *= 0.88;
	} else if (programmerCapability === "very_high") {
	eaf *= 0.76;
	}
	
	// Personnel Continuity
	if (personnelContinuity === "very_low") {
	eaf *= 1.29;
	} else if (personnelContinuity === "low") {
	eaf *= 1.12;
	} else if (personnelContinuity === "nominal") {
	eaf *= 1.00;
	} else if (personnelContinuity === "high") {
	eaf *= 0.90;
	} else if (personnelContinuity === "very_high") {
	eaf *= 0.81;
	}
	
	// Applications Experience
	if (applicationsExperience === "very_low") {
	eaf *= 1.22;
	} else if (applicationsExperience === "low") {
	eaf *= 1.10;
	} else if (applicationsExperience === "nominal") {
	eaf *= 1.00;
	} else if (applicationsExperience === "high") {
	eaf *= 0.90;
	} else if (applicationsExperience === "very_high") {
	eaf *= 0.81;
	}
	
	// Platform Experience
	if (platformExperience === "very_low") {
	eaf *= 1.22;
	} else if (platformExperience === "low") {
	eaf *= 1.10;
	} else if (platformExperience === "nominal") {
	eaf *= 1.00;
	} else if (platformExperience === "high") {
	eaf *= 0.90;
	} else if (platformExperience === "very_high") {
	eaf *= 0.81;
	}
	
	// Language and Toolset Experience
	if (languageToolsetExperience === "very_low") {
	eaf *= 1.22;
	} else if (languageToolsetExperience === "low") {
	eaf *= 1.10;
	} else if (languageToolsetExperience === "nominal") {
	eaf *= 1.00;
	} else if (languageToolsetExperience === "high") {
	eaf *= 0.90;
	} else if (languageToolsetExperience === "very_high") {
	eaf *= 0.81;
	}
	
	// Use of Software Tools
	if (useOfSoftwareTools === "very_low") {
	eaf *= 1.17;
	} else if(useOfSoftwareTools === "low") {
	eaf *= 1.09;
	} else if (useOfSoftwareTools === "nominal") {
	eaf *= 1.00;
	} else if (useOfSoftwareTools === "high") {
	eaf *= 0.91;
	} else if (useOfSoftwareTools === "very_high") {
	eaf *= 0.84;
	}
	
	// Multisite Development
	if (multisiteDevelopment === "no") {
	eaf *= 1.00;
	} else if (multisiteDevelopment === "yes_some_aspects") {
	eaf *= 1.09;
	} else if (multisiteDevelopment === "yes_majority_aspects") {
	eaf *= 1.20;
	} else if (multisiteDevelopment === "yes_all_aspects") {
	eaf *= 1.43;
	}
	
	// Required Development Schedule
	if (requiredDevelopmentSchedule === "very_low") {
	eaf *= 1.43;
	} else if (requiredDevelopmentSchedule === "low") {
	eaf *= 1.14;
	} else if (requiredDevelopmentSchedule === "nominal") {
	eaf *= 1.00;
	} else if (requiredDevelopmentSchedule === "high") {
	eaf *= 1.00;
	} else if (requiredDevelopmentSchedule === "very_high") {
	eaf *= 1.00;
	}
	
	// Total Lines of Code
	if (totalLinesOfCode === "very_low") {
	eaf *= 1.34;
	} else if (totalLinesOfCode === "low") {
	eaf *= 1.15;
	} else if (totalLinesOfCode === "nominal") {
	eaf *= 1.00;
	} else if (totalLinesOfCode === "high") {
	eaf *= 0.88;
	} else if (totalLinesOfCode === "very_high") {
	eaf *= 0.76;
	}
	
	// Required Turnabout Time
	if (requiredTurnaboutTime === "very_low") {
	eaf *= 1.43;
	} else if (requiredTurnaboutTime === "low") {
	eaf *= 1.14;
	} else if (requiredTurnaboutTime === "nominal") {
	eaf *= 1.00;
	} else if (requiredTurnaboutTime === "high") {
	eaf *= 1.00;
	} else if (requiredTurnaboutTime === "very_high") {
	eaf *= 1.00;
	}
	
	// Personnel Capability
	if (personnelCapability === "very_low") {
	eaf *= 1.34;
	} else if (personnelCapability === "low") {
	eaf *= 1.15;
	} else if (personnelCapability === "nominal") {
	eaf *= 1.00;
	} else if (personnelCapability === "high") {
	eaf *= 0.88;
	} else if (personnelCapability === "very_high") {
	eaf *= 0.76;
	}
	
	// Programming Language Experience
	if (programmingLanguageExperience === "very_low") {
	eaf *= 1.22;
	} else if (programmingLanguageExperience === "low") {
	eaf *= 1.10;
	} else if (programmingLanguageExperience === "nominal") {
	eaf *= 1.00;
	} else if (programmingLanguageExperience === "high") {
	eaf *= 0.90;
	} else if (programmingLanguageExperience === "very_high") {
	eaf *= 0.81;
	}
	
	// Use of Software Tools Experience
	if (useOfSoftwareToolsExperience === "very_low") {
	eaf *= 1.22;
	} else if (useOfSoftwareToolsExperience === "low") {
	eaf *= 1.10;
	} else if (useOfSoftwareToolsExperience === "nominal") {
	eaf *= 1.00;
	} else if (useOfSoftwareToolsExperience === "high"){
	eaf *= 0.90;
	} else if (useOfSoftwareToolsExperience === "very_high") {
	eaf *= 0.81;
	}
	
	// Overall EAF value should be within the range of 0.9 to 1.4
	if (eaf < 0.9) {
		eaf = 0.9;
	} else if (eaf > 1.4) {
		eaf = 1.4;
	}
	return eaf;
}
</script>

<style>
    h1 {
    margin-top: 20px;
    text-align: center;
  }
  
  form {
    margin: 20px auto;
    width: 80%;
    max-width: 800px;
  }
  
  label, select, input[type="number"] {
    display: block;
    margin-bottom: 10px;
  }
  
  button {
    margin-top: 10px;
  }
  
  #result {
    margin-top: 20px;
    text-align: center;
  }
</style>