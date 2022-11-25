import { createClient } from "@supabase/supabase-js";
import { text } from "stream/consumers";

// !! Need .env.local file with SUPABASE_URL and SUPABASE_KEY
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
