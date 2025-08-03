// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};


console.log("Enabled Settings:");
Object.entries(settings).forEach(([key, value]) => {
  if (value === true) {
    console.log(key + ": true");
  }
});


const trueCount = Object.values(settings).filter(value => value === true).length;
console.log("Number of true settings:", trueCount);


const filteredEntries = Object.entries(settings).filter(([key, value]) => value === true);
console.log("Filtered Entries:", filteredEntries);


const enabledSettings = Object.fromEntries(filteredEntries);
console.log("Rebuilt Enabled Settings Object:", enabledSettings);
