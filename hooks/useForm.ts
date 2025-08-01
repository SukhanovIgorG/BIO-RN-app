import { useState } from "react";

type ValidatorFn = (value: string) => string | null;

type Validators<T> = Partial<{
  [K in keyof T]: ValidatorFn[];
}>;

type UseFormProps<T extends Record<string, any>> = {
  initialValues: T;
  validators: Validators<T>;
};

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validators,
}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const runValidators = <K extends keyof T>(
    field: K,
    value: T[K]
  ): string | null => {
    const rules = validators[field];
    if (!rules) return null;
    for (const validate of rules) {
      const error = validate(value);
      if (error) return error;
    }
    return null;
  };

  const setField = <K extends keyof T>(field: K, value: T[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    const error = runValidators(field, value);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const validateAll = () => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    for (const key in validators) {
      const value = values[key];
      const error = runValidators(key, value);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (onValid: (values: T) => void) => {
    return () => {
      const valid = validateAll();
      if (valid) {
        onValid(values);
      }
    };
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  const isValid = Object.values(errors).every((e) => !e);
  const dirty = Object.keys(values).some(
    (key) => values[key as keyof T] !== initialValues[key as keyof T]
  );

  return {
    values,
    errors,
    touched,
    dirty,
    isValid,
    setField,
    validateAll,
    handleSubmit,
    reset,
  };
};
