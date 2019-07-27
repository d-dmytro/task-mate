import React, { useState } from 'react';

interface FormState {
  id: number;
  title: string;
}

interface Props {
  initialInput: FormState;
}

const UpdateTaskForm: React.FunctionComponent<Props> = ({ initialInput }) => {
  const [formState, setFormState] = useState<FormState>(initialInput);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormState({
      ...formState,
      title: value
    });
  };
  return (
    <form>
      <div className="formField">
        <label>Title</label>
        <div>
          <input
            type="text"
            name="title"
            className="textInput"
            value={formState.title}
            onChange={onChange}
          />
        </div>
      </div>
      <button type="submit">Save</button>
      <style jsx>{`
        .formField {
          margin: 0 0 20px;
        }
        .textInput {
          border: 1px solid #dde5ff;
          border-radius: 4px;
          color: #5d647b;
          outline: 0;
          font-size: 18px;
          padding: 14px;
          width: 100%;
        }
        label {
          display: block;
          margin: 0 0 5px;
        }
        button {
          border: 2px solid #7694f5;
          border-radius: 4px;
          color: #7694f5;
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          font-size: 16px;
          outline: 0;
          padding: 12px 24px;
        }
        button:hover {
          background: #7694f5;
          color: white;
        }
      `}</style>
    </form>
  );
};

export default UpdateTaskForm;
