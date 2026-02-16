// Base tactical sliders
let sliders = {
  depth: 55,
  width: 50,
  buildUpSpeed: 60,
  attackWidth: 50,
  playersInBox: 3,
  CDM: "Balanced",
  fullback: "Balanced",
  CAM: "Stay Central",
  striker: "Poacher"
};

// Problem adjustments
const problemAdjustments = {
  conceding_counters: {depth:-10,width:-5,CDM:"Stay Back",fullback:"Balanced"},
  midfield_overrun: {depth:-5,width:-5,CDM:"Balanced"},
  cant_break_low_block: {depth:5,width:10,fullback:"Overlap",CAM:"Free Roam"},
  strikers_isolated: {attackWidth:-5,playersInBox:-1,striker:"Complete Forward"},
  fullbacks_exposed: {width:-10,fullback:"Stay Back"},
  defense_too_deep: {depth:-5},
  slow_buildup: {buildUpSpeed:-10},
  not_enough_chances: {playersInBox:+1,CAM:"Free Roam"}
};

// Archetype modifiers
const archetypeModifiers = {
  pace_attackers:{buildUpSpeed:+5},
  technical_midfielders:{CAM:"Free Roam"},
  physical_defenders:{width:-3},
  target_man_striker:{striker:"Target Man"},
  creative_playmaker:{CAM:"Free Roam"}
};

// Playstyle adjustments
const playstyleAdjustments = {
  possession:{depth:-5,buildUpSpeed:-5},
  counter_attack:{playersInBox:-1,buildUpSpeed:+5},
  high_press:{depth:+5,width:+5},
  balanced:{} 
};

// Calculation function
function calculateTacticalSolution(selectedProblems, selectedPlaystyle, selectedArchetypes){
  let finalSliders = {...sliders};

  selectedProblems.forEach(p => {
    const adj = problemAdjustments[p];
    for(let key in adj){
      if(typeof adj[key] === "number") finalSliders[key] += adj[key];
      else finalSliders[key] = adj[key];
    }
  });

  selectedArchetypes.forEach(a => {
    const mod = archetypeModifiers[a];
    for(let key in mod){
      if(typeof mod[key] === "number") finalSliders[key] += mod[key];
      else finalSliders[key] = mod[key];
    }
  });

  const style = playstyleAdjustments[selectedPlaystyle];
  for(let key in style){
    if(typeof style[key] === "number") finalSliders[key] += style[key];
    else finalSliders[key] = style[key];
  }

  ["depth","width","buildUpSpeed","attackWidth"].forEach(k => {
    if(finalSliders[k] < 0) finalSliders[k]=0;
    if(finalSliders[k] > 100) finalSliders[k]=100;
  });

  if(finalSliders.playersInBox < 0) finalSliders.playersInBox=0;
  if(finalSliders.playersInBox > 5) finalSliders.playersInBox=5;

  return finalSliders;
}
