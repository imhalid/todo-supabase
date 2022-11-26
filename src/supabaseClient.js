import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.REACT_APP_SUPABASE_TABLE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_PRIVATE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
