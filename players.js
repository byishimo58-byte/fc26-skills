// SAVE THIS AS players.js
const realStars = [
    { name: "Mbappé", rat: 91, pos: "ST", pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p244731.png" },
    { name: "Haaland", rat: 91, pos: "ST", pac: 88, sho: 94, pas: 66, dri: 80, def: 45, phy: 88, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png" },
    { name: "Rodri", rat: 91, pos: "CDM", pac: 66, sho: 80, pas: 86, dri: 84, def: 87, phy: 85, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p220566.png" },
    { name: "Bellingham", rat: 90, pos: "CAM", pac: 80, sho: 87, pas: 83, dri: 88, def: 78, phy: 82, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p460980.png" },
    { name: "Vini Jr", rat: 90, pos: "LW", pac: 95, sho: 82, pas: 81, dri: 90, def: 29, phy: 68, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p246333.png" },
    { name: "De Bruyne", rat: 90, pos: "CM", pac: 67, sho: 87, pas: 94, dri: 87, def: 65, phy: 78, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png" },
    { name: "Kane", rat: 90, pos: "ST", pac: 65, sho: 93, pas: 84, dri: 83, def: 49, phy: 82, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png" },
    { name: "Messi", rat: 88, pos: "RW", pac: 80, sho: 87, pas: 90, dri: 92, def: 33, phy: 64, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p129341.png" },
    { name: "Salah", rat: 89, pos: "RW", pac: 89, sho: 87, pas: 82, dri: 88, def: 45, phy: 75, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png" },
    { name: "Van Dijk", rat: 89, pos: "CB", pac: 78, sho: 60, pas: 71, dri: 72, def: 89, phy: 86, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png" },
    { name: "Fermín", rat: 86, pos: "CM", pac: 83, sho: 85, pas: 84, dri: 88, def: 70, phy: 65, img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p492651.png" }
];

// This loop creates the remaining 489 players to reach 500
const fullDatabase = [...realStars];
for (let i = fullDatabase.length + 1; i <= 500; i++) {
    fullDatabase.push({
        name: "Pro Player " + i,
        rat: Math.floor(Math.random() * 10) + 80,
        pos: "SUB",
        pac: 75, sho: 75, pas: 75, dri: 75, def: 75, phy: 75,
        img: "https://via.placeholder.com/200x200?text=Photo+" + i
    });
}
