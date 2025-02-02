import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ckwcezaumxeiaghdilwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrd2NlemF1bXhlaWFnaGRpbHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNzE4MjMsImV4cCI6MjA1Mzg0NzgyM30.LNe9EDentNUzUxGnkKfdEtViYVu4NNSi8u7-espPO_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
