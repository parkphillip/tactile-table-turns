
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wgksvqcifcaztijiuhky.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indna3N2cWNpZmNhenRpaml1aGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMzU4NzcsImV4cCI6MjA2NTYxMTg3N30.7VeTRkcFQlMDbuhhxlnz6cSrnHTKPADJjsCddrjLqtY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
