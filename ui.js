document.getElementById("analyzeBtn").addEventListener("click", function(){
    const formation = document.getElementById("formation").value;

    const selectedProblems = Array.from(document.querySelectorAll("input[type=checkbox][value^='conceding_counters'], input[type=checkbox][value^='midfield_overrun'], input[type=checkbox][value^='cant_break_low_block'], input[type=checkbox][value^='strikers_isolated'], input[type=checkbox][value^='fullbacks_exposed'], input[type=checkbox][value^='defense_too_deep'], input[type=checkbox][value^='slow_buildup'], input[type=checkbox][value^='not_enough_chances']"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const playstyle = document.getElementById("playstyle").value;

    const selectedArchetypes = Array.from(document.querySelectorAll("input[type=checkbox][value^='pace_attackers'], input[type=checkbox][value^='technical_midfielders'], input[type=checkbox][value^='physical_defenders'], input[type=checkbox][value^='target_man_striker'], input[type=checkbox][value^='creative_playmaker']"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const result = calculateTacticalSolution(selectedProblems, playstyle, selectedArchetypes);

    // Display results
    let html = "<h2>Tactical Dashboard</h2>";
    html += `<p><strong>Depth:</strong> ${result.depth}</p>`;
    html += `<p><strong>Width:</strong> ${result.width}</p>`;
    html += `<p><strong>Build-up Speed:</strong> ${result.buildUpSpeed}</p>`;
    html += `<p><strong>Attack Width:</strong> ${result.attackWidth}</p>`;
    html += `<p><strong>Players in Box:</strong> ${result.playersInBox}</p>`;
    html += `<p><strong>CDM Role:</strong> ${result.CDM}</p>`;
    html += `<p><strong>Fullback Role:</strong> ${result.fullback}</p>`;
    html += `<p><strong>CAM Role:</strong> ${result.CAM}</p>`;
    html += `<p><strong>Striker Role:</strong> ${result.striker}</p>`;

    document.getElementById("dashboard").innerHTML = html;
});
