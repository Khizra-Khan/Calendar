import { DatePicker, Form, Input, Modal, TimePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.min.css";
import PropTypes from "prop-types";

function CollectionCreateEventForm({ visible, onCreate, onCancel, date }) {
  const [form] = Form.useForm();
  const dateFormat = "YYYY/MM/DD";
  return (
    <Modal
      visible={visible}
      title="Create a new Event"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
          date: moment(new Date(date)),
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
          <DatePicker format={dateFormat} disabled />
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
}

CollectionCreateEventForm.propTypes = {
  date: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default CollectionCreateEventForm;
