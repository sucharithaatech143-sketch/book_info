

const express = require("express");
const cors = require("cors");

const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const supabaseUrl = "https://sqxvputlybozqvziugim.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeHZwdXRseWJvenF2eml1Z2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNTc3MDQsImV4cCI6MjA4MTYzMzcwNH0.Shwvzl0jHFB9MzwPq-0PvBhdIuQj9z3v3aiqsoc-02o";

const supabase = createClient(supabaseUrl, supabaseKey);


app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.post("/add-work", async (req, res) => {
  const { name,author,description } = req.body;

  // basic validation
  if (!name || !author||!description) {
    return res.status(400).json({ error: "Date and work are required" });
  }

  const { data, error } = await supabase
    .from("book_details")
    .insert([{ name,author,description}]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({
    message: "Work saved successfully",
    data
  });
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
