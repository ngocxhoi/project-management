"use client";

import { getAllUser } from "@/lib/supabase/api/auth";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HeaderTitle } from "@/components/project/header/header-title";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Loading } from "@/components/loading";
import { useTranslation } from "react-i18next";

export default function UsersPage() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUser,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;
  if (error) throw error;

  return (
    <div className="p-8">
      <div className="py-6 lg:pb-4 lg:pt-8">
        <HeaderTitle name={t("page.users.title")} button={false} />
      </div>
      <Table className="border max-h-40">
        <TableCaption>{t("page.users.caption")}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              {t("page.users.table.1")}
            </TableHead>
            <TableHead>{t("page.users.table.2")}</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Cognitoid</TableHead>
            <TableHead>{t("page.users.table.3")}</TableHead>
            <TableHead className="text-right">Team ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.userid}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user?.userid}</TableCell>
              <TableCell>{user.cognitoid}</TableCell>
              <TableCell>
                <Avatar className="size-12 border">
                  <AvatarImage
                    src={user.profilepictureurl}
                    alt={user.username}
                  />
                  <AvatarFallback>
                    {user.username.charAt(0) + user.username.charAt(1)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="text-right">{user.teamid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
