import React, { forwardRef, useState, useEffect } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import Datetime from "react-datetime";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  RequestForm,
  RequestFormPageLayout,
  FormContainer,
  Input,
  FormInnerContainer,
  TextArea,
  FormError,
  PickerCont,
} from "./Styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/ApplicationCard/Style";
import { useForm,SubmitHandler } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import TutorOBJ from "../../classes/user.class"
import { toast } from "react-toastify";
import { getStoredClientUser } from "../../utils/LS";
import { useNavigate, useParams } from "react-router-dom";
import { AppColors } from "../../utils/constants";

type InputsPropT = {
  fullName: string;
    document: string;
  chargePerHour:number,
    language: string,
  bio:string
};

export default function TutorApplyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [document, setDocument] = useState(null);
  const [language, setLanguage] = useState([]);
  const [chargePerHour, setChargePerHour] = useState(0.00);
const {id} = useParams()
  const navigate = useNavigate();

  const goto = (path: string, data?: any) => {
    if (data) {
      navigate(path, data);
    } else {
      navigate(path);
    }
  };

  const schema = Yup.object({
    fullName: Yup.string().required("Required!"),
    chargePerHour: Yup.string().required("Required!"),
    document: Yup.string().required("Required!"),
    language: Yup.string().required("Required!"),
    bio: Yup.string()
      .required("Required!")
      .min(30, "description is too short - should be 30 chars minimum."),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsPropT>({
    resolver: yupResolver(schema),
  });

  const handlePostRequst:SubmitHandler<InputsPropT> = async (values:any) => {
    setIsLoading(true);
    console.log(values)
    const RqData = {
      document,
      bio,
      language,
      requestId:id,
        chargePerHour,
        fullName,
    };
    console.log(RqData)
    await TutorOBJ.tutor_apply_request(RqData).then((res: any) => {
      if (res) {
        if (res?.status === true) {
          toast.success(res?.message);
          setIsLoading(false);
          goto("/timeline");
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
              <label>Full Name</label>
              {errors.fullName && (
                <FormError>{errors.fullName.message}</FormError>
              )}
              <Input
                {...register("fullName", { required: true })}
                placeholder="John doe"
                type="text"
              />
            </FormContainer>
        <FormContainer>
              <label>Charge Per Hour</label>
              {errors.chargePerHour && (
                <FormError>{errors.chargePerHour.message}</FormError>
              )}
              <Input
                {...register("chargePerHour", { required: true })}
                placeholder="200"
                type="number"
              />
            </FormContainer>
            <FormContainer>
              <label>Upload Cover Letter</label>
              {errors.document && (
                <FormError>{errors.document.message}</FormError>
              )}
              <Input
                {...register("document", { required: true })}
                type="file"
              />
                      </FormContainer>
                          <FormContainer>
              <label>About Self</label>
              {errors.bio && <FormError>{errors. bio.message}</FormError>}
              <TextArea {...register("bio", { required: true })} />
            </FormContainer>
         
            
            <Button type="submit">
              {isLoading ? <Spinner isLoading={isLoading} /> : "Post Request"}
            </Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
