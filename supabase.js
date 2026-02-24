// supabase.js
const SUPABASE_URL = "PASTE_TVOJ_PROJECT_URL";
const SUPABASE_ANON_KEY = "PASTE_TVOJ_ANON_KEY";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
