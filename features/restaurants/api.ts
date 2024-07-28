import { createClient } from "@/lib/supabase/server";
import "server-only"

export async function getAll() {
  const supabase = createClient();
  return await supabase.from("restaurants").select();
}