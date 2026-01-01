const fs = require("fs");

if (process.env.SESSION_ID) {
  if (!fs.existsSync("./session.json")) {
    console.log("✅ Creating session.json from SESSION_ID");
    const buffer = Buffer.from(process.env.SESSION_ID, "base64");
    fs.writeFileSync("./session.json", buffer);
  } else {
    console.log("ℹ️ session.json already exists");
  }
} else {
  console.log("❌ SESSION_ID not found");
}
