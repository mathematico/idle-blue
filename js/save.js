function fsave(n){
  if (infight == false && gamedone==false){
  savevar={

    //"var_version" : var_version,
    "lastUpdate":lastUpdate,
    "pposy":pposy,
    "pposx":pposx,
    "pcase" : pcase,
    "scrapamount" : scrapamount,
    "tcamount" : tcamount,
    "zone":zone,
    "gameMap":gameMap,
    "scraparmor":scraparmor,
    "Healprice":Healprice,
    "scraparmorprice":scraparmorprice,
    "Shieldmaxprice":Shieldmaxprice,
    "Shieldregenprice":Shieldregenprice,
    "scraparmorupgrade":scraparmorupgrade,
    "S_health":S_health,
    "S_healthmax":S_healthmax,
    "S_shield": S_shield,
    "S_shieldmax": S_shieldmax,
    "S_shieldregen": S_shieldregen,
    "S_damage": S_damage,
    "Phealth": Phealth,
    "Phealthprice" :Phealthprice,
    "Pshieldmaster":Pshieldmaster

  }
localStorage.setItem(n,JSON.stringify(savevar))}
}
function fload(n){
  savevar= JSON.parse(localStorage.getItem(n))
      lastUpdate=savevar.lastUpdate
      pposy=savevar.pposy
      pposx=savevar.pposx
      pcase=savevar.pcase
      scrapamount=savevar.scrapamount
      tcamount=savevar.tcamount
      zone=savevar.zone
      gameMap=savevar.gameMap
      scraparmor=savevar.scraparmor
      Healprice=savevar.Healprice
      scraparmorprice=savevar.Healprice
      Shieldmaxprice=savevar.Shieldmaxprice
      Shieldregenprice=savevar.Shieldregenprice
      scraparmorupgrade=savevar.scraparmorupgrade
      S_health=savevar.S_health
      S_healthmax=savevar.S_healthmax
      S_shield=savevar.S_shield
      S_shieldmax=savevar.S_shieldmax
      S_shieldregen=savevar.S_shieldregen
      S_damage=savevar.S_damage
      Phealth=savevar.Phealth
      Phealthprice=savevar.Phealthprice
      Pshieldmaster=savevar.Pshieldmaster
}
function fimport(){
  savevar= JSON.parse(document.getElementById("impexp").value)
  localStorage.setItem(5,JSON.stringify(savevar))
  fload(5)
}
function fexport(){
fsave(5)
document.getElementById("impexp").value=localStorage.getItem(5)
}
function resetsave(){
localStorage.removeItem(0)
location.reload()

}
