import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

type tParams = Promise<{ callbackUrl: string }>;

export default async function SignIn(props: { searchParams: tParams }) {
  const { callbackUrl } = await props.searchParams;

  return (
    <EmptyFilter
      title="You need to be logged in to do that"
      subtitle="Please click below to login"
      showLogin
      callbackUrl={callbackUrl}
    />
  );
}
