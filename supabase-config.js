// ============================================================
// Configuração do Supabase
// ============================================================
// Onde encontrar esses valores:
// Painel do Supabase > seu projeto > Project Settings > API
//
//   SUPABASE_URL      -> "Project URL"
//   SUPABASE_ANON_KEY -> "anon public" (em "Project API keys")
//
// A anon key é PÚBLICA por design (ela vai junto no código do site),
// a segurança fica por conta das políticas de RLS criadas no schema.sql.
// ============================================================

const SUPABASE_URL = "https://aeyafjsmtupfrawanscg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sb2hqdnFpbW9yY3FjcnNkc3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMTc4MjAsImV4cCI6MjEwMTU5MzgyMH0.SGDQL5OioOZPpBDHZnOeJ460AkFbxKNEpdZ20BKsdlU";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const BUCKET_FOTOS = "fotos-fechamento";
