import "server-only"

import { createClient } from "@/lib/supabase/server";

export async function getAll() {
  const supabase = createClient();
  return await supabase.from("restaurants").select();
}