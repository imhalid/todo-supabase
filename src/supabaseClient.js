import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vkmublfxxxfuktlzfhzu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbXVibGZ4eHhmdWt0bHpmaHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzMzUzNTEsImV4cCI6MTk4NDkxMTM1MX0.TtJUI2-W8mUu_81-Tk0lMhjFzTwRZxVFdwkCdl-kqQ4";

console.log(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
