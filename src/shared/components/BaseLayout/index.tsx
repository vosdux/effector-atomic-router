import { Layout } from "antd";
import { PropsWithChildren } from "react";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Layout.Content style={{ minHeight: "100vh" }}>{children}</Layout.Content>
    </Layout>
  );
};
