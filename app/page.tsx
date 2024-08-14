"use client";

import { useForm } from "react-hook-form";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Select";
import {
  Button,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Input,
  Label,
  ObjectPage,
  Option,
  Select,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";

// Try to use the exact versions you are using in your project.
// Try to make it as close as possible with your example (passing the data from props, passing the "submit" function to another component, etc.)

const formFields = [
  { name: "firstName", label: "First Name", required: false },
  {
    name: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    name: "selection",
    label: "Select Option",
    required: true,
    options: [
      { value: undefined, label: "" },
      { value: "foo1", label: "Foo 1" },
      { value: "foo2", label: "Foo 2", selected: true },
      { value: "foo3", label: "Foo 3" },
    ],
  },
];

export default function Page() {
  const [state, setState] = useState<{ name: string; defaultValue: string }[]>(
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState([
        { name: "firstName", defaultValue: "" },
        {
          name: "lastName",
          defaultValue: "Josh",
        },
        {
          name: "selection",
          defaultValue: "foo2",
        },
      ]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    shouldFocusError: false,
  });

  const onSubmit = () => {
    handleSubmit(submitAction)();
  };

  const submitAction = () => {
    alert("Submit with no validation errors");
  };

  return (
    <ObjectPage
      headerContent={<>Form</>}
      footer={<Button onClick={onSubmit}>Submit</Button>}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {formFields.map((field) => {
          const defaultValue =
            state && state.length > 0
              ? state.find((item) => item.name === field.name)?.defaultValue
              : undefined;
          return (
            <FormGroup key={field.name} titleText="">
              <FormItem>
                <FlexBox direction="Column">
                  <Label key={field.label} for={field.name}>
                    {field.label}
                  </Label>
                  {field.name !== "selection" ? (
                    <Input
                      value={defaultValue}
                      {...register(
                        field.name as "firstName" | "lastName" | "selection",
                        {
                          required: field.required,
                          // onBlur: handleSubmit(onSubmit),
                        }
                      )}
                    />
                  ) : (
                    <Select
                      value={defaultValue}
                      {...register(field.name, {
                        required: field.required,
                        // onBlur: handleSubmit(onSubmit),
                      })}
                    >
                      {field.options?.map((option) => (
                        <Option
                          key={option.value}
                          value={option.value}
                          selected={
                            defaultValue
                              ? option.value === defaultValue
                              : option.value === ""
                          }
                        >
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  )}
                  {(errors as any)[field.name] && (
                    <p>{field.label} is required</p>
                  )}
                </FlexBox>
              </FormItem>
            </FormGroup>
          );
        })}
      </Form>
    </ObjectPage>
  );
}
