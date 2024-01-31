import { routes } from "@shared/config/routes";
import { Button, Card, Form, Input, Row } from "antd";
import { Link } from "atomic-router-react";
import { signUpFx } from "./model";
import { useUnit } from "effector-react";

export const SignUp = () => {
  const [signUpPending] = useUnit([signUpFx.pending]);

  return (
    <Row justify="center">
      <Card
        extra={<Link to={routes.auth.signIn}>Already have account?</Link>}
        title="Sign Up"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={signUpFx}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={signUpPending}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
