// supabase.js
const SUPABASE_URL = "https://salhmnerbputhmqnkxbw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbGhtbmVyYnB1dGhtcW5reGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODE4NzksImV4cCI6MjA4NzQ1Nzg3OX0.8d98mO36LU0UEpli8hhu_y2JcJz_Oli5yL7IZ_Xhx7o";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
