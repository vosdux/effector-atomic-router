import { useUnit } from "effector-react";
import { $page, $posts, getPostsFx, pageChanged, searchChanged } from "./model";
import { Card, Flex, Input, Pagination, Space, Spin } from "antd";
import { Link } from "atomic-router-react";
import { routes } from "@shared/config/routes";
import { BaseLayout } from "@shared/components/BaseLayout";

export const PostsPage = () => {
  const [posts, postsPending, page] = useUnit([
    $posts,
    getPostsFx.pending,
    $page,
  ]);

  return (
    <BaseLayout>
      <Flex justify="center">
        <Space
          direction="vertical"
          style={{ paddingTop: "20px" }}
          styles={{ item: { width: "500px" } }}
        >
          <Input.Search onSearch={searchChanged} />
          {postsPending ? (
            <Flex justify="center">
              <Spin />
            </Flex>
          ) : (
            posts.map((item) => (
              <Card
                title={item.title}
                key={item.id}
                extra={
                  <Link
                    params={{ postId: item.id.toString() }}
                    to={routes.private.post}
                  >
                    Open
                  </Link>
                }
              >
                {item.body}
              </Card>
            ))
          )}
          <Pagination
            onChange={pageChanged}
            showSizeChanger={false}
            total={posts[0]?.total}
            current={page}
          />
        </Space>
      </Flex>
    </BaseLayout>
  );
};
