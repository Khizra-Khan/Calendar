import React from "react";
import "antd/dist/antd.min.css";
import { Form, Input, Modal, TimePicker } from "antd";

const CollectionCreateEventForm = ({ visible, onCreate, onCancel, date }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new Event"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
          date: date,
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of event!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="date" label="Date">
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="startTime"
          label="Start-Time"
          rules={[
            {
              required: true,
              message: "Please select the starting time of event!",
            },
          ]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="endTime"
          label="End-Time"
          rules={[
            {
              required: true,
              message: "Please select the ending time of event!",
            },
          ]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateEventForm;
