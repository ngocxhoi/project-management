import { Project } from "@/store/type";
import { createClient } from "../client";
import { useStateUser } from "@/store/state";

export const getAllProjects = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("project").select();
  if (data) return data as Project[];
};
