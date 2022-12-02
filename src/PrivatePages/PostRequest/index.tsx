<<<<<<< HEAD
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
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";
import { getStoredClientUser } from "../../utils/LS";

type InputsPropT = {
  subject: string;
  desc: string;
};
=======
import React from "react";
import RequestCard from "../../Components/RequestCard";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { getStoredAuthToken } from "../../utils/LS";
import { RequestForm, RequestFormPageLayout ,FormControl,Button} from "./Styles";
>>>>>>> e58e7d662edcb28284d72e2777240b0ec1cf15d8

export default function PostRequest() {
  const [isLoading, setIsLoading] = useState(false);

  const { email, merithubUserID } = getStoredClientUser();
  console.log(email, "from login");
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
<<<<<<< HEAD
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
=======
        <RequestForm>
          <FormControl>
            <label htmlFor="Subject">Subject</label>
            <input type="text" placeholder="Physics"/>
          </FormControl>
           <FormControl>
            <label htmlFor="Subject">Description</label>
            <textarea name="" id="" cols={30} rows={10} />
          </FormControl>
          <Button>Post Request</Button>
>>>>>>> e58e7d662edcb28284d72e2777240b0ec1cf15d8
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
