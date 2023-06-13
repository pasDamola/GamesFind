import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 charachters" }),
  age: z
    .number({ invalid_type_error: "Please input a number" })
    .min(18, { message: "Age must be equal to or greater than 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [formValues, setFormValues] = useState<FieldValues[]>([]);

  const onSubmit = (data: FieldValues) => {
    setFormValues([...formValues, data]);
  };

  const handleClick = (id: number) => {
    console.log(id);
    const remainingItems = formValues.filter((item, index) => {
      return id !== index;
    });

    setFormValues(remainingItems);
  };

  console.log(formValues);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>Form Items</p>
      {formValues.length === 0 && <p>No item added</p>}
      <ul className="list-group">
        {formValues.map((item, index) => (
          <>
            <li className="list-group-item" key={item.name}>
              {item.name}
            </li>
            <button
              onClick={() => {
                handleClick(index);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default Form;
