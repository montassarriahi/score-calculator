function verif(x, field) {
    if (!x || x <= 0 || x > 20) {
      alert(`la valeur de '` + field + `' est incorrect!`);
      return false;
    }
  }
  
  function bactc() {
    let moy = document.getElementById("mg").value;
    let mat = document.getElementById("math").value;
    let ph = document.getElementById("phys").value;
    let tec = document.getElementById("techn").value;
    let an = document.getElementById("ang").value;
    let fr = document.getElementById("fr").value;
  
    console.log(moy);
  
    // verification to mg
    let mg = parseFloat(moy);
    if (verif(mg, "Moyenne General") === false) {
      return false;
    }
  
    // verification note math
  
    let math = parseFloat(mat);
    if (verif(math, "Math") === false) {
      return false;
    }
  
    // verification note phys
  
    let phy = parseFloat(ph);
    if (verif(phy, "Physique") === false) {
      return false;
    }
  
    // verification note tech
  
    let tech = parseFloat(tec);
    if (verif(tech, "technique") === false) {
      return false;
    }
  
    // verification note anglais
  
    let ang = parseFloat(an);
    if (verif(ang, "anglais") === false) {
      return false;
    }
  
    // verification note francais
  
    let fran = parseFloat(fr);
    if (verif(fran, "francais") === false) {
      return false;
    }
    
    let fn = 4 * mg + fran + ang + phy + 1.5 * tech+ 1.5*math;
    document.getElementById("score_f").value = fn;
  
    return false;
  }
  
 ///////////////////////////////////////////////
  // bac math //

  function bacmath() {
    let moy = document.getElementById("mg").value;
    let mat = document.getElementById("math").value;
    let ph = document.getElementById("phys").value;
    let s = document.getElementById("svt").value;
    let an = document.getElementById("ang").value;
    let fr = document.getElementById("fr").value;
  
    console.log(moy);
  
    // verification to mg
    let mg = parseFloat(moy);
    if (verif(mg, "Moyenne General") === false) {
      return false;
    }
  
    // verification note math
  
    let math = parseFloat(mat);
    if (verif(math, "Math") === false) {
      return false;
    }
  
    // verification note phys
  
    let phy = parseFloat(ph);
    if (verif(phy, "Physique") === false) {
      return false;
    }
  
    // verification note Svt
  
    let svt = parseFloat(s);
    if (verif(svt, "Svt") === false) {
      return false;
    }
  
    // verification note anglais
  
    let ang = parseFloat(an);
    if (verif(ang, "anglais") === false) {
      return false;
    }
  
    // verification note francais
  
    let fran = parseFloat(fr);
    if (verif(fran, "francais") === false) {
      return false;
    }
    
    let fn = 4 * mg + fran + ang + 0.5*svt + 1.5*phy + 2*math;
    document.getElementById("score_f").value = fn;
  
    return false;
  }


  //////////////////////////////////////////////////////////////////:

  //Bac sc

  function bacsc() {
    let moy = document.getElementById("mg").value;
    let mat = document.getElementById("math").value;
    let ph = document.getElementById("phys").value;
    let s = document.getElementById("svt").value;
    let an = document.getElementById("ang").value;
    let fr = document.getElementById("fr").value;
  
    console.log(moy);
  
    // verification to mg
    let mg = parseFloat(moy);
    if (verif(mg, "Moyenne General") === false) {
      return false;
    }
  
    // verification note math
  
    let math = parseFloat(mat);
    if (verif(math, "Math") === false) {
      return false;
    }
  
    // verification note phys
  
    let phy = parseFloat(ph);
    if (verif(phy, "Physique") === false) {
      return false;
    }
  
    // verification note Svt
  
    let svt = parseFloat(s);
    if (verif(svt, "Svt") === false) {
      return false;
    }
  
    // verification note anglais
  
    let ang = parseFloat(an);
    if (verif(ang, "anglais") === false) {
      return false;
    }
  
    // verification note francais
  
    let fran = parseFloat(fr);
    if (verif(fran, "francais") === false) {
      return false;
    }
    
    let fn = 4 * mg + fran + ang + 1.5*svt + 1.5*phy + 1*math;
    document.getElementById("score_f").value = fn;
  
    return false;
  }