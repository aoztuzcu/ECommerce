import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginAsync } from "@/store/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/block/FormInput";
import Button from "@/components/base/Button";
import LinkBase from "@/components/base/LinkBase";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Kullanıcı adı zorunlu."),
      password: Yup.string()
        .min(6, "En az 6 karakter olmalıdır.")
        .required("Parola zorunlu."),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginAsync(values));
    },
  });

  const fieldProps = (name) => ({
    field: formik.getFieldProps(name),
    meta: formik.getFieldMeta(name),
  });

  const usernameProps = fieldProps("username");
  const passwordProps = fieldProps("password");
  return (
    <div className="mx-auto">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 bg-slate-50 rounded-md shadow-md p-6 w-96"
      >
        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-800">
          Giriş Yap
        </h1>
        <LinkBase to="/register" tag="link">
          Hesabınız yok mu? Kayıt olun
        </LinkBase>
        <FormInput {...usernameProps} />
        <FormInput {...passwordProps} type="password" />
        <Button type="submit">Giriş Yap</Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
