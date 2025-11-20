import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tryzohxgsqqpbsutpeyd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyeXpvaHhnc3FxcGJzdXRwZXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MjYxMTksImV4cCI6MjA3OTIwMjExOX0.cJ31OKNwuUsYKIiOgqw-J-1z8lfqSdQczUcfrw-lbeo';

export const supabase = createClient(supabaseUrl, supabaseKey);
