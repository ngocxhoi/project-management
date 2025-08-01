"use client";

import { HeaderTitle } from "@/components/project/header/header-title";
import { ListView } from "@/components/project/view/list/list-view";
import { useStateAllTask } from "@/store/state";
import { useTranslation } from "react-i18next";

export default function UrgentPage() {
  const { tasks } = useStateAllTask();
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <div className="py-6 lg:pb-4 lg:pt-8">
        <div className="flex items-center">
          <HeaderTitle name={t("page.priority.high")} button={false} />
        </div>
      </div>

      <ListView
        tasks={tasks?.filter((task) => task.priority == "High") ?? []}
      />
    </div>
  );
}
