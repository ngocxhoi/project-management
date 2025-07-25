"use client";

import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useStateUser } from "@/store/state";
import { usePathname, useRouter } from "next/navigation";
import { deleteProject } from "@/lib/supabase/api/projects";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

type HeaderTitleProps = {
  name: string;
  isSmallText?: boolean;
  button: boolean;
};

const HeaderTitle = ({ name, isSmallText, button }: HeaderTitleProps) => {
  const pathname = usePathname();
  const { isOwner } = useStateUser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { t } = useTranslation();

  const handleDeleteProject = async (projectid: number) => {
    await deleteProject(projectid);
    queryClient.invalidateQueries({ queryKey: ["projects"] });
    toast("Success", { description: "Project deleted" });
    router.push("/dashboard");
  };

  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={`${isSmallText} ? 'text-lg' : 'text-2xl' text-xl font-bold dark:text-white`}
      >
        {name}
      </h1>
      {button && (
        <Button
          disabled={!isOwner}
          variant={"destructive"}
          onClick={() => handleDeleteProject(Number(pathname.split("/")[2]))}
          className="ml-full"
        >
          <LogOut size={20} /> {t("page.project.delete_button")}
        </Button>
      )}
    </div>
  );
};

export { HeaderTitle };
