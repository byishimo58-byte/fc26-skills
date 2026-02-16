document.getElementById("analyzeBtn").addEventListener("click", function(){
    const selectedProblems = Array.from(document.querySelectorAll("fieldset input[type=checkbox]"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const playstyle = document.getElementById("playstyle").value;

    const selectedArchetypes = Array.from(document.querySelectorAll("fieldset input[type=checkbox]"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const result = calculateTacticalSolution(selectedProblems, playstyle, selectedArchetypes);

    let html = "";

    const stats = [
        {label:"Depth", value:result.depth},
        {label:"Width", value:result.width},
        {label:"Build-up Speed", value:result.buildUpSpeed},
        {label:"Attack Width", value:result.attackWidth},
        {label:"Players in Box", value:result.playersInBox*20}
    ];

    stats.forEach(stat => {
        html += `
        <div class="stat-bar">
            <div class="stat-label">${stat.label}: ${stat.value}</div>
            <div class="bar-container">
                <div class="bar-fill" style="width:${stat.value}%;"></div>
            </div>
        </div>
        `;
    });

    const roles = [
        {label:"CDM Role", value:result.CDM},
        {label:"Fullback Role", value:result.fullback},
        {label:"CAM Role", value:result.CAM},
        {label:"Striker Role", value:result.striker}
    ];

    roles.forEach(r => {
        html += `<div class="stat-bar"><div class="stat-label">${r.label}: ${r.value}</div></div>`;
    });

    let explanation = "Tactical Analysis: ";
    if(selectedProblems.length){
        explanation += "Detected problems → " + selectedProblems.join(", ") + ". ";
    }
    if(selectedArchetypes.length){
        explanation += "Player types → " + selectedArchetypes.join(", ") + ". ";
    }
    explanation += `Recommended formation adjustments for ${playstyle} style applied.`;

    html += `<div class="explanation">${explanation}</div>`;

    document.getElementById("dashboard").innerHTML = html;
});
