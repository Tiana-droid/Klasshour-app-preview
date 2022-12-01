import React, { useState } from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  RequestForm,
  RequestFormPageLayout,
  FormContainer,
  Input,
  FormInnerContainer,
  TextArea,
  FormError,
} from "./Styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import { UserData } from "../../PublicPages/context/userContext";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";

type InputsPropT = {
  subject: string;
  desc: string;
};

export default function PostRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const userDataFunction = UserData();
  const { email, merithubUserID } = userDataFunction();

  const schema = Yup.object({
    subject: Yup.string().required("Required!"),
    desc: Yup.string()
      .required("Required!")
      .min(10, "description is too short - should be 10 chars minimum."),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsPropT>({
    resolver: yupResolver(schema),
  });

  const handlePostRequst = async (values: any) => {
    setIsLoading(true);
    StudentOBJ.post_request({
      title: values.subject,
      description: values.desc,
      studentEmail: email,
      merithubStudentID: merithubUserID,
    }).then((res: any) => {
      if (res) {
        if (res?.status === true) {
          toast.success(res?.message);
          setIsLoading(false);
        } else {
          toast.error(res?.message);
          setIsLoading(false);
        }
      } else {
        toast.error(res?.message);
        setIsLoading(false);
      }
      setIsLoading(false);
    });
  };

  return (
    <UserLayout>
      <RequestFormPageLayout>
        <h2>Request Form</h2>
        <RequestForm onSubmit={handleSubmit(handlePostRequst)}>
          <FormInnerContainer>
            <FormContainer>
              <label>Subject</label>
              {errors.subject && (
                <FormError>{errors.subject.message}</FormError>
              )}
              <Input
                {...register("subject", { required: true })}
                placeholder="physics"
                type="text"
              />
            </FormContainer>
            <FormContainer>
              <label>Description</label>
              {errors.desc && <FormError>{errors.desc.message}</FormError>}
              <TextArea {...register("desc", { required: true })} />
            </FormContainer>
            <Button>
              {isLoading ? <Spinner isLoading={isLoading} /> : "Post Request"}
            </Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
